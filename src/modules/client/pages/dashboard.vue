<template>
  <dashboard-layout>
    <template v-slot:app-drawer>
      <app-drawer></app-drawer>
    </template>

    <template v-slot:app-top-nav>
      <app-top-nav></app-top-nav>
    </template>

    <template v-slot:app-content>
      <mini-top-nav />

      <div class="grid grid-cols-12 gap-20 pex-20 pet-20 grid-container">
        <project-card
          v-for="(project, i) in projects"
          :key="i"
          :project="project"
        />
      </div>

      <app-bottom-nav />
    </template>
  </dashboard-layout>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import MiniTopNav from "@/modules/client/components/mini-top-nav.vue";
  import ProjectCard from "@/modules/client/components/project-card.vue";
  import AppBottomNav from "@/modules/client/components/app-bottom-nav.vue";
  import DashboardLayout from "@/layouts/dashboard-layout.vue";
  import AppTopNav from "@/modules/client/components/app-top-nav.vue";
  import AppDrawer from "@/modules/client/components/app-drawer.vue";

  @Component({
    components: {
      MiniTopNav,
      ProjectCard,
      AppBottomNav,
      AppTopNav,
      AppDrawer,
      DashboardLayout
    },
  })

  export default class Dashboard extends Vue {
    // PROPS


    // COMPUTED


    // DATA
    projects = [
      {
        project_name: "Dewdrop - Final Shot.mp4",
        project_poster: "https://media.istockphoto.com/photos/navy-blue-dew-picture-id587229246?b=1&k=20&m=587229246&s=170667a&w=0&h=6RimIFp9og2CML1jPu19v3Uef_uymeomSv0Wlc49i4A=",
        freelancer_name: "John Snow",
        timestamp: "Nov 25, 3:30pm"
      },
      {
        project_name: "Phone X - shot.mov",
        project_poster: "https://media.istockphoto.com/photos/incandescent-bulb-and-colorful-notes-on-turquoise-wooden-table-picture-id647657344?b=1&k=20&m=647657344&s=170667a&w=0&h=GpLiYz2kXdGkq_j2QRATcxUFnZ9HmI9QvGoqX_Nr6P4=",
        freelancer_name: "Emery",
        timestamp: "Aug 25, 3:30pm"
      },
      {
        project_name: "Final Smoke - Shot.mp4",
        project_poster: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=adeolu-eletu-E7RLgUjjazc-unsplash.jpg&w=1920",
        freelancer_name: "David Carter",
        timestamp: "Sep 25, 3:30pm"
      },
      {
        project_name: "LD TV - Final Shot.mp4",
        project_poster: "https://media.istockphoto.com/photos/beautiful-flowers-background-picture-id520700958?b=1&k=20&m=520700958&s=170667a&w=0&h=6EtFVrpMyZ5mxPkb8isGWR2QiTTSO_LmINVmDyEvUfg=",
        freelancer_name: "David Carter",
        timestamp: "Dec 25, 3:30pm"
      },
      {
        project_name: "Literature Shot.mp4",
        project_poster: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=974&q=80",
        freelancer_name: "Peter King",
        timestamp: "Dec 25, 3:30pm"
      },
      {
        project_name: "Phone X - shot.mov",
        project_poster: "https://media.istockphoto.com/photos/incandescent-bulb-and-colorful-notes-on-turquoise-wooden-table-picture-id647657344?b=1&k=20&m=647657344&s=170667a&w=0&h=GpLiYz2kXdGkq_j2QRATcxUFnZ9HmI9QvGoqX_Nr6P4=",
        freelancer_name: "Emery",
        timestamp: "Aug 25, 3:30pm"
      },
      {
        project_name: "Final Smoke - Shot.mp4",
        project_poster: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=adeolu-eletu-E7RLgUjjazc-unsplash.jpg&w=1920",
        freelancer_name: "David Carter",
        timestamp: "Sep 25, 3:30pm"
      },
      {
        project_name: "LD TV - Final Shot.mp4",
        project_poster: "https://media.istockphoto.com/photos/beautiful-flowers-background-picture-id520700958?b=1&k=20&m=520700958&s=170667a&w=0&h=6EtFVrpMyZ5mxPkb8isGWR2QiTTSO_LmINVmDyEvUfg=",
        freelancer_name: "David Carter",
        timestamp: "Dec 25, 3:30pm"
      },
      {
        project_name: "Literature Shot.mp4",
        project_poster: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=974&q=80",
        freelancer_name: "Peter King",
        timestamp: "Dec 25, 3:30pm"
      },
      {
        project_name: "LD TV - Final Shot.mp4",
        project_poster: "https://media.istockphoto.com/photos/beautiful-flowers-background-picture-id520700958?b=1&k=20&m=520700958&s=170667a&w=0&h=6EtFVrpMyZ5mxPkb8isGWR2QiTTSO_LmINVmDyEvUfg=",
        freelancer_name: "David Carter",
        timestamp: "Dec 25, 3:30pm"
      },
      {
        project_name: "Literature Shot.mp4",
        project_poster: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=974&q=80",
        freelancer_name: "Peter King",
        timestamp: "Dec 25, 3:30pm"
      },
    ];


    // METHODS


    // LIFECYCLE HOOKS

  }
</script>

<style scoped lang="scss">
  .grid-container {
    padding-bottom: 5rem;
  }
</style>