<template>
  <div class="h-screen w-full grid grid-cols-12">
    <div class="col-span-2 drawer h-full w-full shadow-sm">
      <app-drawer />
    </div>

    <div class="col-span-10 h-full w-full">
      <app-top-nav />
      <main class="pe-20 h-full w-full">
        <router-view />
      </main>
      <app-bottom-nav />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import AppBottomNav from "@/modules/client/components/app-bottom-nav.vue";
  import AppTopNav from "@/modules/client/components/app-top-nav.vue";
  import AppDrawer from "@/modules/client/components/app-drawer.vue";


  @Component({
    components: {
      AppBottomNav,
      AppTopNav,
      AppDrawer
    }
  })

  export default class  extends Vue {
    // PROPS

    // COMPUTED

    // DATA

    // METHODS

    // LIFECYCLE HOOKS

  }
</script>

<style scoped lang="scss">
  .drawer {
    background: $brand-dark;
  }
</style>