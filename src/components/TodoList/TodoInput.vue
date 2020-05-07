<template>
  <div id="input-wrap">
    <input v-model="inputItem" placeholder="请输入待办事项" @keyup.enter="addTodoItem" />
    <base-button @onClick="addTodoItem" :buttonText="'ADD'" />
  </div>
</template>

<script>
import { BaseButton /* , BaseInput */ } from "@/components/BaseComponents";

export default {
  name: "",
  components: {
    // BaseInput,
    BaseButton
  },
  props: {},
  data() {
    return {
      inputItem: ""
    };
  },
  computed: {},
  watch: {},
  created() {
    console.log(1);
  },
  methods: {
    addTodoItem() {
      if (this.inputItem === "") {
        alert("请输入内容！");
        return;
      }
      this.$store.commit("addTodoItem", this.inputItem);
    }
  }
};
</script>

<style scoped lang="scss">
#input-wrap {
  width: 80%;
  display: flex;
  justify-content: center;
  input {
    color: rgba(0, 0, 0, 0.65);
    width: 60%;
    height: 40px;
    margin: 0;
    padding: 0;
    display: inline-block;
    padding: 4px 11px;
    position: relative;
    font-size: 14px;
    min-width: 0;
    list-style: none;
    box-sizing: border-box;
    font-variant: tabular-nums;
    font-feature-settings: "tnum";
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all 0.3s;
  }
}
</style>
