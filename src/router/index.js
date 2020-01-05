import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Subscription from "../views/Subscription.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/subscription",
    name: "subscription",
    component: Subscription
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
