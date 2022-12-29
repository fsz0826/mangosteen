import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Welcome from "../views/Welcome.vue";
import First from "../components/welcome/First.vue";
import Second from "../components/welcome/Second.vue";
import Third from "../components/welcome/Third.vue";
import Forth from "../components/welcome/Forth.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "1", component: First },
      { path: "2", component: Second },
      { path: "3", component: Third },
      { path: "4", component: Forth },
    ],
  },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
