<script setup>
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
<section class="container-md">
    <h4 class="my-2">Start Quiz</h4>
</section>
</template>

  
<style lang="scss" scoped>
.courses{
    display: grid;
    grid-template-columns: repeat(3, 32%);
    justify-content: space-between;
    gap: 30px 0px;
}

.course{
    background-color: white;
    border-radius: 10px;
    box-shadow: $boxShadow;

    .name{
        .code{
            font-weight: 600;
            color: $grey6;
        }
    }

    .dept{
    }
}
</style>
  