<script setup>
import { onClickOutside } from '@vueuse/core'
const modalRef = ref(null)
// for the modals
onClickOutside(
  modalRef,
  (event) => {
   if(event.target.id !== "menu-btn"){
      emits('hide')
   }
  },
)

const emits = defineEmits("hide")
</script>

<template>
<section ref="modalRef">
   <div class="prof-header mb-1">
      <span class="small">Hello,</span>
      <h5 class="fw-600">Eduke Ohien Stephen</h5>
   </div>

   <ul class="prof-main" @click="emits('hide')">
      <li>
         <NuxtLink to="/wishlist">
            <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
            </svg>
            Wishlist
         </NuxtLink>
      </li>

      <li>
         <NuxtLink to="/my-upload">
            <svg width="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M2 14H16V17C16 18.1046 15.1046 19 14 19H4C2.89543 19 2 18.1046 2 17V14Z" stroke="#6C6C6C" stroke-width="2" stroke-linejoin="round"/>
               <path d="M1 5H17V12C17 13.1046 16.1046 14 15 14H3C1.89543 14 1 13.1046 1 12V5Z" stroke="#6C6C6C" stroke-width="2" stroke-linejoin="round"/>
               <rect x="9" y="10" width="0.01" height="0.01" stroke="#6C6C6C" stroke-width="3" stroke-linejoin="round"/>
               <path d="M6 3C6 1.89543 6.89543 1 8 1H10C11.1046 1 12 1.89543 12 3V5H6V3Z" stroke="#6C6C6C" stroke-width="2" stroke-linejoin="round"/>
            </svg>
            My Uploads
         </NuxtLink>
      </li>

      <li>
         <NuxtLink to="/admin/past-questions">
            <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
            </svg>


            Manage Past Questions
         </NuxtLink>
      </li>

      <li>
         <NuxtLink to="/admin/materials">
            <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
            Manage Materials
         </NuxtLink>
      </li>

      <li>
         <NuxtLink to="/account">

         <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
         </svg>

         Account Settings
      </NuxtLink>

      </li>

      <li>
         <NuxtLink to="/login">

            <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
            </svg>

            Logout
         </NuxtLink>
      </li>
   </ul>
</section>
</template>


<style lang="scss" scoped>
@import "@/assets/scss/menu.scss";

</style>