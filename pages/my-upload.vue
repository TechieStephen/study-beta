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
<section class="container-sm">
    <div>
        <h3 class="mt-2 mb-4">Earnings</h3>
        <div class="earning">
                <div class="box">
                    <h5>Materials</h5>
                    <div class="earn material">
                        <div class="earn-header">
                            <div></div>
                            <div>Total</div>
                            <div>Pending</div>
                            <div>Paid</div>
                        </div>

                        <div class="earn-data">
                            <div>Downloads</div>
                            <div class="money">20</div>
                            <div class="money">5</div>
                            <div class="money">5</div>

                            <div>Payments</div>
                            <div class="money">$6,000</div>
                            <div class="money">$5,756</div>
                            <div class="money">$5,756</div>
                        </div>

                        <div class="earn-footer">
                            <span>@ N30 per download</span>
                            <svg width="30" height="30" viewBox="0 0 43 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="15.0393" cy="15" rx="14.4632" ry="15" fill="white" fill-opacity="0.77"/>
                                <ellipse cx="28.5374" cy="15" rx="14.4632" ry="15" fill="white" fill-opacity="0.77"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="box">
                    <h5>Past Questions</h5>
                    <div class="earn">
                        <div class="earn-header">
                            <div></div>
                            <div>Total</div>
                            <div>Pending</div>
                            <div>Paid</div>
                        </div>

                        <div class="earn-data">
                            <div>Downloads</div>
                            <div class="money">20</div>
                            <div class="money">5</div>
                            <div class="money">5</div>

                            <div>Payments</div>
                            <div class="money">$6,000</div>
                            <div class="money">$5,756</div>
                            <div class="money">$5,756</div>
                        </div>

                        <div class="earn-footer">
                            <span>@ N30 per download</span>
                            <svg width="30" height="30" viewBox="0 0 41 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="14.1991" cy="15" rx="13.8632" ry="15" fill="#9199AF" fill-opacity="0.5"/>
                                <ellipse cx="27.1385" cy="15" rx="13.8632" ry="15" fill="#9199AF" fill-opacity="0.5"/>
                            </svg>

                        </div>
                    </div>
                </div>
        </div>
    </div>

    <div class="resources">
        <h4 class="my-2">Uploads</h4>
        <MyMaterial/>
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
        font-size: 1.3em;
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
    margin: 50px auto;
}
@media (max-width:900px){
    .earning{
        grid-template-columns: repeat(1, 100%);
        row-gap: 40px;
    }
    .earn{
        .money{
            font-size: 1.1em;
        }
}
}

</style>
  