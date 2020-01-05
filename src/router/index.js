import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Subcription from "../views/Subcription.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/subcription",
    name: "subcription",
    component: Subcription
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
