import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Subscription from "../views/Subscription.vue";
import Contest from "../views/Contest.vue";
import Association from "../views/Association.vue";
import Partenaire from "../views/Partenaire.vue";

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
  },
  {
    path: "/contest",
    name: "contest",
    component: Contest
  },
  {
    path: "/association",
    name: "association",
    component: Association
  },
  {
    path: "/partenaire",
    name: "partenaire",
    component: Partenaire
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
