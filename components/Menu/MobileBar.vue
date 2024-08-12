<script setup>
const route = useRoute()
import { onClickOutside } from '@vueuse/core'
const modalRef = ref(null)
// for the modals
onClickOutside(
  modalRef,
  (event) => {
    emits('hide')
  },
)

const emits = defineEmits("hide")

const name = ref(route.name)
</script>

<template>
<section>
   <div class="wrapper">
      <NuxtLink to="/" :class="{'active': route.name == 'index'}">
         <svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4679 4.29821C17.3259 4.93726 17.9218 5.38204 18.3634 5.76974C18.7939 6.1477 19.0211 6.4241 19.1676 6.69941C19.4732 7.27355 19.5 7.93274 19.5 9.95116V11.4425C19.5 13.4924 19.4971 14.9126 19.3291 15.9823C19.1683 17.0052 18.876 17.5672 18.3854 17.987C17.8722 18.4261 17.1482 18.7031 15.8721 18.8499C14.581 18.9984 12.8813 19 10.5 19C8.1187 19 6.41896 18.9984 5.12794 18.8499C3.85176 18.7031 3.12775 18.4261 2.61465 17.987C2.12402 17.5672 1.83166 17.0052 1.67094 15.9823C1.50288 14.9126 1.5 13.4924 1.5 11.4425L1.5 9.95116C1.5 7.93274 1.52685 7.27355 1.83235 6.69941C1.97885 6.4241 2.2061 6.1477 2.63659 5.76974C3.07818 5.38204 3.67409 4.93726 4.53209 4.29821C6.11608 3.11843 7.23442 2.28755 8.18662 1.74156C9.11292 1.21043 9.79825 1 10.5 1C11.2017 1 11.8871 1.21043 12.8134 1.74156C13.7656 2.28755 14.8839 3.11843 16.4679 4.29821Z" stroke="6C6C6C" stroke-width="2"/>
         </svg>

      </NuxtLink>

      <NuxtLink to="/wishlist" :class="{'active': route.name == 'wishlist'}">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
         </svg>

      </NuxtLink>

      <NuxtLink to="/my-upload" :class="{'active': route.name == 'my-upload'}">
         <svg viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 14H16V17C16 18.1046 15.1046 19 14 19H4C2.89543 19 2 18.1046 2 17V14Z" stroke="#" stroke-width="2" stroke-linejoin="round"/>
            <path d="M1 5H17V12C17 13.1046 16.1046 14 15 14H3C1.89543 14 1 13.1046 1 12V5Z" stroke="#" stroke-width="2" stroke-linejoin="round"/>
            <rect x="9" y="10" width="0.01" height="0.01" stroke="#" stroke-width="3" stroke-linejoin="round"/>
            <path d="M6 3C6 1.89543 6.89543 1 8 1H10C11.1046 1 12 1.89543 12 3V5H6V3Z" stroke="#" stroke-width="2" stroke-linejoin="round"/>
         </svg>

      </NuxtLink>

      <NuxtLink to="/account" :class="{'active': route.name == 'account'}">
         <svg viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 19C15.5 15.134 12.366 12 8.5 12C4.63401 12 1.5 15.134 1.5 19M8.5 9C6.29086 9 4.5 7.20914 4.5 5C4.5 2.79086 6.29086 1 8.5 1C10.7091 1 12.5 2.79086 12.5 5C12.5 7.20914 10.7091 9 8.5 9Z" stroke="#" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>

      </NuxtLink>
   </div>
</section>
</template>


<style lang="scss" scoped>

section{
   position: sticky;
   bottom: 1px;
   left: 0px;

   z-index: 15;

   display: none;
   justify-content: center;
   align-items: center;
}
.wrapper{
   width: 90%;
   background: #2F2F2F;
   height: 55px;
   border-radius: 50px;
   display: flex;
   justify-content: space-between;
   align-items: center;

   a{
      width: 20%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      // background: red;

      svg{
         stroke: #6C6C6C;
         width: 20px;
         height: 20px;
      }

      &.active{
         svg{
            stroke: $white !important;
         }
      }

   }
}

@media (max-width:960px){
   section{
      display: flex;
   }
}

</style>