import { createApp } from "vue";
import App from "./App.vue";
import Route from "./route";
import Store from "./store/index.js";
import Pear from "./component/index.js";
import Antd from "ant-design-vue/es";
import i18n from './locale/index.js';
import * as antIcons from '@ant-design/icons-vue';

import "./mock";
import "./assets/css/index.less";
import "ant-design-vue/dist/antd.less";

const app = createApp(App);
app.use(Antd);
app.use(Pear);
app.use(Store);
app.use(Route);
app.use(i18n)
app.mount("#app");

Object.keys(antIcons).forEach(key => {
  app.component(key, antIcons[key])
})

// 添加到全局
app.config.globalProperties.$antIcons = antIcons

export default app
