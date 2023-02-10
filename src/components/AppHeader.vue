<template>
  <header class="fixed w-full py-5 px-5 bg-transparent">
    <nav class="flex items-center justify-between text-xl">
      <img
        class="object-cover h-12 w-12 rounded-full"
        src="@/assets/images/avatar.jpg"
        alt="Your Company"
      />
      <!-- logo -->
      <router-link class="px-2 text-primary rounded-full" :to="{ name: 'home' }"
        >home</router-link
      >
      <router-link
        class="px-2 text-primary rounded-full"
        :to="{ name: 'about' }"
        >about</router-link
      >
      <router-link
        class="px-2 text-primary rounded-full"
        :to="{ name: 'projects' }"
        >projects</router-link
      >
      <router-link
        class="px-2 text-primary rounded-full"
        :to="{ name: 'contacts' }"
        >contacts</router-link
      >
    </nav>
  </header>
</template>
<script>
export default {
  name: "AppHeader",
};
</script>
