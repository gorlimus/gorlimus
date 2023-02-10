import { createRouter, createWebHashHistory } from "vue-router";

const HomeView = () => import("@/views/HomeView.vue");
const AboutView = () => import("@/views/AboutView.vue");
const ProjectsView = () => import("@/views/ProjectsView.vue");
const ContactsView = () => import("@/views/ContactsView.vue");

const routes = [
  {
    name: "home",
    path: "/",
    component: HomeView,
  },
  {
    name: "about",
    path: "/about",
    component: AboutView,
  },
  {
    name: "projects",
    path: "/projects",
    component: ProjectsView,
  },
  {
    name: "contacts",
    path: "/contacts",
    component: ContactsView,
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-secondary",
});

export default router;
