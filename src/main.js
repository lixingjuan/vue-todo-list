/*
 * @version: 0.0.1
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-02-05 20:41:02
 * @copyright: Copyright (c) 2019, Hand
 */
import Vue from "vue";
import App from "./App.vue";
import { Button, Input, Row, Col, List, Checkbox } from "ant-design-vue/lib";
import "ant-design-vue/dist/antd.css";

import router from "./router";

Vue.component(Button.name, Button);
Vue.component(Input.name, Input);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Checkbox.name, Checkbox);
Vue.component(List.name, List);
Vue.component(List.Item.name, List.Item);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  render: h => h(App)
}).$mount("#app");

// import Vue from "vue";
// import App from "./App.vue";
// import router from "./router";
// import { store } from "@/store/index";

// Vue.config.productionTip = false;

// new Vue({
//   el: "#app",
//   store,
//   router,
//   render: h => h(App)
// }).$mount("#app");
