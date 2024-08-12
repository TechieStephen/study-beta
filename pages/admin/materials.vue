pages/my-upload.vue<script setup>
const {$toast} = useNuxtApp();

useHead({
    title: `Welcome`,
    ogTitle: `Welcome`,
    description: `Nuxt 3 Template`,
    ogDescription: `Nuxt 3 Template`,
})

onMounted(() => {
});

const showModel = ref(false)

const say = ()=>{
    $toast.success('toastify success');
}
</script>

<template>
<section class="container-sm">
    <div>
        <h4 class="my-1">Materials</h4>
    </div>

    <div class="mb-2 resources">
        <ResourcesMaterial/>
    </div>
</section>
</template>

  
<style lang="scss" scoped>
.earning{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 48.5%);
    justify-content: space-between;
    // background: $grey1;
}
.box{
    h5{
        margin-bottom: 15px;
    }
}
.earn{
    background: $white;
    border-radius: 10px;
    box-shadow: $boxShadow;
    border-radius: 20px;
    border: 1.5px solid $grey2;

    &.material{
        background: #2E2BF0;
        color: $white;
        border: 1.5px solid transparent;

    }

    .money{
        font-size: 1.2em;
        font-weight: 600;
    }

    .earn-header{
        display: grid;
        grid-template-columns: repeat(4, 19%);
        justify-content: space-between;
        // gap: 0px 0px;
        // margin-top: 10px;
        border-radius: 10px;
        font-size: .8em !important;
        padding: 20px 20px;

        div{
            min-height: 10px;
        }
    }
    .earn-data{
        display: grid;
        grid-template-columns: repeat(4, 19%);
        justify-content: space-between;
        gap: 30px 0px;
        // margin-top: 10px;
        border-radius: 10px;
        font-size: .8em !important;
        padding: 15px 20px;
        // background: grey;

        div{
            min-height: 10px;
            // text-align: center;
            // background: $grey5;
        }
    }

    .earn-footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        border-top: 1.5px solid $grey3;
        span{
            font-weight: 400;
        }
    }

    

    &.material{
        background: #2E2BF0;
        color: $white;
        border: 1.5px solid transparent;

        .earn-footer{
            border-top: 1.5px solid $white;
            span{
                color: $white !important;
            }
        }

    }

}

.resources{
    // width: 80%;
    // margin: 50px auto;
}

</style>
  