<template>
<div class="resource">
   <div class="icon-wrapper">
      <img src="@/assets/imgs/material-preview.png" alt="">
   </div>

   <div class="details">
      <h5 class="fw-400 mb-1">2021 / 2022</h5>
      <span>25 pages</span>
   </div>
   <button type="button" class="btn btn-outline">
        preview
    </button>
</div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.resource{
        background: $white;
        padding: 10px 20px;
        border-radius: 10px;
        width: 100%;
        margin-bottom: 10px;
        box-shadow: $boxShadow;
        display: grid;
        grid-template-columns: 60px 60% 20%;
        justify-content: space-between;
        align-items: center;
        
        .icon-wrapper{
            width: 60px;
            height: 60px;
            border-radius: 10px;
            overflow: hidden;
            border: 2px solid $grey1;
        }

        .details{
            span{
                font-size: .8em !important;
            }
        }

        svg{
            stroke: $grey6;
            width: 20px !important;
        }

        button{
            padding: 5px 10px !important;
            font-weight: 400 !important;
            font-size: .8em !important;
            // border-color: $primaryColor !important;
        }
    }
</style>