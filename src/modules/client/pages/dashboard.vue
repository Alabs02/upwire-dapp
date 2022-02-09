<template>
  <div class="w-100 h-100">
    <mini-top-nav />
    <div class="wrapper pe-20 h-full w-full grid grid-cols-12 gap-22">
      <project-card />
      <project-card />
      <project-card />
      <project-card />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import MiniTopNav from "@/modules/client/components/mini-top-nav.vue";
  import ProjectCard from "@/modules/client/components/project-card.vue";

  @Component({
    components: {
      MiniTopNav,
      ProjectCard,
    },
  })

  export default class Dashboard extends Vue {
    // PROPS


    // COMPUTED


    // DATA


    // METHODS


    // LIFECYCLE HOOKS

  }
</script>

<style scoped lang="scss">

</style>