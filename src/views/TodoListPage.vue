<template>
  <div id="pageContainer">
    <!-- 输入框 -->
    <todo-input></todo-input>
    <!-- 列表 -->
    <todo-list></todo-list>
  </div>
</template>

<script>
import { TodoList, TodoInput } from "../components/TodoList";

export default {
  name: "",
  components: {
    TodoList,
    TodoInput
  },
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

<style scoped>
#pageContainer {
  width: 90%;
  height: 90%;
  border: 5px solid #4c8f38;
  margin: 0 auto;
  margin-top: 20px;
  /* position: relative;
  left: 10%;
  top: 50%; */
}
</style>
