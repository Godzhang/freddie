<!--
 * @Author: 张奇
 * @Date: 2019-10-01 07:52:01
 * @LastEditors: 张奇
 * @LastEditTime: 2019-10-05 22:14:53
 * @Description: file content
 -->
<template>
  <section id="scrolly">
    <figure>
      <p v-if="currStep === 0">
        <img src="../images/page/page-1.png" alt>
      </p>
      <p v-else-if="currStep === 'page-1'">
        <img src="../images/page/page-2.png" alt>
      </p>
      <p v-else-if="currStep === 'page-2'">
        <img src="../images/page/page-3.png" alt>
      </p>
      <p v-else-if="currStep === 'page-3'">
        <img src="../images/page/page-4.png" alt>
      </p>
      <p v-else-if="currStep === 'page-4'">
        <img src="../images/page/page-5.png" alt>
      </p>
    </figure>

    <article>
      <div class="step" data-step="page-1">
        <p>STEP 1</p>
      </div>
      <div class="step" data-step="page-2">
        <p>STEP 2</p>
      </div>
      <div class="step" data-step="page-3">
        <p>STEP 3</p>
      </div>
      <div class="step" data-step="page-4">
        <p>STEP 4</p>
      </div>
    </article>
  </section>
</template>
<script>
import scrollama from "scrollama";

export default {
  data() {
    return {
      scroller: null,
      currStep: 0
    };
  },
  mounted() {
    this.scroller = scrollama();
    this.scroller
      .setup({
        step: "#scrolly article .step",
        offset: 0.5,
        debug: true
      })
      .onStepEnter(this.stepEnterHandler)
      .onStepExit(this.stepExitHandler);
  },
  methods: {
    stepEnterHandler({ element, index, direction }) {
      this.currStep = element.dataset.step;
    },
    stepExitHandler({ element, index, direction }) {
      let currStep = element.dataset.step;
      if (currStep === "page-1" && direction === "up") {
        this.currStep = 0;
      } else {
        this.currStep = currStep;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#scrolly {
  position: relative;
  background-color: #f3f3f3;
}

article {
  position: relative;
  padding: 0;
  max-width: 20rem;
  margin: 0 auto;
}

figure {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  margin: 0;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  background-color: #8a8a8a;
}

figure p {
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 5rem;
  font-weight: 900;
  color: #fff;
}

figure p img {
  width: 100%;
  height: 100%;
}

.step {
  margin: 0 auto 2rem auto;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.1);
  height: 100vh;
}

.step:last-child {
  margin-bottom: 0;
}

.step.is-active p {
  background-color: goldenrod;
  color: #3b3b3b;
}

.step p {
  text-align: center;
  padding: 1rem;
  font-size: 1.5rem;
  background-color: #3b3b3b;
}
</style>
