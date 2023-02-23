<template>
  <header
    class="fixed h-28 flex w-full items-start font-thin bg-gradient-to-b from-slate-800 z-50"
    :class="[isActive ? 'w-fit' : 'w-full']"
  >
    <nav class="flex w-full justify-between">
      <button class="absolute m-2" @click.prevent="toggleClass">
        <img
          class="object-cover h-8 w-8 md:h-12 md:w-12 rounded-full hover:ring-2 ring-secondary transition-all duration-300"
          :class="[isActive ? 'ring-2' : '']"
          src="@/assets/images/avatar.jpg"
        />
      </button>
      <ul
        class="flex w-full ml-8 my-2 justify-around items-center text-primary text-xs md:text-lg"
      >
        <li class="flex">
          <router-link
            class="transition ease-in-out duration-500"
            :class="[isActive ? '' : '-translate-y-12 opacity-0']"
            :to="{ name: 'home' }"
            >home</router-link
          >
        </li>
        <li class="flex">
          <router-link
            class="transition ease-in-out duration-500 delay-100"
            :class="[isActive ? '' : '-translate-y-12 opacity-0']"
            :to="{ name: 'about' }"
            >about</router-link
          >
        </li>
        <li class="flex">
          <router-link
            class="transition ease-in-out duration-500 delay-200"
            :class="[isActive ? '' : '-translate-y-12 opacity-0']"
            :to="{ name: 'projects' }"
            >projects</router-link
          >
        </li>
        <li class="flex">
          <router-link
            class="transition ease-in-out duration-500 delay-300"
            :class="[isActive ? '' : '-translate-y-12 opacity-0']"
            :to="{ name: 'contacts' }"
            >contacts</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: "AppHeader",
  data() {
    return { isActive: false };
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
