import { RouteConfig, RouteMeta } from "vue-router";

const clientRoutes: Array<RouteConfig> = [
  {
    path: "/client/",
    component: () =>
      import(/* webpackChunkName: "client" */ "@/modules/client/pages/client.vue"),

    children: [
      {
        path: "dashboard",
        name: "ClientDashboard",
        component: () =>
          import(/* webpackChunkName: "client" */ "@/modules/client/pages/dashboard.vue"),
        meta: {
          title: "Client Dashboard",
          // access: ["client"],
        } as RouteMeta,
      },
      {
        path: "create-project",
        name: "ClientCreateProject",
        component: () =>
          import(/* webpackChunkName: "client" */ "@/modules/client/pages/create-project.vue"),
        meta: {
          title: "Client Project",
          // access: ["client"],
        } as RouteMeta,
      },
    ],
  }
];

export default clientRoutes;