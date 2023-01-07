import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/chatflow",
    name: "Chatflow landing",
    component: () => import("@/pages/ChatFlow.vue"),
  },
  {
    path: "/jobless",
    name: "Jobless Hero",
    component: () => import("@/pages/Jobless.vue"),
  },
  {
    path: "/comment",
    name: "Comment Section",
    component: () => import("@/pages/Comment.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
