
<script setup>
const router = useRouter()
const mode = ref("")
const noQuestions = ref(20)
const time = ref(25)

const start = () =>{
   router.push({path:"/take-quiz", query:{mode:mode.value.toLowerCase(), noq:noQuestions.value}})
}

watch(
   mode,
   () =>{
   if(mode.value == 1){
      noQuestions.value = 25
      time.value = 25
   }else{
      noQuestions.value = 70
      time.value = 60
   }
})
</script>


<template>
<Modal size="sm" title="CSC 201 - Intro to Computer">
   <template v-slot:body>
      <div class="mb-3">
         <!-- <h4 class="text-center my-3">CSC 201 - Intro to Computer</h4> -->
         
         <h4 class="mt-4 fw-600">Which mode would you like to practice?</h4>
         <div class="modes mt-2">
            <FormSelectButtonsLarge v-model:dataValue="mode" :value="mode" :items="['Exam','Practice']"/>
         </div>
      </div>
   </template>

   <template v-slot:footer>
      <div class="flex justify-end align-items-center">
         <div class="flex justify-end align-items-center mr-3">
            <div class="flex justify-center align-items-center mr-2">
               <svg width="30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
               </svg>
               <span class="meta-data">{{ noQuestions }}</span>
            </div> 

            <div class="flex justify-center align-items-center">
               <svg width="30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
               </svg>
               <span class="meta-data">{{time}}</span>
            </div>
         </div>

         <button type="button" class="btn btn-primary" @click="start">Start Quiz</button>
      </div>
   </template>
</Modal>
</template>

<style lang="scss" scoped>
span{
   font-size: .9em !important;
}
.meta-data{
   font-weight: 600;
   width: 15px;
   font-size: 1em !important;
}
</style>