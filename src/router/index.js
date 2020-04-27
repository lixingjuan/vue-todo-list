/*
 * @version: 0.0.1
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-01-29 11:20:01
 * @copyright: Copyright (c) 2019, Hand
 */
import Vue from "vue";
import Router from "vue-router";
import TodoListPage from "@/views/TodoListPage";
import TodoListPropsPage from "@/views/TodoListPropsPage";
import TodoListVuexPage from "@/views/TodoListVuexPage";

Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [
    // { path: "/", name: "Index", component: Index }
    { path: "/", name: "TodoListPage", component: TodoListPage },
    { path: "/todo-list-props-page", name: "TodoListPropsPage", component: TodoListPropsPage },
    { path: "/todo-list-vuex-page", name: "TodoListVuexPage", component: TodoListVuexPage }
  ]
});
