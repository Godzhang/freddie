<template>
  <div class="employee-query"></div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class EmployeeQuery extends Vue {
  @Prop({ type: String, default: "" })
  name!: string;

  @Prop({ type: Number, default: 0 })
  selected!: number;

  @Prop({ type: Array, default: () => [] })
  department!: { department: string; departmentId: number }[];

  tempName: string = this.name;
  tempSelected: number = this.selected;

  query() {
    this.$emit("query", {
      name: this.tempName,
      departmentId: this.tempSelected
    });
  }
}
</script>
