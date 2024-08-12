<script setup>

const {$toast} = useNuxtApp();

const get = ()=>{
    $toast.success("Downloading...");
}
</script>

<template>
<div class="resource" @click="get">
   <div class="icon-wrapper">
      <img src="@/assets/imgs/material-preview.png" alt="">
   </div>

   <div class="details">
        <h5 class="fw-400 mb-1">2021 / 2022</h5>
        <span>25 pages</span>
        <div class="flex justify-end">
            <button type="button" class="btn btn-small btn-outline">
                Download
            </button>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/resource.scss";
</style>