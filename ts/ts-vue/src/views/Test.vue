<template>
  <div id="test">{{ name }}</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import HelloWorld from "../components/HelloWorld.vue";

const name = "zhangqi";

@Component({
  components: { HelloWorld }
})
export default class Test extends Vue {
  @Prop(Number)
  private readonly propA!: number | undefined;
  @Prop({ default: "default value" })
  private readonly propB!: string;
  @Prop([String, Boolean])
  private readonly propC!: string | boolean | undefined;

  private message = "hello";

  private get reversedMessage(): string {
    return this.message
      .split("")
      .reverse()
      .join("");
  }

  @Watch("message")
  onMessageChange(val: string): void {
    console.log("message changed");
  }

  public changeMessage(): void {
    this.message = "Good bye";
  }

  public getName(): string {
    let shortName = name;
    return shortName;
  }

  private created(): void {}
  private mounted(): void {}
  private updated(): void {}
  private destroyed(): void {}
}
</script>

<style lang="scss"></style>
