<template>
  <div @click="clickEvent" :class="{ 'item-delete': true }">
    +
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  methods: {
    clickEvent() {
      this.$emit("onClick");
    }
  }
};
</script>

<style scoped lang="scss">
.item-delete {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(45deg);
  color: #000;
  font-size: 60px;
}
</style>
