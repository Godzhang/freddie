<template>
  <div class="queen">
    <div>{{$store.state.count}}</div>
    <div>{{$store.getters.doubleCount}}</div>
    <button @click="$store.commit('increment')">click</button>
    <!-- <input type="text" v-model="message" />
    <div>{{$store.state.msg}}</div>-->
    <!-- <QueenChild @handle="onClick()"></QueenChild>
    <button @click="onClick()">click</button>-->
    <!-- <button @click="onClick()">click</button> -->
    <!-- <TempVar var1="var1" var2="var2">
      <template v-slot="props">
        <div>{{props.var1}}</div>
        <div>{{props.var2}}</div>
      </template>
    </TempVar>-->
    <!-- <FunctionButton game="knight" @click="log">fuck you</FunctionButton>
    <List :links="links">
      <template
        slot="link"
        slot-scope="{ link, bookmark, bookmarkButtonAttrs, bookmarkButtonEvents }"
      >
        <span v-if="link.bookmarked">已选中</span>
        <span>{{link.value}}</span>
        <button v-bind="bookmarkButtonAttrs" v-on="bookmarkButtonEvents">binding</button>
      </template>
    </List>-->
    <!-- <div>{{ $store.state.count }}</div>
    <div>{{ $store.getters.doubleCount }}</div>
    <button @click="onClick()">click</button>-->
  </div>
</template>
<script>
import QueenChild from "./QueenChild";
import TempVar from "./TempVar";
import FunctionButton from "./FunctionButton";
import List from "./List";
import BaseComponent from "./BaseComponent";
import withconsole from "../utils/withconsole";
import Vue from "vue";
import { mapGetters, createNamespacedHelpers } from "vuex";

const { mapActions } = createNamespacedHelpers("cart");

const EnhancedCom = withconsole(BaseComponent);

export default {
  name: "",
  data() {
    return {
      color: "#f00",
      links: [
        { value: "1", bookmarked: false },
        { value: "2", bookmarked: false },
        { value: "3", bookmarked: false },
        { value: "4", bookmarked: false },
        { value: "5", bookmarked: false }
      ]
    };
  },
  created() {},
  mounted() {
    // console.log(this.getTodoById(2));
    // // console.log(this.someGetter);
    // this.someActions();
    // this.$store.dispatch("someActions");
  },
  methods: {
    // onClick() {
    //   this.someActions();
    // },
    updateMessage(e) {
      this.$store.commit("updateMessage", e.target.value);
    },
    ...mapActions(["someActions"])
    // ...mapActions(["someActions"])
  },
  computed: {
    message: {
      get() {
        return this.$store.state.msg;
      },
      set(value) {
        this.$store.commit("updateMessage", value);
      }
    },
    ...mapGetters(["getTodoById"]),
    ...mapGetters({
      someGetter: "cart/someGetter"
    })
  },
  components: {
    QueenChild,
    TempVar,
    FunctionButton,
    List,
    BaseComponent,
    EnhancedCom
  }
};
</script>
<style lang="scss" scoped>
</style>
