<script setup>
// import {useAppStore} from "~/stores/app"
// const appStore = useAppStore()

import { onClickOutside } from '@vueuse/core'
const modalRef = ref(null)
// for the modals
onClickOutside(
  modalRef,
  (event) => {
    close()
  },
)

const props = defineProps(['size', 'bg', 'title'])
const emits = defineEmits(['close'])

const show = ref(false)

const timeout = setTimeout(() => {
  show.value = true
}, 10);

const close = ()=>{
  show.value = false
  setTimeout(() => {
      emits('close')
  }, 200);
}

onMounted(()=>{
  document.body.classList.add("modal-open")
})

onBeforeUnmount(()=>{
  document.body.classList.remove("modal-open")
  clearTimeout(timeout)
})
</script>


<template>
<!-- <Teleport to="body"> -->
  <section class="modal">
    <Transition name="modal-animate">
      <div class="wrapper" :class="[size,bg]" v-if="show" ref="modalRef">
        <div class="modal-header">
            <slot name="header">
                <h4 v-if="title">{{ title }}</h4>
                <span v-else></span>
            </slot>
            
            <button type="button" class="btn-text close" @click="close()">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
        </div>

        <div class="modal-body">
          <slot name="body">
            <p class="text-center">
              Modal body passed as slot
            </p>
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
          </slot>
        </div>
      </div>
    </Transition>

  </section>
<!-- </Teleport> -->
</template>


<style lang="scss" scoped>
// @import "@/assets/styles/modal.scss";
$paddingDesktop: 0px 30px !important;
$paddingMobile: 0px 18px !important;

.modal{
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;

    z-index: 60;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: none;

    background: $modalBackground;
}


.wrapper{
    background: $white !important;
    position: relative;
    border-radius: 10px;
    display: grid;
    // overflow: hidden;
    // display: grid !important;
    // grid-template-columns: 100%;
    grid-template-rows: 50px calc(100% - 30px);
    // padding-bottom: 10px;

    // overflow-y: auto;


    &.sm{ width: 35%; }
    &.md{ width: 60%; max-height: 80vh; }
    &.lg{ width: 100vw; min-height: 100vh; }
    &.lg{ 
        .modal-header{
            .close{
                display: flex;
                justify-content: center;
                align-items: center;

                position: relative;

                right: 0px !important;
                top: 0px;
            }
        }
    }
}


.modal-header{
    padding: $paddingDesktop;
    border-radius: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    position: sticky;
    top: 0px;
    left: 0px;
    background: $white;
    z-index: 500;
    color: $textColor;

    // background: $grey2;

    

    .close{
        display: flex;
        justify-content: center;
        align-items: center;
        
        width: 35px;
        height: 35px;

        position: absolute;

        right: -45px;
        top: 0px;
        background: #202020 !important;
        border-radius: 50%;
        padding: 4px !important;
        cursor: pointer;

        svg{
            stroke: $white;
            width: 25px !important;
            height: 25px !important;
        }
    }

}

.modal-body{
    padding: $paddingDesktop;
    border-radius: 10px;
    width: 100%;
    margin-bottom: 100px;
    // background: red;
    overflow-y: auto;

    margin-top: 10px;
}

.modal-footer{
    padding: $paddingDesktop;
    border-radius: 10px;
    width: 100%;
    position: absolute;
    bottom: 0px;

    margin-bottom: 10px !important;
    // background: grey;
}


@media (max-width:1250px) {
.wrapper{
  &.sm{ width: 40%; }
  &.md{ width: 70%;}
}
}

@media (max-width:1100px) {
  .wrapper{
    &.sm{ width: 45%; }
    &.md{ width: 75%;}
  }
}

@media (max-width:800px) {
  .modal{
      height: 100vh;
      justify-content: center;
      // align-items: flex-end;
  }
  
  .wrapper{
    // bottom: 0px;
    &.sm{ width: 60%; min-height: 50vh; }
    &.md{ width: 100%; height: 100vh !important; min-height: 100vh !important;}
  }

  .modal-header, .modal-body, .modal-footer{
      padding: $paddingMobile;
  }
  .modal-footer{
      position: fixed;
      margin-bottom: 5px !important;
  }

  .wrapper{
    &.sm{ 
    .modal-footer{
        position: absolute;
        margin-bottom: 15px !important;
    }
   }
  }

  .modal-header{
    .close{
        position: relative;

        width: 30px;
        height: 30px;

        right: 0px;
        top: 0px;
    }
  }

}

@media (max-width:660px) {
  .wrapper{
    &.sm{ width: 70%; }
  }
}

@media (max-width:560px) {
  .wrapper{
    &.sm{ width: 100%; }  
  }
}
</style>