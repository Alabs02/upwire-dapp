import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// APLLICATION STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/scss/app.scss";
import "animate.css";

// IMPORT PLUGINS
import "@/plugins";

// DEV TOOLS
const isDev = process.env.NODE_ENV !== "production";
Vue.config.productionTip = isDev;
Vue.config.devtools = isDev;
Vue.config.performance = isDev;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
