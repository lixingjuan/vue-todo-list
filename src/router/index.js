/*
 * @version: 0.0.1
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-01-29 11:20:01
 * @copyright: Copyright (c) 2019, Hand
 */
import Vue from "vue";
import Router from "vue-router";
import todoList from "@/todoList/index.vue";
import todoList1 from "@/todoList-2/index.vue";
import todoList2 from "@/todoList-2/index.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/todoList", name: "todoList", component: todoList },
    { path: "/todoList1", name: "todoList1", component: todoList1 },
    { path: "/todoList2", name: "todoList2", component: todoList2 }
  ]
});
