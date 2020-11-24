<template>
  <div class="animate">
    <!-- <Transition
      name="bounce"
      enter-active-class="animate__animated animate__tada"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <div v-show="show" class="box"></div>
    </Transition> -->
    <!-- <div class="box animate__animated animate__fadeIn"></div> -->
    <!-- <Transition
      name="bounce"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div v-show="show" class="box"></div>
    </Transition> -->
    <Transition
      appear
      appear-class="appear-class"
      appear-active-class="appear-active-class"
    >
      <div v-if="show" class="box"></div>
    </Transition>
    <button @click="show = !show">
      Toggle
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transformOrigin = "left";
    },
    enter(el, done) {
      Velocity(el, { opacity: 1, fontSize: "1.4em" }, { duration: 300 });
      Velocity(el, { fontSize: "1em" }, { complete: true });
    },
    leave(el, done) {
      Velocity(el, { translateX: "15px", rotateZ: "50deg" }, { duration: 600 });
      Velocity(el, { rotateZ: "100deg" }, { loop: 2 });
      Velocity(
        el,
        {
          rotateZ: "45deg",
          translateY: "30px",
          translateX: "30px",
          opacity: 0
        },
        { complete: done }
      );
    }
  },
  components: {}
};
</script>
<style lang="scss">
.box {
  position: absolute;
  top: 300px;
  left: 300px;
  width: 100px;
  height: 100px;
  background-color: #08c;
}

.appear-class {
  opacity: 0;
}
.appear-to-class {
  opacity: 1;
}
.appear-active-class {
  opacity: 1;
  // transition: all 2s;
}
// .fade-enter-active {
//   transition: all 1s;
// }
// .fade-leave-active {
//   transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
// }
// .fade-enter,
// .fade-leave-to {
//   transform: translateY(100px);
//   opacity: 0;
// }

// @keyframes bounce-in {
//   0% {
//     transform: scale(0);
//   }
//   50% {
//     transform: scale(1.5);
//   }
//   100% {
//     transform: scale(1);
//   }
// }
// .bounce-enter-active {
//   animation: bounce-in 0.5s;
// }
// .bounce-leave-active {
//   animation: bounce-in 0.5s reverse;
// }
</style>
