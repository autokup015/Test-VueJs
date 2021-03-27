import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import moment from "moment";
Vue.prototype.moment = moment;

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

import VuePageTransition from "vue-page-transition";

Vue.use(VuePageTransition);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
