import Vue from "vue";

import Meta from "vue-meta";
import PortalVue from "portal-vue";
import Vuelidate from "vuelidate";
import { mixin as  clickaway } from 'vue-clickaway';
import VueFeather from "vue-feather";
import VLazySrcPlugin from "v-lazy-src";
import RoundSlider from "vue-round-slider";

Vue.use(Meta);
Vue.use(PortalVue);
Vue.use(Vuelidate);
Vue.use(VueFeather);
Vue.use(VLazySrcPlugin);
Vue.mixin(clickaway);
Vue.component("round-slider", RoundSlider);
