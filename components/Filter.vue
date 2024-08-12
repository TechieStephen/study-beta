<script setup>  
// Define a title for the header
const showFilter = ref(false)

const level = ref ('')
const department = ref ('')

const applyFilter =()=>{
  showFilter.value = !showFilter.value
}
</script>

<template>
    <div class="container">
      <div class="filters show-desktop">
        <div class="form-group input-icon" @click="showFilter = true">
          <span class="icon">
            <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 7H21" stroke="#8E92BC" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M6 12H18" stroke="#8E92BC" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M10 17H14" stroke="#8E92BC" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </span>
          <div class="input fw-600">Department</div>
        </div>

        <div class="form-group input-icon" @click="showFilter = true">
          <span class="icon">
            <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z" stroke="#8E92BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 10.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V10.9C13.5 12.4 14.14 13 15.73 13H19.77C21.36 13 22 12.4 22 10.9Z" stroke="#8E92BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 19.9V18.1C22 16.6 21.36 16 19.77 16H15.73C14.14 16 13.5 16.6 13.5 18.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z" stroke="#8E92BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <div class="input fw-600">Level</div>
        </div>
      </div>

      <button type="button" class="btn btn-outline btn-filter" @click="showFilter = true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 6.5H16" stroke="#8E92BC" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 6.5H2" stroke="#8E92BC" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z" stroke="#8E92BC" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22 17.5H18" stroke="#8E92BC" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 17.5H2" stroke="#8E92BC" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z" stroke="#8E92BC" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

      </button>

      <Modal v-if="showFilter" size="md" title="Filter" @close="showFilter = false">
        <template v-slot:body>
            <div class="mb-3">
              <div class="mb-4">
                <h4 class="fw-600 mb-2">Select Department</h4>
                <div class="input-icon">
                  <input class="input" type="text" placeholder="Search Department">
                  <span class="icon">
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.58366 17.4993C13.9559 17.4993 17.5003 13.9549 17.5003 9.58268C17.5003 5.21043 13.9559 1.66602 9.58366 1.66602C5.2114 1.66602 1.66699 5.21043 1.66699 9.58268C1.66699 13.9549 5.2114 17.4993 9.58366 17.4993Z" stroke="#8E92BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M18.3337 18.3327L16.667 16.666" stroke="#8E92BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                </div>


                <div class="departments mt-2">
                  <FormSelectButtons v-model:dataValue="department" :value="department" :items="['All','Computer Science', 'SLT', 'Mass Comm', 'Staistics', 'Information Tech','Computer Science', 'SLT', 'Mass Comm', 'Computer Science', 'SLT', 'Mass Comm', 'Computer Science', 'SLT', 'Mass Comm' ]"/>
                </div>
              </div>
              
              <div>
                <h4 class="fw-600">Select Level</h4>
                <div class="levels mt-2">
                  <FormSelectButtons v-model:dataValue="level" :value="level"  :items="['All','100','200', '300', '400', '500']"/>
                </div>
              </div>
            </div>
        </template>

        <template v-slot:footer>
            <div class="flex justify-end align-items-center" @click="applyFilter">
              <button type="button" class="btn btn-primary" @click="start">Apply Filter</button>
            </div>
        </template>
      </Modal>
    </div>
  </template>
  
<style lang="scss" scoped>
.container{
  display: flex;
  justify-content: flex-end;
}

.filters{
  width: 100% !important;
  display: grid;
  grid-template-columns: 55% 40%;

  justify-content: flex-end;
  align-items: center;
  column-gap: 10px;

  .input{
    font-size: .85em !important;
    // background: red;
  }
}
  
.btn-filter{
  display: none;
  width: 100%;
  padding: 0px;
}

@media (max-width:960px){
  .filters{
    background: grey;
  }

  .btn-filter{
    display: flex !important;
}
}
</style>
