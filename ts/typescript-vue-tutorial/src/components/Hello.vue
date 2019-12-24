<template>
  <div>
    <div class="greeting">Hello {{ name }}{{ exclamationMarks }}</div>
    <button ref="sub" @click="decrement">-</button>
    <button ref="add" @click="increment">+</button>
    <button @click="goTo(2)">goTo</button>
  </div>
</template>

<script lang="ts">
// 使用 vue-property-decorator
import {
  Vue,
  Component,
  Prop,
  Mixins,
  Ref,
  Emit,
  Model,
  Watch
} from "vue-property-decorator";

@Component
export default class HelloDecorator extends Vue {
  @Prop() name!: string;
  @Prop() initialEnthusiasm!: number;
  @Ref() readonly sub!: HTMLButtonElement;
  @Ref() readonly add!: HTMLButtonElement;
  @Model("input", { type: String, default: "" }) public value!: string;

  enthusiasm = this.initialEnthusiasm;

  get exclamationMarks(): string {
    return Array(this.enthusiasm + 1).join("!");
  }

  @Watch("value")
  public onModelChange(m: string) {
    console.log(m);
  }

  @Emit("increment")
  increment() {
    this.enthusiasm++;
    return this.enthusiasm;
  }
  decrement() {
    if (this.enthusiasm > 1) {
      this.enthusiasm--;
    }
  }
  @Emit("goto")
  goTo(n: number) {
    this.enthusiasm += n;
    return this.enthusiasm;
  }

  private mounted() {
    console.log("mounted");
  }
}
//-----------------------------------------------------------/
// Vue.extend 模式
// import Vue from "vue";

// export default Vue.extend({
//   props: ["name", "initialEnthusiasm"],
//   data() {
//     return {
//       enthusiasm: this.initialEnthusiasm
//     };
//   },
//   methods: {
//     increment() {
//       this.enthusiasm++;
//     },
//     decrement() {
//       if (this.enthusiasm > 1) {
//         this.enthusiasm--;
//       }
//     }
//   },
//   computed: {
//     exclamationMarks(): string {
//       return Array(this.enthusiasm + 1).join("!");
//     }
//   }
// });
</script>

<style>
.greeting {
  font-size: 20px;
}
</style>
