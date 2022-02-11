<template>
  <modal-layout
    :show_close_btn="true"
    :show_modal="show_modal"
    @closeTrigger="closeModal"
  >
    <template v-slot:modal-content>
      <h1>Content</h1>
    </template>
  </modal-layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import ModalLayout from "@/layouts/modal-layout.vue";

  export default Vue.extend({
    components: {
      ModalLayout,
    },

    props: {
      show_modal: {
        type: Boolean,
        default: false,
      }
    },

    data() {
      return {
      };
    },

    methods: {
      closeModal() {
        this.$emit('close-modal');
      },
    }
  });
</script>

<style scoped>
</style>