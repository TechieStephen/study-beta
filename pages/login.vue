<script setup>
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

import {useAppStore} from "~/stores/app"
const appStore = useAppStore()
const route = useRoute()

const { $login } = useNuxtApp();
const {validateEmail} = useValidation();

const procesing = ref(false) 
const errorMsg = ref("")

definePageMeta({
    auth:false
});

useSeoMeta({
  title: `${appStore.appname} | Login`,
  ogTitle: `${appStore.appname} | Login`,
  description: `Login to your ${appStore.appname} account`,
  ogDescription: `Login to your ${appStore.appname} account`,
  // ogImage: property.value.assets[0].url,//'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

const data = ref({
  username: "",
  password: ""
})

//email validation
const isValidEmail = (value) => validateEmail(value)

//validation rules
const rules = computed(()=>{
    return{
      // username: {required:helpers.withMessage("Enter your email or phone", required)},
      username: {isValidEmail:helpers.withMessage("Enter a valid email", isValidEmail)},
      password:{required:helpers.withMessage("Please enter your password", required)}
    }
})
//set up validation with vuelidate
const v$ = useVuelidate(rules, data)


const login = async ()=>{
  const isFormOk = await v$.value.$validate()
  if (!isFormOk) {
      // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
      return
  }else{
      procesing.value = true
      errorMsg.value = ""
      $login(data.value)
      .then((user)=>{
        procesing.value = false
      })
      .catch(error=>{
        errorMsg.value = error
        // data.value = { username: "", password: "" }
        procesing.value = false
      })
  }
}

const registerLink = ()=>{
  if(route.query?.redirect)
    return '/register?redirect='+route.query.redirect
  else
  return '/register'
}
</script>


<template>
<section class="auth-main">
    <div class="wrapper">
    <form @submit.prevent="login">
        <h2 class="text-center mb-4">Log in to your account</h2>

        <!-- <AuthGoogleLogin/> -->

        <div class="or relative">
        <hr>
        <span>OR</span>
        </div>

        <p class="errorMsg mt-2" v-if="errorMsg">{{ errorMsg }}</p>
        
        <div class="form-group">
          <input v-model="data.username" type="text" name="" id="username" placeholder="Email / Phone" :class="{ 'in-valid': v$.username.$errors.length }">
          <span class="invalid-span" v-if="v$.username.$errors.length">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              {{ v$.username.$errors[0].$message }}
          </span>
        </div>
        
        <div class="form-group">
          <input v-model="data.password" type="password" name="" id="password" placeholder="Password" :class="{ 'in-valid': v$.password.$errors.length }">
          <span class="invalid-span" v-if="v$.password.$errors.length">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              {{ v$.password.$errors[0].$message }}
          </span>
        </div>
        

        <p class="my-3 bold">
            <NuxtLink to="/account/forgot-password">Forgot password?</NuxtLink>
        </p>

        <div class="mt-2">
          <button type="submit" class="btn btn-primary block flex justify-center align-items-center">
              <Processing :margin="true" v-if="procesing"/>
              <template v-else>Continue</template>
          </button>
        </div>

        <div class="join">
        <p class="text-center mt-3">
            Don't have an account? 
            <NuxtLink :to="registerLink()" class="fw-700  btn-text btn-text-underline">Create an Account</NuxtLink>
        </p>
        </div>
    </form>
    </div>
</section>

</template>

<style lang="scss" scoped>
@import "@/assets/scss/auth.scss";
</style>