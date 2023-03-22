import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Welcome from "../views/WelcomePage.vue";

import FirstCard from "../components/welcome/FirstCard.vue";
import FirstAction from "../components/welcome/FirstAction.vue";
import SecondCard from "../components/welcome/SecondCard.vue";
import SecondAction from "../components/welcome/SecondAction.vue";
import ThirdCard from "../components/welcome/ThirdCard.vue";
import ThirdAction from "../components/welcome/ThirdAction.vue";
import ForthCard from "../components/welcome/ForthCard.vue";
import ForthAction from "../components/welcome/ForthAction.vue";
import StartPage from "../views/StartPage.vue";
import ItemPage from "../views/ItemPage.vue";
import ItemList from "../components/item/ItemList.vue";
import ItemCreate from "../components/item/ItemCreate.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome" },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "", redirect: "/welcome/1" },
      {
        path: "1",
        name: "Welcome1",
        components: { main: FirstCard, footer: FirstAction },
      },
      {
        path: "2",
        name: "Welcome2",
        components: { main: SecondCard, footer: SecondAction },
      },
      {
        path: "3",
        name: "Welcome3",
        components: { main: ThirdCard, footer: ThirdAction },
      },
      {
        path: "4",
        name: "Welcome4",
        components: { main: ForthCard, footer: ForthAction },
      },
    ],
  },
  { path: "/start", component: StartPage },
  {
    path: "/items",
    component: ItemPage,
    children: [
      { path: "", component: ItemList },
      { path: "create", component: ItemCreate },
    ],
  },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
