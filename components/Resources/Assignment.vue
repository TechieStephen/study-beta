<template>
<div class="resource comming flex justify-start align-items-center">
   <h4 class="fw-300 text-center">Assignment<br/>coming soon</h4>
</div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.resource{
        background: $white;
        padding: 10px;
        border-radius: 10px;
        width: 100%;
        margin-bottom: 10px;
        box-shadow: $boxShadow;
        .icon-wrapper{
            width: 60px;
            height: 60px;
            // background: rgba($color: $primaryColor, $alpha: 0.1);
            border-radius: 10px;
            margin-right: 10px;
            overflow: hidden;
            border: 2px solid $grey1;
        }

        .details{
            span{
                font-size: .8em !important;
            }
        }
}

.comming{
    width: 100%;
    height: 100%;
    background: rgba($color: $primaryColor, $alpha: 0.02);
    justify-content: center;
    border-radius: 10px;
    user-select: none;
    min-height: 50vh !important;
}
</style>