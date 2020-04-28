<template>
  <div class="rainbow-container"></div>
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
  methods: {}
};
</script>

<style scoped lang="scss">
.rainbow-container {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 0 0 0 5px inset red, 0 0 0 10px inset orange, 0 0 0 15px inset yellow,
    0 0 0 20px inset lime, 0 0 0 25px inset aqua, 0 0 0 30px inset blue, 0 0 0 35px inset blue;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
}
</style>
