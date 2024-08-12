<script setup>
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

import {useAppStore} from "~/stores/app"
const appStore = useAppStore()
const route = useRoute()
const router = useRouter()
const { $register, $toast } = useNuxtApp();
const {validateEmail, validatePhone, phoneTaken} = useValidation();

definePageMeta({
    auth:false
});

useSeoMeta({
  title: `${appStore.appname} | Create an account`,
  ogTitle: `${appStore.appname} | Create an account`,
  description: `Create a new ${appStore.appname} account`,
  ogDescription: `Create a new ${appStore.appname} account}`,
  // ogImage: property.value.assets[0].url,//'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

const errorMsg = ref("")
const procesing = ref(false) 

const isPhoneTaken = ref(false)

const data = reactive({
  firstName:"",
  lastName:"",
  // phoneNumber:"",
  email:"",
  password:"",
})

const x = ref(data.phoneNumber)

watch(
  () => data.phoneNumber,
  async (newValue, oldValue) => {
    errorMsg.value = ""
    const res = await phoneTaken(newValue)
    isPhoneTaken.value = res
  },
  { deep: true }
)

//email validation
const isEmailValid = (value) => validateEmail(value)
const isPhoneValid = (value) => validatePhone(value)
const checkPhoneTaken = (value) => isPhoneTaken.value === false
const isPasswordValid = (value) => value.length >= 8
//validation rules
const rules = computed(()=>{
    return{
      firstName: {required:helpers.withMessage("Enter firstname", required)},
      lastName:{required:helpers.withMessage("Enter lastname", required)},
      // phoneNumber:{
      //   isPhoneValid:helpers.withMessage("Enter a valid phone number", isPhoneValid),
      //   checkPhoneTaken:helpers.withMessage("Phone number is already resgistered", checkPhoneTaken)
      // },
      email: {isEmailValid:helpers.withMessage("Enter a valid email", isEmailValid)},
      password:{
        required:helpers.withMessage("Please enter a password", required),
        isPasswordValid:helpers.withMessage("Should be at least 8 characters", isPasswordValid)
      }
    }
})

//set up validation with vuelidate
const v$ = useVuelidate(rules, data)

const register = async()=>{
  const isFormOk = await v$.value.$validate()
  if(isFormOk){
    procesing.value = true

    $register(data)
    .then(()=>{
      procesing.value = false
      $toast.success(`Hi, ${data.firstName}! Welcome to ${appStore.appname}!`);
      router.push("/")
    })
    .catch(error=>{
      errorMsg.value = error
      procesing.value = false
      $toast.error(error);
    })
  }else{
    return
  }
}

const loginLink = ()=>{
  if(route.query?.redirect)
    return '/login?redirect='+route.query.redirect
  else
  return '/login'
}
</script>



<template>
<section class="auth-main">
    <div class="wrapper">
    <form @submit.prevent="register()">
        <h2 class="text-center mb-4">Create an account</h2>

        <!-- <AuthGoogleLogin/> -->

        <div class="or relative">
          <hr>
          <span>OR</span>
        </div>

        <p class="errorMsg" v-if="errorMsg">{{ errorMsg }}</p>
        <div class="form-section">
        <div class="form-group">
            <!-- <label for="">First Name</label> -->
            <input v-model="data.firstName" type="text" name="" id="firstname" placeholder="First Name" :class="{ 'in-valid': v$.firstName.$errors.length }">
            <div class="invalid-span" v-if="v$.firstName.$errors.length">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              {{ v$.firstName.$errors[0].$message }}
            </div>
        </div>

        <div class="form-group">
            <!-- <label for="">Last Name</label> -->
            <input v-model="data.lastName" type="text" name="" id="latname" placeholder="Last Name" :class="{ 'in-valid': v$.lastName.$errors.length }">
            <span class="invalid-span" v-if="v$.lastName.$errors.length">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
                {{ v$.lastName.$errors[0].$message }}
            </span>
        </div>
        </div>

        <div class="form-group">
          <!-- <label for="">Email</label> -->
          <input v-model="data.email" type="text" name="" id="email" placeholder="email e.g johndoe@gmail.com" :class="{ 'in-valid': v$.email.$errors.length }">
          <span class="invalid-span" v-if="v$.email.$errors.length">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              {{ v$.email.$errors[0].$message }}
          </span>
          <!-- <span class="input-info">use your business email if you are an agent/realtor</span> -->
        </div>

        <div class="form-group">
          <!-- <label for="">Password</label> -->
          <input v-model="data.password" type="password" name="" id="password" placeholder="Password" :class="{ 'in-valid': v$.password.$errors.length }">
          <span class="invalid-span" v-if="v$.password.$errors.length">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              {{ v$.password.$errors[0].$message }}
          </span>
        </div>

        <div class="mt-1">
        <button type="submit" class="btn btn-primary block flex justify-center align-items-center">
            <Processing :margin="true" v-if="procesing"/>
            <template v-else>Continue</template>
          </button>
        </div>

        <div class="join">
            <p class="text-center mt-3">
                Don't have an account? 
                <NuxtLink :to="loginLink()" class="fw-700  btn-text btn-text-underline">log in</NuxtLink>
            </p>
        </div>
    </form>
    </div>
</section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/auth.scss";
</style>