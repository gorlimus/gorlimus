<template>
  <main id="home">
    <div class="flex items-center justify-center w-full h-screen py-72">
      <div class="ver text-primary text-center">
        <router-link :to="{ name: 'about' }">
          <h1 class="text-8xl tracking-tight">gorlimus</h1>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
