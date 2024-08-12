<script setup>
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

const {$get} = useNuxtApp()
const {validateEmail} = useValidation();

const procesing = ref(false)

const tab = ref(0)
const data = ref({
  email: "",
})
const time = ref("")

definePageMeta({
//   layout: "auth",
});

//email validation
const isValidEmail = (value) => validateEmail(value)

//validation rules
const rules = computed(()=>{
    return{
      email: {isValidEmail:helpers.withMessage("Enter a valid email", isValidEmail)},
    }
})
//set up validation with vuelidate
const v$ = useVuelidate(rules, data)

const resendLink = async () => {
    if(tab.value > 0){
        procesing.value = true;
        await $get(`accounts/password/${data.value.email}`)
        .then(()=>{
            tab.value = 1;
            countDown(15);
            procesing.value = false;
        })
        .catch((error)=>{
            procesing.value = false
            console.log(error) 
        })
    }
}

const countDown = (minutes) => {
    var seconds = 60;
    var mins = minutes
    function tick() {
        //This script expects an element with an ID = "counter". You can change that to what ever you want. 
        // var counter = document.getElementById("counter");
        var current_minutes = mins-1
        seconds--;
        time.value = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            if(mins > 1){
                countDown(mins-1);           
            }
        }
    }
    tick();
}


const sendLink = async ()=>{
    const isFormOk = await v$.value.$validate()
    if (!isFormOk) {
        // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
        return
    }else{
        procesing.value = true;
        await $get(`accounts/password/${data.value.email}`)
        .then(()=>{
            tab.value = 1;
            countDown(8);
            procesing.value = false;
        })
        .catch((error)=>{
            procesing.value = false
            console.log(error) 
        })
    }
}

// const 
</script>

<template>
<section class="auth-main">
    <div class="wrapper">
        <div class="icon">
            <svg height="40" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="40" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path d="M360,224v-72c0-57.4-46.6-104-104-104c-57.5,0-104,46.6-104,104v72H96v240h320V224H360z M168,152c0-48.5,39.5-88,88-88    c48.5,0,88,39.5,88,88v72H168V152z M400,448H112V240h288V448z"/></g><path d="M288,320c0-17.7-14.3-32-32-32s-32,14.3-32,32c0,14.9,10.2,27.4,24,31v41c0,4.4,3.6,8,8,8s8-3.6,8-8v-41   C277.8,347.4,288,334.9,288,320z M256,336c-8.8,0-16-7.2-16-16s7.2-16,16-16s16,7.2,16,16S264.8,336,256,336z"/></g></svg>
        </div>
        <div v-if="tab == 0">
            <div class="mb-3">
                <h3 class="mb-2 text-center">Forgot Password?</h3>
                <p class="text-center">No worries we'll send you reset instructions</p>
            </div>
            <form @submit.prevent="sendLink()">
                <div class="form-group">
                    <input v-model="data.email" type="text" name="" id="email" placeholder="Email / Phone" :class="{ 'in-valid': v$.email.$errors.length }">
                    <span class="invalid-span" v-if="v$.email.$errors.length">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        {{ v$.email.$errors[0].$message }}
                    </span>
                </div>
                    
                <div class="mt-2">
                    <button type="submit" class="btn block flex justify-center align-items-center">
                        <Processing :margin="true" v-if="procesing"/>
                        <span>Get Reset Link</span>
                    </button>
                </div>                
            </form>
        </div>
        
        <div v-else class="resend">
            <div class="mb-3">
                <h3 class="mb-2 text-center">Check your email</h3>
                <p class="text-center">We sent a password reset link to {{ email }}</p>
            </div>
            <p id="counter" class="mt-3">
                Didn't receive the email? resend in 
                <span>{{ time }}</span>
                <!-- <span v-if="time !== '0:00'">{{ time }}</span> -->
            </p>
            
            <div class="mt-2">
                <button type="button" class="btn block flex justify-center align-items-center" :disabled="time !== '0:00'" @click="resendLink()">
                    <Processing :margin="true" v-if="procesing"/>
                    <span>Click to resend</span>
                </button>
            </div>
        </div>
        
        <!-- <BackHome/> -->
    </div>
</section>
</template>



<style lang="scss" scoped>
@import "@/assets/scss/auth.scss";

.resend{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    #counter{
        span{
            font-weight: 800 !important;
            background: $grey1;
            padding: 8px;
            width: 60px !important;
            display: inline-block;
            text-align: center;
        }
    }
}

button:disabled{
    opacity: .5;
    cursor: not-allowed;
}
</style>