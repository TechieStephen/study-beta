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

const selectedMaterial = ref("materialS")

const showQuiz = ref(false)
const showAddResource = ref(false)

const wish = ()=>{
    $toast.success('Added to wish');
}
</script>

<template>
<section class="container-md top">
    <div class="left">
        <h1>Computer Architecture & Organization</h1>
        
        <div class="meta flex justify-between align-center">
            <div>
                <div class="my-2">
                    <span>Science  Computer  Science</span>
                    <span class="seperator mx-1">|</span>
                    <span class="color-link">+ Get Mentors</span>
                </div>
                <p class="flex justify-start align-items-center count">
                    <svg class="mr-1" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.10671 7.74732C6.04004 7.74065 5.96004 7.74065 5.88671 7.74732C4.30004 7.69398 3.04004 6.39398 3.04004 4.79398C3.04004 3.16065 4.36004 1.83398 6.00004 1.83398C7.63337 1.83398 8.96004 3.16065 8.96004 4.79398C8.95337 6.39398 7.69337 7.69398 6.10671 7.74732Z" stroke="#54577A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.9402 3.16602C12.2335 3.16602 13.2735 4.21268 13.2735 5.49935C13.2735 6.75935 12.2735 7.78602 11.0268 7.83268C10.9735 7.82602 10.9135 7.82602 10.8535 7.83268" stroke="#54577A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.77348 10.206C1.16014 11.286 1.16014 13.046 2.77348 14.1193C4.60681 15.346 7.61348 15.346 9.44681 14.1193C11.0601 13.0393 11.0601 11.2793 9.44681 10.206C7.62014 8.98602 4.61348 8.98602 2.77348 10.206Z" stroke="#54577A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.2266 13.834C12.7066 13.734 13.1599 13.5407 13.5332 13.254C14.5732 12.474 14.5732 11.1873 13.5332 10.4073C13.1666 10.1273 12.7199 9.94065 12.2466 9.83398" stroke="#54577A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    200 Students Involved
                </p>
            </div>

            <button type="button" class="btn btn-outline round" @click="wish">
                <svg width="25" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.8401 2.60987C20.3294 2.09888 19.7229 1.69352 19.0555 1.41696C18.388 1.14039 17.6726 0.998047 16.9501 0.998047C16.2276 0.998047 15.5122 1.14039 14.8448 1.41696C14.1773 1.69352 13.5709 2.09888 13.0601 2.60987L12.0001 3.66987L10.9401 2.60987C9.90843 1.57818 8.50915 0.998582 7.05012 0.998582C5.59109 0.998582 4.19181 1.57818 3.16012 2.60987C2.12843 3.64156 1.54883 5.04084 1.54883 6.49987C1.54883 7.95891 2.12843 9.35818 3.16012 10.3899L12.0001 19.2299L20.8401 10.3899C21.3511 9.87912 21.7565 9.27269 22.033 8.60523C22.3096 7.93777 22.4519 7.22236 22.4519 6.49987C22.4519 5.77738 22.3096 5.06198 22.033 4.39452C21.7565 3.72706 21.3511 3.12063 20.8401 2.60987Z" stroke="#8E92BC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>

        <div class="intro mt-3">
            <h4 class="mb-1">Introduction</h4>
            <p class="note">
                Follow the video tutorial above. Understand how to use each tool in the Figma application. Also learn how to make a good and correct design. Starting from spacing, typography, content, and many other design hierarchies. Then try to make it yourself with your imagination and inspiration.
            </p>
        </div>

        <div class="intro mt-3">
            <h4 class="mb-2">Course Outline</h4>
            <ul class="outlines">
                <li>
                    
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#546FFF"/>
                        <path d="M8.5804 13.5796C8.3804 13.5796 8.1904 13.4996 8.0504 13.3596L5.22043 10.5296C4.93043 10.2396 4.93043 9.7596 5.22043 9.4696C5.51043 9.1796 5.99043 9.1796 6.28043 9.4696L8.5804 11.7696L13.7204 6.62961C14.0104 6.33961 14.4904 6.33961 14.7804 6.62961C15.0704 6.91961 15.0704 7.39961 14.7804 7.68961L9.1104 13.3596C8.9704 13.4996 8.7804 13.5796 8.5804 13.5796Z" fill="white"/>
                    </svg>

                    Understanding the tools in Figma
                </li>
                <li>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#546FFF"/>
                        <path d="M8.5804 13.5796C8.3804 13.5796 8.1904 13.4996 8.0504 13.3596L5.22043 10.5296C4.93043 10.2396 4.93043 9.7596 5.22043 9.4696C5.51043 9.1796 5.99043 9.1796 6.28043 9.4696L8.5804 11.7696L13.7204 6.62961C14.0104 6.33961 14.4904 6.33961 14.7804 6.62961C15.0704 6.91961 15.0704 7.39961 14.7804 7.68961L9.1104 13.3596C8.9704 13.4996 8.7804 13.5796 8.5804 13.5796Z" fill="white"/>
                    </svg>
                    Understand the basics of making designs
                </li>
                <li>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#546FFF"/>
                        <path d="M8.5804 13.5796C8.3804 13.5796 8.1904 13.4996 8.0504 13.3596L5.22043 10.5296C4.93043 10.2396 4.93043 9.7596 5.22043 9.4696C5.51043 9.1796 5.99043 9.1796 6.28043 9.4696L8.5804 11.7696L13.7204 6.62961C14.0104 6.33961 14.4904 6.33961 14.7804 6.62961C15.0704 6.91961 15.0704 7.39961 14.7804 7.68961L9.1104 13.3596C8.9704 13.4996 8.7804 13.5796 8.5804 13.5796Z" fill="white"/>
                    </svg>
                    Designing a mobile application using figma
                </li>
                <li>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#546FFF"/>
                        <path d="M8.5804 13.5796C8.3804 13.5796 8.1904 13.4996 8.0504 13.3596L5.22043 10.5296C4.93043 10.2396 4.93043 9.7596 5.22043 9.4696C5.51043 9.1796 5.99043 9.1796 6.28043 9.4696L8.5804 11.7696L13.7204 6.62961C14.0104 6.33961 14.4904 6.33961 14.7804 6.62961C15.0704 6.91961 15.0704 7.39961 14.7804 7.68961L9.1104 13.3596C8.9704 13.4996 8.7804 13.5796 8.5804 13.5796Z" fill="white"/>
                    </svg>
                    Presenting the design flow
                </li>
            </ul>
        </div>

        <div class="actions flex justify-between align-items-center mt-4">
            <button type="button" class="btn btn-primary" @click="showQuiz = true">Quiz</button>
            <button type="button" class="btn btn-primary" @click="showAddResource = true">Add material</button>
        </div>
    </div>

    <div class="right">
        <div class="menus">
            <ul>
                <li>
                    <button type="button" class="btn btn-text" @click="selectedMaterial = 'materialS'">Materials</button>
                    <span v-if="selectedMaterial == 'materialS'" class="border"></span>
                </li>
                <li>
                    <button type="button" class="btn btn-text" @click="selectedMaterial = 'assignments'">Assignments</button>
                    <span v-if="selectedMaterial == 'assignments'" class="border"></span>
                </li>
                
                <li>
                    <button type="button" class="btn btn-text" @click="selectedMaterial = 'past-questions'">Past Questions</button>
                    <span v-if="selectedMaterial == 'past-questions'" class="border"></span>
                </li>
            </ul>
            <span class="main-border"></span>
        </div>

        <div class="resources mt-3">
            <template v-if="selectedMaterial == 'materialS'">
                <ResourcesMaterial v-for="material, i in 4" :key="i"/>
            </template>

            <template v-if="selectedMaterial == 'assignments'">
                <ResourcesAssignment/>
            </template>

            <template v-if="selectedMaterial == 'past-questions'">
                <ResourcesPastQuestion  v-for="material, i in 3" :key="i"/>
            </template>
        </div>
    </div>

    <StartQuiz v-if="showQuiz" @close="showQuiz = false" />
    <ResourcesAdd v-if="showAddResource" @close="showAddResource = false" />
</section>
</template>

  
<style lang="scss" scoped>
section{
    display: grid;
    grid-template-columns: 50% 38%;
    align-items: flex-start;
    justify-content: space-between;
    min-height: 90vh;
}

.count{
    font-size: .9em;
}

.outlines{
    li{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 20px;
        // background: red;
        svg{
            margin-right: 10px;
            // background: $primaryColor;
        }
    }
}

.actions{
    display: grid;
    grid-template-columns: 49.2% 49.2%;

    button{
    }
}

.right{
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // flex-direction: column;
    height: 100%;

    .menus{
        position: relative;
        width: 100%;
        ul{
            display: flex;
            justify-content: space-between;
            align-items: center;
            li{
                font-weight: 600;
                font-size: .9em;
                position: relative;
                button{
                    padding: 0px !important;
                    font-weight: 600 !important;
                    // border-bottom: 10px solid grey !important;
                }
                .border{
                    position: absolute;
                    top: 25px;
                    display: block;
                    height: 10px;
                    width: 100%;
                    border-radius: 20px; 
                    background: rgba($color: $primaryColor, $alpha: 0.4);
                    // margin-top: 5px;       
                }
            }
        }
        
        .main-border{
            position: absolute;
            top: 20px;
            display: block;
            height: 10px;
            width: 100%;
            border-radius: 20px; 
            background: rgba($color: $primaryColor, $alpha: .2);
            margin-top: 5px;       
        }
    }
}

.resources{
    width: 100%; 
    height: 100%;  
}

@media (max-width:960px){
    section{
        display: grid;
        grid-template-columns: 100%;
        align-items: flex-start;
        justify-content: space-between;
        min-height: 90vh;
    }

    .right{
        margin-top: 50px;
    }
}
</style>
  