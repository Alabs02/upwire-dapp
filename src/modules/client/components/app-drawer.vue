<template>
  <div class="app-drawer h-full w-full pe-20 overflow-auto">
    <div class="app-drawer__media">
      <h4 class="text-uppercase fw-bold">Upwire</h4>
    </div>

    <div @click="toggleItems" class="app-drawer__dropdown d-flex align-items-center justify-content-between pey-10 pex-15 met-40 pointer">
      <feather type="list"></feather>
      <span class="fw-semi-bold">Projects</span>
      <feather type="arrow-down-circle"></feather>
    </div>

    <transition
      mode="out-in"
      appear
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <ul v-show="showItems" class="list w-full m-0 met-20">
        <li class="list__item position-relative pey-8 pex-15 meb-5">
          <button
            data-tooltip="Dewdrop - Final Shot.mov"
            class="brand-tooltip w-full pointer d-flex align-items-center list__btn"
          >
            <feather type="film" class="mer-5"></feather>
            <span class="fw-bold text-capitalize">{{ 'Dewdrop - Final Shot.mov' | trimText }}</span>
          </button>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    data() {
      return {
        showItems: false,
      };
    },

    filters: {
      trimText(val) {
        if (!val) return "";
        if (val?.length > 15) {
          return val.substring(0, 15) + "...";
        }
      }
    },

    methods: {
      toggleItems() {
        this.showItems = !this.showItems;
      },
    }
  });
</script>

<style scoped lang="scss">
  .app-drawer {
    background: $brand-dark;

    &__media {
      h4 {
        font-size: toRem(16);
        text-align: center;
        letter-spacing: 1.2pt;
      }
    }

    &__dropdown {
      transition: all 0.4s ease-in-out;
      border-radius: toRem(5);

      span {
        font-size: toRem(14);
        text-transform: uppercase;
        letter-spacing: 1pt;
      }

      &:hover {
        background: lighten($color: $brand-bg, $amount: 4);
        color: $color-white;
      }
    }
  }

  .list {
    transition: all 0.4s ease-in-out;

    &__item {
      border-radius: toRem(5);
      transition: inherit;

      &:hover {
        background: lighten($color: $brand-bg, $amount: 5);
        color: $color-white;
      }
    }

    &__btn {
      span {
        letter-spacing: .2pt;
        font-size: toRem(14);
      }
    }
  }
</style>