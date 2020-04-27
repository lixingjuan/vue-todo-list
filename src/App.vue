<!--
 * @version: 0.0.1
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-02-05 20:41:02
 * @copyright: Copyright (c) 2019, Hand
 -->
<template>
  <div id="app">
    <div id="button-group">
      <base-button @onClick="switchPage('TodoListPage')" :buttonText="'todolist-full-version'" />
      <base-button @onClick="switchPage('TodoListPropsPage')" :buttonText="'todolist-normal'" />
      <base-button @onClick="switchPage('TodoListVuexPage')" :buttonText="'todolist-vuex'" />
    </div>
    <transition name="page" tag="div" id="todoList">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { BaseButton } from "@/components/BaseComponents";

export default {
  name: "app",
  components: {
    BaseButton
  },
  methods: {
    switchPage(targetPageName) {
      console.log(this.$router.params);
      this.$router.push({ name: targetPageName });
    }
  }
};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  background-color: aliceblue;
  #button-group {
    margin-top: 30px;
    button {
      margin-left: 30px;
    }
  }
}
.page-enter-active,
.page-leave-active {
  transition: all 1s;
}
.page-enter {
  opacity: 0;
  transform: translateX(-100px);
}
.page-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.page-move {
  transition: transform 1s;
}
</style>
