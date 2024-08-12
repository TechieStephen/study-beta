<script setup>
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

import {useAppStore} from "~/stores/app"
const appStore = useAppStore()
const route = useRoute()
const {$post} = useNuxtApp()
const { $logoutUser, $toast } = useNuxtApp();

definePageMeta({
    // layout: "auth",
});
const procesing = ref(false)
const tab = ref(0)

const payload = ref({
    userId: route.query.userId,
    code: route.query.code,
    password:"",
    confirmPassword:""
})


const isConfirmPassword = (value) => value === payload.value.password
const isPasswordValid = (value) => value.length >= 8

const rules = computed(()=>{
    return{
      password: {required:helpers.withMessage("Please a new password", required),
      isPasswordValid:helpers.withMessage("Should be at least 8 characters", isPasswordValid)
      },
      confirmPassword: {
      required:helpers.withMessage("Re-enter password", required),
      isConfirmPassword:helpers.withMessage("Passwords do not match", isConfirmPassword),
      },
    }
})

//set up validation with vuelidate
const v$ = useVuelidate(rules, payload)

const resetPassword = async ()=>{
    const isFormOk = await v$.value.$validate()
    if (!isFormOk) {
        // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
        return
    }else{
        alert("Passwords match")
        // procesing.value = true;
        // await $post(`accounts/password`, payload.value)
        // .then(()=>{
        //     tab.value = 1
        //     procesing.value = false
        //     $logoutUser(false)
        // })
        // .catch((error)=>{
        //     procesing.value = false
        //     alert(error)
        // })
    }
}
</script>

<template>
<section class="auth-main">
    <div class="wrapper">
        <div class="icon">
            <svg height="40" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="40" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path d="M360,224v-72c0-57.4-46.6-104-104-104c-57.5,0-104,46.6-104,104v72H96v240h320V224H360z M168,152c0-48.5,39.5-88,88-88    c48.5,0,88,39.5,88,88v72H168V152z M400,448H112V240h288V448z"/></g><path d="M288,320c0-17.7-14.3-32-32-32s-32,14.3-32,32c0,14.9,10.2,27.4,24,31v41c0,4.4,3.6,8,8,8s8-3.6,8-8v-41   C277.8,347.4,288,334.9,288,320z M256,336c-8.8,0-16-7.2-16-16s7.2-16,16-16s16,7.2,16,16S264.8,336,256,336z"/></g></svg>
        </div>
        <div v-if="tab === 0">
            <div class="mb-3">
                <h3 class="mb-2 text-center">Set new Password {{ payload.password == payload.confirmPassword }}</h3>
                <p class="text-center">Your new password should be different from the last one</p>
            </div>
            <form @submit.prevent="resetPassword()">
                <div class="form-group">
                    <input v-model="payload.password" type="password" name="" id="password" placeholder="Password" :class="{ 'in-valid': v$.password.$errors.length }">
                    <span class="invalid-span" v-if="v$.password.$errors.length">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        {{ v$.password.$errors[0].$message }}
                    </span>
                </div>

                <div class="form-group">
                    <input v-model="payload.confirmPassword" type="password" name="" id="password" placeholder="Password" :class="{ 'in-valid': v$.confirmPassword.$errors.length }">
                    <span class="invalid-span" v-if="v$.confirmPassword.$errors.length">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        {{ v$.confirmPassword.$errors[0].$message }}
                    </span>
                </div>

                <div class="mt-2">
                    <button type="submit" class="btn block flex justify-center align-items-center">
                        <Processing :margin="true" v-if="procesing"/>
                        <span>Reset Password</span>
                    </button>
                </div>
            </form>
        </div>
        <div v-else>
            <div class="mb-3">
                <h3 class="mb-2 text-center">Password Reset Successful</h3>
                <p class="text-center mb-2">Your password reset was successfull 😊</p>
                <p class="text-center">Click on the button below to login</p>
            </div>
            
            <div class="mt-2">
                <a href="/login" type="button" class="btn block flex justify-center align-items-center">
                    Login
                </a>
            </div>
        </div>
        <!-- <BackHome/> -->
    </div>
</section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/auth.scss";
</style>