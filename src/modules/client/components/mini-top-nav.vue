<template>
  <div class="w-full mini-bar pex-20 pet-20 peb-10 d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <div class="mini-bar__media mer-15">
        <img v-lazy-src="staticAsset('studio.png')" class="mini-bar__img" />
      </div>
      <h4 class="m-0 mini-bar__heading fw-bold">Yambo Studios</h4>
    </div>

    <div>
      <button @click="closeModal" class="btn btn-primary shadow pex-25">
        <span class="mer-10">New</span>
        <feather type="plus" class="btn-icon"></feather>
      </button>
    </div>

    <portal to="upwire-modals">
      <test-modal
        :show_modal="isOpen"
        @close-modal="closeModal"
      />
    </portal>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import TestModal from "@/modals/client-modals/test-modal.vue";


  export default Vue.extend({
    components: {
      TestModal,
    },

    data() {
      return {
        isOpen: false,
      };
    },

    methods: {
      closeModal(): void {
        this.isOpen = !this.isOpen;
      },
    },
  });
</script>

<style scoped lang="scss">
  .mini-bar {
    background: $brand-dark-light;

    &__media {
      @include media(35, 35, hidden, contain);
      background: $brand-light-gray;
      border-radius: toRem(5);
    }

    &__heading {
      color: $color-text;
      font-size: toRem(20);
      letter-spacing: .2pt;
    }
  }
</style>