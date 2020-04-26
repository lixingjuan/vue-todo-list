<template>
  <ul id="todoList">
    <transition-group name="list" tag="p">
      <todo-item v-for="item in todolistArr" :key="item.uuid" :todoItemProps="item" />
    </transition-group>
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
    this.$store.commit("initTodoItems");
  },
  methods: {}
};
</script>

<style scoped lang="scss">
#todoList {
  width: 80%;
  margin: 0 auto;
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s;
  }
  .list-enter {
    opacity: 0;
    transform: translateX(-100px);
  }
  .list-leave-to {
    opacity: 0;
    transform: translateX(100px);
  }
  .list-move {
    transition: transform 1s;
  }
  /* display: flex; */
  /*TODO: 子元素并未设置margin的时候，该属性也失效了 justify-content: center; */
  /* flex-direction: column; */
}
</style>
