/*
 * @version: 0.0.1
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-02-05 20:41:02
 * @copyright: Copyright (c) 2019, Hand
 */
import "reset-css";
import Vue from "vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import { Button, Input, Row, Col, List, Checkbox } from "ant-design-vue/lib";

import store from "./store";
import router from "./router";
import {
  BaseInput,
  BaseButton,
  BaseRainbow,
  BaseCheckbox,
  BaseDeleteButton
} from "@/components/BaseComponents";

Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Input.name, Input);
Vue.component(Button.name, Button);
Vue.component(Checkbox.name, Checkbox);
Vue.component(List.name, List);
Vue.component(List.Item.name, List.Item);

Vue.component("base-input", BaseInput);
Vue.component("base-delete-button", BaseDeleteButton);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
}).$mount("#app");
