import { createApp } from "vue";

import router from "./router";

import App from "./App.vue";

import "@svgstore";

import SvgIcon from "./components/svgicon/index.vue";

const app = createApp(App);
app.component("SvgIcon", SvgIcon);
app.use(router);
app.mount("#app");
