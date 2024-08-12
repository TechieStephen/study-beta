<template>
<!-- <button type="button" @click="mode = 1" class="btn btn-outline" :class="{'active':mode==1}"> -->
<div class="selects">
   <button v-for="(item, i) in items" :key="i" :class="{'active':i == selectedIndex}" @click="update(item, i)" type="button" class="btn btn-outline">
         {{item}}
         <span>
            <svg width="20" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="8.63984" cy="8.49922" r="7.02" stroke="" stroke-width="1.56"/>
            </svg>
         </span>
   </button>
</div>
</template>

<script setup>
const {items, value} = defineProps(['items', 'value'])
const emits = defineEmits(['close','update:dataValue'])

const selectedIndex = ref(-1)
// const selected = ref(-1)

const update = (item, i)=>{
   selectedIndex.value = i
   emits('update:dataValue', item);
}

onMounted(()=>{
   selectedIndex.value = items.indexOf(value)
})
</script>

<style lang="scss" scoped>
.selects{
   display: grid;
   grid-template-columns: repeat(2, 45%);
   justify-content: space-between;
   align-items: center;
   flex-wrap: wrap;
   gap: 15px 5px;
   
   button{
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: .8em !important;
      font-weight: 600 !important;
      border-radius: 60px !important;
      padding: 15px 25px !important;
      border: $border !important;

      svg{
         stroke: #F5F5F7;
         margin-left: 5px;
      }

      &.active{
         border-color: $primaryColor !important;

         svg{
            stroke: $primaryColor !important;
         }
      }
   }
}

// @media (max-width:960px){
   
// .selects{
//    display: flex;
//    justify-content: center;
//    align-items: center;
//    flex-wrap: wrap;
//    gap: 15px 5px;
   
//    button{
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       padding: 8px 10px !important;
//       font-size: .75em !important;
//       font-weight: 600 !important;
//       border-radius: 60px !important;
//    }
// }
// }
</style>