<template>
  <app-header />
  <home-view />
  <about-view />
  <projects-view />
  <contacts-view />
</template>
<script>
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ContactsView from "@/views/ContactsView.vue";
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "app",
  components: {
    AppHeader,
    HomeView,
    AboutView,
    ProjectsView,
    ContactsView,
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s linear;
}
.fade-leave-to {
  transition: all 0.5 linear;
  opacity: 0;
}
</style>
