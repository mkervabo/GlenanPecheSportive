import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contest from "../views/Contest.vue";
import Association from "../views/Association.vue";
import Partenaire from "../views/Partenaire.vue";
import Agenda from "../views/Agenda.vue";
import Gallery from "../views/Gallery.vue";
import Annonce from "../views/Annonce.vue";
import Error404 from "../views/404.vue";
import Subscription from "../views/Subscription.vue";
import Legal from "../views/Legal.vue";

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
      title: "Qui sommes nous ?",
      image: require("../assets/navbar/Guiautec.svg")
    }
  },
  {
    path: "/contest",
    name: "contest",
    component: Contest,
    meta: {
      title: "Competition",
      image: require("../assets/navbar/Loc_h.svg")
    }
  },
  {
    path: "/agenda",
    name: "agenda",
    component: Agenda,
    meta: {
      title: "Agenda",
      image: require("../assets/navbar/Drenec.svg")
    }
  },
  {
    path: "/gallery",
    name: "gallery",
    component: Gallery,
    meta: {
      title: "Média",
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
  },
  {
    path: "/annonce",
    name: "annonce",
    component: Annonce
  },
  {
    path: "/legal",
    name: "legal",
    component: Legal
  },
  {
    path: "/404",
    name: "404",
    component: Error404
  },
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

if (typeof window.ga !== "undefined") {
  window.ga("set", "page", router.currentRoute.path);
  window.ga("send", "pageview");
}

router.afterEach(to => {
  if (typeof window.ga !== "undefined") {
    window.ga("set", "page", to.path);
    window.ga("send", "pageview");
  }
});

export default router;
