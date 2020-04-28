<template>
  <div id="app-header">
    <div id="button-group">
      <base-button @onClick="switchPage('TodoListPage')" :buttonText="'todolist-full-version'" />
      <base-button @onClick="switchPage('TodoListPropsPage')" :buttonText="'todolist-normal'" />
      <base-button @onClick="switchPage('TodoListVuexPage')" :buttonText="'todolist-vuex'" />
    </div>
    <base-rainbow></base-rainbow>
  </div>
</template>

<script>
import { BaseButton, BaseRainbow } from "@/components/BaseComponents";
export default {
  name: "",
  components: {
    BaseButton,
    BaseRainbow
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  methods: {
    switchPage(targetPageName) {
      console.log(this.$router.params);
      this.$router.push({ name: targetPageName });
    }
  }
};
</script>

<style scoped lang="scss">
#app-header {
  display: flex;
  justify-content: space-between;
  height: 100px;
  #button-group {
    margin-top: 30px;
    width: 60%;
    button {
      margin-left: 30px;
    }
  }
}
</style>
