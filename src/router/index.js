import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Subscription from "../views/Subscription.vue";
import Contest from "../views/Contest.vue";
import Association from "../views/Association.vue";
import Partenaire from "../views/Partenaire.vue";
import Agenda from "../views/Agenda.vue";
import Gallery from "../views/Gallery.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/association",
    name: "association",
    component: Association,
    meta: {
      title: "Association",
      image: require("../assets/navbar/Drenec.svg")
    }
  },
  {
    path: "/contest",
    name: "contest",
    component: Contest,
    meta: {
      title: "Competition",
      image: require("../assets/navbar/Guiautec.svg")
    }
  },
  {
    path: "/agenda",
    name: "agenda",
    component: Agenda,
    meta: {
      title: "Agenda",
      image: require("../assets/navbar/Loc_h.svg")
    }
  },
  {
    path: "/gallery",
    name: "gallery",
    component: Gallery,
    meta: {
      title: "Galerie",
      image: require("../assets/navbar/Saint_Nicolas.svg")
    }
  },
  {
    path: "/partenaire",
    name: "partenaire",
    component: Partenaire,
    meta: {
      title: "Partenaires",
      image: require("../assets/navbar/Penfret.svg")
    }
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
