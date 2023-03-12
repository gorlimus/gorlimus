<template>
  <div
    id="home"
    class="relative flex items-center justify-center w-full h-screen snap-center select-none"
  >
    <button
      class="absolute text-primary p-4 perspect hover:text-secondary transition-all"
      :class="[isActive ? 'text-secondary -translate-y-20' : '']"
      @click="toggleClass"
    >
      <h1 class="text-7xl md:text-8xl tracking-tight">gorlimus</h1>
    </button>
    <div
      class="flex justify-center w-screen transition-all duration-300 text-center relative bg-green-300"
      :class="[isActive ? '' : 'opacity-0 scale-0']"
    >
      <button
        class="hover:text-secondary text-primary font-thin transition-all duration-300 text-center absolute"
        @click="count"
        :class="[this.counter < 1 ? '' : 'opacity-0 scale-0']"
      >
        Hey!
      </button>
      <button
        class="hover:text-secondary text-primary font-thin transition-all duration-300 text-center absolute normal-case"
        @click="count"
        :class="[counter === 1 ? '' : 'opacity-0 scale-0']"
      >
        I'm Vova and I'm Frontend Developer
      </button>
      <button
        class="hover:text-secondary text-primary font-thin transition-all duration-300 text-center absolute normal-case"
        @click="count"
        :class="[counter === 2 ? '' : 'opacity-0 scale-0']"
      >
        Here you can find relevant inforamtion about my projects
      </button>

      <button
        class="hover:text-secondary text-primary font-thin transition-all duration-300 text-center absolute normal-case"
        :class="[this.counter >= 3 ? '' : 'opacity-0 scale-0']"
        @click="scroll('about')"
      >
        and me!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      isActive: false,
      counter: 0,
    };
  },
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        this.isActive = false;
      }, "1000");
    },

    toggleClass() {
      this.isActive = !this.isActive;
      this.counter = 0;
    },
    count() {
      this.counter++;
    },
  },
};
</script>
