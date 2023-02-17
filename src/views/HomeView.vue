<template>
  <container id="home" class="flex items-center justify-center w-full h-screen">
    <div class="ver text-primary p-4">
      <router-link :to="{ name: 'about' }">
        <h1 class="text-7xl md:text-8xl tracking-tight">gorlimus</h1>
      </router-link>
    </div>
  </container>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
