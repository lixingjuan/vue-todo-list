<template>
  <div id="page-container">
    <div id="page-container-button-group">
      <base-button @onClick="deleteAll" buttonText="删除全部" />
    </div>

    <todo-input></todo-input>
    <todo-list></todo-list>
  </div>
</template>

<script>
import { BaseButton } from "@/components/BaseComponents";
import { TodoList, TodoInput } from "@/components/TodoList";

export default {
  components: {
    TodoList,
    TodoInput,
    BaseButton
  },
  data() {
    return {
      currentTheme: ""
    };
  },
  methods: {
    switchTheme() {
      const themeArr = ["red", "pink"];
      const themeIndex = Math.round(Math.random(0, themeArr.length));
      this.currentTheme = themeArr[themeIndex];
    },
    deleteAll() {
      this.$store.commit("deleteAllTodoItems");
    }
  }
};
</script>

<style scoped lang="scss">
$prefix: page-container;

##{$prefix} {
  width: 90%;
  height: 90%;
  border: 5px solid #4c8f38;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  border-radius: 30px;
  ##{$prefix}-button-group {
    width: 100%;
    margin-top: 30px;
    & > button {
      margin-left: 30px;
    }
  }
  .red {
    color: red;
  }
  .pink {
    color: pink;
  }
}
</style>
