<template>
  <app-header />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "app",
  components: {
    AppHeader,
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
