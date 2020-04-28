<template>
  <div id="pageContainer">
    <div id="button-group">
      <base-button @onClick="switchTheme" :buttonText="'更换主题'" />
    </div>
    <div :class="currentTheme">
      测试文本
    </div>
    <!-- 输入框 -->
    <todo-input></todo-input>
    <!-- 列表 -->
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
    }
  }
};
</script>

<style scoped lang="scss">
#pageContainer {
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
  #button-group {
    width: 100%;
  }
  .red {
    color: red;
  }
  .pink {
    color: pink;
  }
}
</style>
