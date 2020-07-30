import Vue from 'vue';
import Router from 'vue-router';

import TodoListPage from '@/views/TodoListPage';
import TestAnimate from '@/views/TestAnimate';

Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [
    { path: '/', name: 'TodoListPage', component: TodoListPage },
    { path: '/testAnimate', name: 'TestAnimate', component: TestAnimate }
  ]
});
