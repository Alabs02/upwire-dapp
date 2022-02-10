<template>
  <div class="h-screen w-full grid grid-cols-12">
    <div class="col-span-2 drawer h-full w-full shadow-sm position-relative">
      <slot name="app-drawer">
        <slot />
      </slot>
    </div>

    <div class="h-full w-full main-wrapper">
      <slot name="app-top-nav">
        <slot />
      </slot>

      <slot name="app-content">
        <slot />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
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
    position: relative;

    overflow-y: auto;
    overflow-x: hidden;
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