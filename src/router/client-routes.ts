import { RouteConfig, RouteMeta } from "vue-router";

const clientRoutes: Array<RouteConfig> = [
  {
    path: "/client/dashboard",
    name: "ClientDashboard",
    component: () =>
      import(/* webpackChunkName: "client" */ "@/modules/client/pages/dashboard.vue"),
    meta: {
      title: "Client Dashboard",
      access: ["client"],
    } as RouteMeta,
  },
  {
    path: "/client/create-project",
    name: "ClientCreateProject",
    component: () =>
      import(/* webpackChunkName: "client" */ "@/modules/client/pages/create-project.vue"),
    meta: {
      title: "Client Project",
      access: ["client"],
    } as RouteMeta,
  },
];

export default clientRoutes;