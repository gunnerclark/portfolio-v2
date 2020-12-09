import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret, faAdjust, faChevronUp, faAngleDoubleDown, faReply, faCopy, faEnvelope, faInfoCircle, faFolder } from '@fortawesome/free-solid-svg-icons';
import { faCss3, faGithub, faHtml5, faJs, faNodeJs, faVuejs } from '@fortawesome/free-brands-svg-icons';
// import {  } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

library.add(faUserSecret, faAdjust, faChevronUp, faAngleDoubleDown, faReply, faHtml5, faJs, faCss3, faVuejs, faNodeJs, faGithub, faCopy, faEnvelope, faInfoCircle, faFolder, faAddressCard);

Vue.component('fa-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
