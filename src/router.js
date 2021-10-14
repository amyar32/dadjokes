import { createRouter, createWebHistory } from "vue-router";
import index from "./pages/index.vue";
import en from "./pages/en/index.vue";
import id from "./pages/id/index.vue";

const routes = [
  { path: "/", component: index },
  { path: "/en", component: en },
  { path: "/id", component: id },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
