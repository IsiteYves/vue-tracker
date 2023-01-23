import { createRouter, createWebHistory } from "vue-router";
import Landing from "../views/Landing";
import About from "../views/About";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Landing,
  },
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
