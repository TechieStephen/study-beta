<script setup>  
// Define a title for the header
const showFilter = ref(false)

</script>

<template>
    <section>
      <div class="input-icon">
        <input class="input" type="text" placeholder="Search Course">
        <span class="icon">
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.58366 17.4993C13.9559 17.4993 17.5003 13.9549 17.5003 9.58268C17.5003 5.21043 13.9559 1.66602 9.58366 1.66602C5.2114 1.66602 1.66699 5.21043 1.66699 9.58268C1.66699 13.9549 5.2114 17.4993 9.58366 17.4993Z" stroke="#8E92BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.3337 18.3327L16.667 16.666" stroke="#8E92BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </div>

      <Filter/>
    </section>
  </template>
  
  <style lang="scss" scoped>
  section{
    width: 100%;
    // height: 80px;
    display: grid;
    grid-template-columns: 60% 30%;
    justify-content: space-between;
    align-items: stretch;
  }

  
    
  // .btn-filter{
  //   display: none;
  //   justify-content: center;
  //   align-items: center;
  //   padding: 16px 5px !important;
  //   border: 2px solid $grey1 !important;
  //   border-radius: 3px;
  // }

  @media (max-width:960px){
    section{
      grid-template-columns: calc(100% - 70px) 60px;
      // background: red;
    }
  }
  </style>
  