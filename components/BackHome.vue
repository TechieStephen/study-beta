<script setup>
const route = useRoute()
const router = useRouter()


const back = router.options.history.state.back || null

const goBack =()=>{
  // console.log(back == null)
  if(back == null){
    router.push(`/`)
  }else{
    router.go(-1)
  }
}


// console.log("route: ", toRaw(route))
console.log("router: ", toRaw(router))
console.log("router: ", toRaw(router.options.history.state.back))
</script>

<template v-if="loading">
  <div class="mt-3 text-center back">
      <button @click="goBack" class="flex justify-center align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>
        Close
      </button>
  </div>
</template>

<style lang="scss" scoped>
.back{
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        background: $grey1 !important;
        width: 100%;
        font-weight: 500;
        padding: 10px 0px;
        font-size: 1em !important;
    }

    svg{
        width: 20px;
    }
}
</style>