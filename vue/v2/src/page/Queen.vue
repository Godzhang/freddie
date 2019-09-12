<template>
  <div class="queen">
    <QueenChild @handle="handleCustClick"></QueenChild>
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

const extend = {
  data() {
    return { name: "extend name" };
  },
  created() {
    console.log("extend created");
  }
};

const mixin1 = {
  data() {
    return { name: "mixin1 name" };
  },
  created() {
    console.log("mixin1 created");
  }
};

const mixin2 = {
  data() {
    return { name: "mixin2 name" };
  },
  created() {
    console.log("mixin2 created");
  }
};

export default {
  extends: extend,
  mixins: [mixin1, mixin2],
  name: "",
  provide() {
    return {
      foo: "bar"
    };
  },
  data() {
    return {
      name: "component name",
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
  created() {
    // console.log("parent created");
    console.log("component created");
    console.log(this.name);
    console.log(this.$root);
  },
  mounted() {
    // console.log("parent mounted");
    // console.log(QueenChild);
    // console.log(this);
    // console.log(BaseComponent);
    // console.log(EnhancedCom);
  },
  methods: {
    onClick() {},
    log() {
      console.log("log");
    },
    handleCustClick() {
      console.log(this);
    }
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
