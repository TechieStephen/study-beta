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
    <h3 class="my-2">My Wishlist</h3>
    <div class="courses mt-3">
        <NuxtLink to="/browse/computer-architecture-organization_csc215" v-for="course, i in 2" :key="i" class="course">
            <div class="img-wrapper">
                <img src="@/assets/imgs/course.png" alt="">
            </div>
            <div class="p-2">
                <div class="name mt-1">
                    <h4 class="mb-1">Computer Architecture & Organization</h4>
                    <span class="code">CSC 215</span>
                </div>

                <div class="dept flex justify-between align-items-center mt-2">
                    <span>Computer Science</span>
                    <span class="flex justify-start align-items-center">
                        <svg class="mr-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.6602 10.4405L20.6802 14.6205C19.8402 18.2305 18.1802 19.6905 15.0602 19.3905C14.5602 19.3505 14.0202 19.2605 13.4402 19.1205L11.7602 18.7205C7.59018 17.7305 6.30018 15.6705 7.28018 11.4905L8.26018 7.3005C8.46018 6.4505 8.70018 5.7105 9.00018 5.1005C10.1702 2.6805 12.1602 2.0305 15.5002 2.8205L17.1702 3.2105C21.3602 4.1905 22.6402 6.2605 21.6602 10.4405Z" stroke="#54577A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.0603 19.3896C14.4403 19.8096 13.6603 20.1596 12.7103 20.4696L11.1303 20.9896C7.16034 22.2696 5.07034 21.1996 3.78034 17.2296L2.50034 13.2796C1.22034 9.30961 2.28034 7.20961 6.25034 5.92961L7.83034 5.40961C8.24034 5.27961 8.63034 5.16961 9.00034 5.09961C8.70034 5.70961 8.46034 6.44961 8.26034 7.29961L7.28034 11.4896C6.30034 15.6696 7.59034 17.7296 11.7603 18.7196L13.4403 19.1196C14.0203 19.2596 14.5603 19.3496 15.0603 19.3896Z" stroke="#54577A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.6396 8.5293L17.4896 9.7593" stroke="#54577A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.6602 12.4004L14.5602 13.1404" stroke="#54577A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        40 Materials
                    </span>
                </div>
            </div>
        </NuxtLink>
    </div>

    <!-- <Modal v-if="showModel" @click="showModel = false" size="sm" title="Sample Small Modal">
         Welcome
    </Modal> -->
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

@media screen and (max-width:1100px) {
    .courses{
        grid-template-columns: repeat(2, 48%);
    }
}

@media screen and (max-width:700px) {
    .courses{
        grid-template-columns: repeat(1, 100%);
    }
}
</style>
  