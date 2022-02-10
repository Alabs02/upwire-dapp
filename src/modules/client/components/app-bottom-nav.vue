<template>
  <div class="footer w-full d-grid place-items-center pe-5">
    Upwire &copy; {{ currentDate }} Alrights Reserved
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class  extends Vue {
    currentDate: number = new Date().getFullYear();
  }
</script>

<style scoped lang="scss">
  .footer {
    border-bottom: toRem(5) solid $brand-blue-light;
    background: $brand-bg;

    position: absolute;
    bottom: 0;
    left: 0;
  }
</style>