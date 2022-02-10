<template>
  <div class="h-screen w-full grid grid-cols-12">
    <div class="col-span-2 drawer h-full w-full shadow-sm position-relative">
      <app-drawer />
    </div>

    <div class="h-full w-full main-wrapper">
      <app-top-nav />
        <router-view />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import AppTopNav from "@/modules/client/components/app-top-nav.vue";
  import AppDrawer from "@/modules/client/components/app-drawer.vue";


  @Component({
    components: {
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
    overflow-x: hidden;
    display: none;
  }

  .main-wrapper {
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    grid-column: span 12 / span 12;
  }

  @include breakpoint-up(md) {
    .drawer {
      display: none;
    }

    .main-wrapper {
      grid-column: span 12 / span 12;
    }
  }

   @include breakpoint-up(lg) {
    .drawer {
      display: block;
    }

    .main-wrapper {
      grid-column: span 10 / span 10;
    }
  }
</style>