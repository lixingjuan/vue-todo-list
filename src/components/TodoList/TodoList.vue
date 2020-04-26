<template>
  <ul id="todoList">
    <todo-item v-for="item in todolistArr" :key="item.uuid" :todoItemProps="item" />
  </ul>
</template>

<script>
import { mapState } from "vuex";

import TodoItem from "./TodoItem";

export default {
  name: "",
  components: {
    TodoItem
  },
  props: {},
  data() {
    return {};
  },
  computed: mapState({
    todolistArr: state => state.ModuleTodoList.todolistArr
  }),
  watch: {},
  created() {
    console.log(this.todolistArr);
  },
  methods: {}
};
</script>

<style scoped>
#todoList {
  width: 80%;
  margin: 0 auto;
  /* display: flex; */
  /*TODO: 子元素并未设置margin的时候，该属性也失效了 justify-content: center; */
  /* flex-direction: column; */
}
</style>
