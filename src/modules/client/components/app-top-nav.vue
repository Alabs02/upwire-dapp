<template>
  <div class="app-top-nav w-full pex-20 pey-10">
    <div class="search">
      <input type="text" class="search__input fw-semi-bold w-full h-full pey-8 pex-18" placeholder="Jump to project...">
    </div>

    <div class="d-flex align-items-center justify-content-center">
      <button class="mer-20 btn-circle btn-circle-gray">
        <feather type="user"></feather>
      </button>

      <div data-badge="5" class="badge badge-tonic fw-bold"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    components: {
    },

    data() {
      return {
      };
    },

    methods: {
    },
  });
</script>

<style scoped lang="scss">
  .app-top-nav {
    background: $brand-dark-light;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    &__media {
      @include media(100, 40, hidden, contain);
    }
  }

  .search {
    width: 25%;
    height: 100%;
    display: none;

    &__input {
      background: $brand-dark-lighter;
      border-radius: toRem(8);
      font-size: toRem(16);
      letter-spacing: .2pt;
      color: $color-text;

      &::placeholder {
        color: $color-text;
      }
    }
  }

  @include breakpoint-up(md) {
    .app-top-nav {
      justify-content: space-between;
    }

    .search {
      display: block;
    }
  }
</style>