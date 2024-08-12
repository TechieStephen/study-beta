<script setup>
import {useAppStore} from "~/stores/app"
const appStore = useAppStore()
const route = useRoute()
const router = useRouter()
const {$post, $setUserAndToken} = useNuxtApp()
const tab = ref(0)
const failed = ref(false)

definePageMeta({
    // layout: "auth",
});

const verify = async() =>{
    await $post("accounts/verify-email", route.query)
    .then((res)=>{
        $setUserAndToken(res)
        tab.value = 1
    })
    .catch((error)=>{
        failed.value = true
        tab.value = 3
        // alert(error)
    })
}


onMounted(async ()=>{
    verify()
}) 

</script>

<template>
<section class="auth-main">
    <div class="wrapper">
        <div class="icon" :class="{'failed':failed}">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 no-fill">
                <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
            </svg>
        </div>
        <div v-if="tab == 0">
            <div class="mb-4">
                <h3 class="mb-2 text-center">Verifiying Your Account</h3>
            </div>
            <div class="loading-wrapper">
                <Loading/>
            </div>
        </div>

        <div v-else-if="tab == 1" class="result">
            <div class="mb-3">
                <h3 class="mb-2 text-center">Account Verified</h3>
                <p class="text-center">Your account verification was successful</p>
            </div>
            <div class="mt-2">
                <NuxtLink to="/login" class="btn btn-primary block flex justify-center align-items-center">
                    Login
                </NuxtLink>
        
                <!-- <BackHome/> -->
            </div>
        </div>
        
        <div v-else class="result">
            <div class="mb-3">
                <h3 class="mb-2 text-center">Account Verification Failed</h3>
                <p class="text-center">Your account verification failed, please <b><NuxtLink class="link" to="/account/comfirmemail"> click here</NuxtLink></b> to request for a new verification link</p>
            </div>
            <!-- <BackHome/> -->
        </div>

    </div>
</section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/auth.scss";

.result{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>