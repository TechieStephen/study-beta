
<script setup>
const router = useRouter()
const type = ref("")


</script>

<template>
<Modal size="sm" title="Add New Resource">
   <template v-slot:body>
      <div>
         <!-- <h4 class="text-center">Add New Resource</h4> -->
         
         <h4 class="mt-1 fw-600">What resource is this?</h4>
         <div class="types mt-2">
            <FormSelectButtonsLarge v-model:dataValue="type" :value="type" :items="['Material','Past Question']"/>
         </div>

         <div class="mt-3">
            <label for="">File submissions</label>
            <label for="file-upload" class="file-upload">
               <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33.3526 22.0087L32.737 29.7042C32.5061 32.059 32.3214 33.8597 28.1505 33.8597H8.78866C4.61771 33.8597 4.43302 32.059 4.20216 29.7042L3.58652 22.0087C3.46339 20.7313 3.86356 19.5461 4.58693 18.6381C4.60232 18.6227 4.60232 18.6227 4.61771 18.6073C5.46421 17.5761 6.74166 16.9297 8.17302 16.9297H28.7661C30.1975 16.9297 31.4595 17.5761 32.2906 18.5765C32.306 18.5919 32.3214 18.6073 32.3214 18.6227C33.0756 19.5308 33.4911 20.7159 33.3526 22.0087Z" stroke="" stroke-width="1.73148" stroke-miterlimit="10"/>
                  <path d="M5.38672 17.5925V9.66615C5.38672 4.43323 6.69495 3.125 11.9279 3.125H13.8825C15.8372 3.125 16.2835 3.70986 17.0223 4.69488L18.9769 7.31134C19.4694 7.95776 19.7619 8.35792 21.0701 8.35792H24.9948C30.2277 8.35792 31.5359 9.66615 31.5359 14.8991V17.6541" stroke="" stroke-width="1.73148" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.5137 26.1641H22.4246" stroke="" stroke-width="1.73148" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>

            </label>
            <input type="file" id="file-upload">
            <span class="input-info">drag or browser for file from device</span>
         </div>

         <div class="files my-4">
            <div class="file" v-for="i in 1" :key="i">
               <span class="name">file1.pdf</span>
               <button type="button" class="btn btn-text">
                  <svg width="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
               </button>
            </div>
         </div>
      </div>
   </template>

   <template v-slot:footer>
      <p class="text-center mb-1"><b class="color-link link">Click here</b> to learn about uploading and how you can <b>earn</b></p>
      <button type="button" class="btn block btn-primary" @click="start">Submit</button>
   </template>
</Modal>
</template>


<style lang="scss" scoped>
span{
   font-size: .9em;
}
.file{
   background: rgba($color: $primaryColor, $alpha: .05);
   margin-bottom: 10px;
   padding: 5px 10px;

   font-size: .9em !important;
   display: flex;
   justify-content:space-between;
   align-items: center;
   border-radius: 10px;

   button{
      padding: 5px 10px !important;

      &:hover{
         svg{
            stroke: $danger;
         }
      }
   }
}
</style>