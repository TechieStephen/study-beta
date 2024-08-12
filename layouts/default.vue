<script setup>
// import {useAppStore} from "~/stores/app"
// const appStore = useAppStore()
// const route = useRoute()
</script>


<template>
    <div>
      <Header/>

      <main>
          <NuxtPage/>
      </main>

      <MenuMobileBar/>
      
      <Footer/>
    </div>
</template>

<style lang="scss" scoped>
// @import "@/assets/styles/footer.scss";

main{
  min-height: 80vh;
  // margin-top: 0px;
  // &.paddingTop{
  //   padding-top: 500px;
  // }
}

// .float-header{
//   transform: translateY(0px);
//   transition: transform .4s ease-in-out;

//   &.slideOut{
//     transform: translateY(-150px);
//   }
// }
</style>