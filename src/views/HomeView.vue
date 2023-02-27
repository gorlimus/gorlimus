<template>
  <container
    id="home"
    class="relative flex items-center justify-center w-full h-screen snap-center"
  >
    <div class="ver text-primary p-4">
      <h1 class="text-7xl md:text-8xl tracking-tight" @click="scroll('about')">
        gorlimus
      </h1>
    </div>
  </container>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
