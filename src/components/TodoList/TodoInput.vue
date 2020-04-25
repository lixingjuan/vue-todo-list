<template>
  <div id="inputWrap">
    <input v-model="inputItem" />
    <button @click="addTodoItem">Add</button>
  </div>
</template>

<script>
// import BaseInput from "@/components/BaseComponents/BaseInput";

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
  methods: {
    addTodoItem() {
      this.$store.commit("addTodoItem", this.inputItem);
    }
  }
};
</script>

<style scoped></style>
