<template>
  <div
    @scroll="test"
    id="scroller"
    class="snap-y overflow-scroll overscroll-contain snap-mandatory h-screen"
  >
    <app-header :activeLink="activeLink" />
    <home-view />
    <about-view />
    <projects-view />
    <contacts-view />
    <app-footer />
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ContactsView from "@/views/ContactsView.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "app",
  components: {
    AppHeader,
    HomeView,
    AboutView,
    ProjectsView,
    ContactsView,
    AppFooter,
  },
  data() {
    return {
      activeLink: "home",
    };
  },
  methods: {
    test() {
      const scroller = document.querySelector("#scroller");
      const page = Math.round(
        scroller.scrollTop / scroller.getBoundingClientRect().height
      );
      console.log(page);
      if (page === 0) {
        this.activeLink = "home";
      }
      if (page === 1) {
        this.activeLink = "about";
      }
      if (page === 2) {
        this.activeLink = "projects";
      }
      if (page === 3) {
        this.activeLink = "contacts";
      }
    },
  },
};
</script>
<style>
.fade-enter-from {
  opacity: 0;
  transform: translate(0%, 5%);
  transition: all 0.4s ease-out;
}
.fade-enter-active {
  transition: all 0.3s ease-in-out;
}
.fade-leave-to {
  transform: translate(0%, -5%);
  opacity: 0;
  transition: all 0.3s ease-in;
}
</style>
