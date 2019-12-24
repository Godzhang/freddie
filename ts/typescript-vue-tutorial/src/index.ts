import Vue from "vue";
import Hello from "./components/Hello.vue";

let vm = new Vue({
  el: "#app",
  template: `
    <div>
      Name: <input v-model="name" type="text">
      <Hello v-model="model" :name="name" :initialEnthusiasm="5" @increment="onIncrement" @goto="onGoTo" />
      <button @click="changeModel()">change model</button>
    </div>
  `,
  data: {
    name: "world",
    model: "parentModel"
  },
  methods: {
    onIncrement(n: number) {
      console.log("@Emit " + n);
    },
    onGoTo(...args: any[]) {
      console.log(args);
    },
    changeModel() {
      this.model = this.model === "parentModel" ? "model" : "parentModel";
    }
  },
  components: {
    Hello
  }
});
