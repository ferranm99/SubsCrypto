import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/LandingPages/AboutUs/AboutView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: AboutView,
    }
  ],
});

export default router;
