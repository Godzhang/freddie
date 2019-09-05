<template>
  <div class="queen">
    <!-- <QueenChild></QueenChild>
    <button @click="onClick()">click</button>-->
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
    <base-component>
      <h2 slot="slot1">BaseComponent slot</h2>
      <p>default slot</p>
    </base-component>
    <enhanced-com>
      <h2 slot="slot1">EnhancedComponent slot</h2>
      <p>default slot</p>
    </enhanced-com>
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

const EnhancedCom = withconsole(BaseComponent);

export default {
  name: "",
  provide() {
    return {
      foo: "bar"
    };
  },
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
  mounted() {
    // console.log(BaseComponent);
    // console.log(EnhancedCom);
  },
  methods: {
    onClick() {},
    log() {
      console.log("log");
    },
    handleCustClick() {}
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
