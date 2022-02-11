<template>
  <transition
    v-if="show_modal"
    mode="out-in"
    appear
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <div
      class="modal-overlay"
      @click.self="$emit('closeTrigger')"
    >
      <transition
        v-if="show_modal"
        mode="out-in"
        appear
        enter-active-class="animate__animated animate__zoomIn"
        leave-active-class="animate__animated animate__zoomOut"
      >
        <div class="modal-cover pe-20">
          <div class="modal-wrapper h-full w-full">
            <div @click="$emit('closeTrigger')" v-show="show_close_btn" class="modal-close-btn pointer">
              <feather type="x-circle" size="26" class="modal-close-icon"></feather>
            </div>
            <div class="modal-container">
              <!--  MODAL HEADER  -->
              <slot name="modal-header"></slot>

              <!--  MODAL CONTENT -->
              <slot name="modal-content"></slot>


              <!--  MODAL FOOTER-->
              <slot name="modal-footer"></slot>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    name: "ModalLayout",

    props: {
      show_close_btn: {
        type: Boolean,
        default: false
      },

      show_modal: {
        type: Boolean,
        default: false
      }
    },
  });
</script>

<style scoped lang="scss">
  .modal {
    &-overlay {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;

      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.65);

      display: grid;
      overflow: hidden;
    }

    &-cover {
      width: 90%;
      min-height: toRem(300);
      max-height: toRem(500);

      overflow-y: auto;
      overflow-x: hidden;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      background: lighten($color: $brand-blue-light, $amount: 12);
      border-radius: toRem(15);
      box-shadow: 0 0 5px 10px rgba($color: $brand-dark, $alpha: 0.4);

      & * {
        color: $brand-dark !important;
      }
    }

    &-wrapper {
      position: relative;
    }

    &-close-btn {
      position: absolute;
      top: 0;
      right: 0;
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  @include breakpoint-up(md) {
    .modal {
      &-cover {
        width: 50%;
        min-height: toRem(400);
        max-height: toRem(500);
      }
    }
  }

  @include breakpoint-up(lg) {
    .modal {
      &-cover {
        width: 50%;
        min-height: toRem(500);
        max-height: toRem(600);
      }
    }
  }
</style>