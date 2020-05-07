<!--
 * @version: 0.0.1
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-02-05 20:41:02
 * @copyright: Copyright (c) 2019, Hand
 -->
<template>
  <div id="app">
    <!-- <app-header></app-header> -->
    <transition name="page" tag="div" id="todoList">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import { AppHeader } from "./components/App/index";

export default {
  name: "app",
  // components: { AppHeader },
  methods: {}
};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  background-color: aliceblue;
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
