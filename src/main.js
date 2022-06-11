import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Toasted from "vue-toasted";

Vue.config.productionTip = false;

Vue.component("fa-icon", FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

Vue.use(Toasted, Option);
