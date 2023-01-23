import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About";

const routes = [
  {
    path: "/q-n-a",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;