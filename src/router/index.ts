import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import GamePage from '../views/GamePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "GamePage",
    component: GamePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
