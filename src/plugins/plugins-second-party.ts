import Vue from "vue";
import { MixinAssets } from "@/mixins/mixin.assets";

// MIXINS
Vue.mixin(MixinAssets);

// SERVICES

Vue.prototype.$bus = new Vue();
