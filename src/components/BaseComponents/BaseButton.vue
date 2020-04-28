<!--
- 点击按钮时的回调 onClick
-->
<template>
  <button id="button" @click="buttonClickEvent">
    <span>{{ buttonText || "按钮" }}</span>
  </button>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    buttonText: {
      type: String,
      required: false
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  methods: {
    buttonClickEvent() {
      this.$emit("onClick");
    }
  }
};
</script>

<style scoped lang="scss">
#button {
  height: 40px;
  color: #fff;
  padding: 4px 15px;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  font-weight: 400;
  white-space: nowrap;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  background-color: #f3d52c;
  border: {
    border: 2px solid transparent;
    radius: 3px;
    color: #ec8d11;
  }
  span {
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  }
}
</style>
