<template>
  <header
    class="fixed flex w-full font-thin bg-transparent z-50"
    :class="[isActive ? 'w-fit' : 'w-full']"
  >
    <nav class="flex w-full justify-between">
      <button class="ver absolute m-2" @click.prevent="toggleClass">
        <img
          class="object-cover h-8 w-8 rounded-full"
          src="@/assets/images/avatar.jpg"
        />
      </button>
      <ul
        class="flex w-full ml-8 my-2 justify-around items-center text-primary text-xs md:text-lg"
        :class="[isActive ? '' : '']"
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
  data: function () {
    return { isActive: false };
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
