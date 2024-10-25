import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/DashboardView.vue"),
  },
  {
    path: "/invoice",
    name: "invoice",
    component: () => import("../views/InvoiceView.vue"),
  },
  {
    path: "/estimate",
    name: "estimate",
    component: () => import("../views/EstimateView.vue"),
  },
  {
    path: "/status",
    name: "status",
    component: () => import("../views/StatusView.vue"),
  },
  {
    path: "/client",
    name: "client",
    component: () => import("../views/ClientView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
