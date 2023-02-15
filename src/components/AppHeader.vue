<template>
  <header
    class="fixed flex w-full font-thin bg-transparent"
    :class="[isActive ? 'w-fit' : 'w-full']"
  >
    <nav class="flex w-full justify-between">
      <button class="ver absolute m-4" @click.prevent="toggleClass">
        <img
          class="object-cover h-10 w-10 rounded-full"
          src="@/assets/images/avatar.jpg"
        />
      </button>
      <ul
        class="flex w-full mx-10 my-5 justify-around items-center text-primary rounded-full"
        :class="[isActive ? 'hidden' : '']"
      >
        <li class="flex">
          <router-link class="" :to="{ name: 'home' }">home</router-link>
        </li>
        <li class="flex">
          <router-link :to="{ name: 'about' }">about</router-link>
        </li>
        <li class="flex">
          <router-link :to="{ name: 'projects' }">projects</router-link>
        </li>
        <li class="flex">
          <router-link :to="{ name: 'contacts' }">contacts</router-link>
        </li>
      </ul>
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
