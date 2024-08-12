<script setup>
import {useAppStore} from "~/stores/app"
const appStore = useAppStore()
const {$get} = useNuxtApp()

definePageMeta({
    // layout: "auth",
});
const procesing = ref(false)
const tab = ref(0)

const getLink = async ()=>{
    procesing.value = true;
    await $get("accounts/verify-email")
    .then(()=>{
        tab.value = 1
        procesing.value = false
    })
    .catch(()=>{
        procesing.value = false
        // alert(error)
    })
}

</script>


<template>
<section class="auth-main">
    <div class="wrapper">
        <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 no-fill">
                <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
            </svg>
        </div>
        <div v-if="tab === 0">
            <div class="mb-3">
                <h3 class="mb-2 text-center">Verify your account</h3>
                <p class="text-center">Secure your account by verifying your email</p>
            </div>
            <form @submit.prevent="getLink()">
                <div class="form-group">
                    <input type="text" name="" id="" :value="appStore?.user?.email">
                </div>
                <div class="mt-2">
                    <button type="submit" class="btn block flex justify-center align-items-center">
                        <Processing :margin="true" v-if="procesing"/>
                        <span>Get Link</span>
                    </button>
                </div>
            </form>
        </div>
        <div v-else>
            <div class="mb-3">
                <h3 class="mb-2 text-center">Comfirmation link sent</h3>
                <p class="text-center">Please follw the instructions sent to <b>{{appStore.user.email}}</b></p>
            </div>
        </div>
        <!-- <BackHome/> -->

    </div>
</section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/auth.scss";

</style>