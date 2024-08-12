<template>
<section>
        <div class="menus">
            <ul>
                <li>
                    <button type="button" class="btn btn-text" @click="selectedMaterial = 'materialS'">Materials</button>
                    <span v-if="selectedMaterial == 'materialS'" class="border"></span>
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
                <ResourcesMaterial  v-for="material, i in 4" :key="i"/>
            </template>

            <template v-if="selectedMaterial == 'past-questions'">
                <ResourcesPastQuestion  v-for="material, i in 3" :key="i"/>
            </template>
        </div>
    </section>
</template>

<script setup>
const selectedMaterial = ref("materialS")

</script>

<style lang="scss" scoped>

section{
    height: 100%;

    .menus{
        position: relative;
        width: 100%;
        ul{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 0px 50px;
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
</style>