import Vue from "vue";

import Meta from "vue-meta";
import PortalVue from "portal-vue";
import Vuelidate from "vuelidate";
import { mixin as  clickaway } from 'vue-clickaway';

Vue.use(Meta);
Vue.use(PortalVue);
Vue.use(Vuelidate);
Vue.mixin(clickaway);