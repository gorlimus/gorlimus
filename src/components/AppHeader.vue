<template>
  <header
    class="fixed flex w-full bg-transparent"
    :class="[isActive ? 'w-fit' : 'w-full']"
  >
    <nav class="flex w-full justify-between">
      <img
        class="flex object-cover h-12 w-12 m-2 rounded-full"
        src="@/assets/images/avatar.jpg"
        alt="Your Company"
        @click="toggleClass"
      />
      <!-- logo -->
      <div
        class="flex w-full justify-around items-center text-xl rounded-full"
        :class="[isActive ? 'hidden' : '']"
      >
        <a class="px-2 text-primary rounded-full" href="#home">home</a>
        <a class="px-2 text-primary rounded-full" href="#about">about</a>
        <a class="px-2 text-primary rounded-full" href="#projects">projects</a>
        <a class="px-2 text-primary rounded-full" href="#contacts">contacts</a>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "AppHeader",
  data: function () {
    return { isActive: true };
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
