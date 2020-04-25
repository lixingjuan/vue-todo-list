<template>
  <div id="baseInput">
    <input v-model="inputItem" />
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      inputItem: ""
    };
  },
  computed: {},
  watch: {},
  created() {},
  methods: {}
};
</script>

<style scoped>
#button {
  width: 100px;
  height: 50px;
  border: 1px solid #ccc;
}
</style>
