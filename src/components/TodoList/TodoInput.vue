<template>
  <div id="inputWrap">
    <!-- <base-input :inputValue="inputItem"></base-input> -->
    <input v-model="inputItem" />
    <base-button @onClick="addTodoItem"></base-button>
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
#inputWrap {
  width: 80%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  input {
    width: 60%;
    height: 40px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: inline-block;
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all 0.3s;
  }
}
</style>
