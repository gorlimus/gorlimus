<template>
  <header
    id="header"
    class="fixed h-28 md:h-10 flex w-full items-start font-thin bg-gradient-to-b from-slate-800 z-50"
    :class="[isActive ? 'w-fit' : 'w-full']"
  >
    <button class="absolute m-2" @click.prevent="toggleClass">
      <img
        class="object-cover h-8 w-8 md:h-12 md:w-12 rounded-full hover:ring-2 ring-secondary transition-all duration-300"
        :class="[isActive ? 'ring-2' : '']"
        src="@/assets/images/avatar.jpg"
      />
    </button>
    <nav
      class="flex w-full justify-between transition ease-in-out duration-500 -z-10"
      :class="[
        isActive
          ? 'transition ease-in-out duration-300 text-secondary translate-y-1 opacity-100'
          : '-translate-y-12 opacity-0 ',
      ]"
    >
      <ul
        class="flex w-full ml-8 my-2 justify-around items-center text-primary text-xs md:text-lg"
      >
        <li class="flex">
          <button
            class="transition ease-in-out duration-500"
            :class="[activeLink === 'home' ? 'bg-green-500' : '']"
            @click.prevent="scroll('home')"
          >
            home
          </button>
        </li>
        <li class="flex">
          <button
            class="transition ease-in-out duration-500 delay-100"
            :class="[activeLink === 'about' ? 'bg-green-500' : '']"
            @click.prevent="scroll('about')"
          >
            about
          </button>
        </li>
        <li class="flex">
          <button
            class="transition ease-in-out duration-500 delay-200"
            :class="[activeLink === 'projects' ? 'bg-green-500' : '']"
            @click.prevent="scroll('projects')"
          >
            projects
          </button>
        </li>
        <li class="flex">
          <button
            class="transition ease-in-out duration-500 delay-300"
            :class="[activeLink === 'contacts' ? 'bg-green-500' : '']"
            @click.prevent="scroll('contacts')"
          >
            Contacts
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isActive: false,
    };
  },
  props: ["activeLink"],
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;
      console.log(this.activeLink);
    },
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
