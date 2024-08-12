<template>
  <div class="loader" :class="{'margin':margin}">
        <div id="circle3"></div>
    </div>
</template>

<script setup>
const props = defineProps({
    margin: {
      type: Boolean,
      default: false
    },
    color:{
      type:String,
      default: "3px rgb(255, 255, 255) solid"
    }
})

const {margin} = toRefs(props)

</script>

<style lang="scss" scoped>
.margin{
    margin-right: 10px;
}
#circle3 {
//   display: block;
//   position: absolute;
//   top: 50%;
//   left: 50%;
  height: 20px;
  width: 20px;
//   margin: -25px 0 0 -25px;
  border: 2px $grey1 solid;
  border-top: v-bind(color);
  border-right: v-bind(color);
  border-bottom: v-bind(color);
  border-radius: 50%;
  -webkit-animation: spin3 1s infinite linear;
          animation: spin3 1s infinite linear;
}

@-webkit-keyframes spin3 {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}

@keyframes spin3 {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}
</style>