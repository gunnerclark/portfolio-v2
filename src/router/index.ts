import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import View from "../views/View.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "View",
    component: View
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
