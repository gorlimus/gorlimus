<template>
  <div
    id="projects"
    class="flex h-screen flex-col items-center justify-center text-primary bg-green-900"
  >
    <button
      class="absolute"
      :class="[isActive ? 'off z-0' : 'ver']"
      @click.prevent="toggleClass"
    >
      <h2 class="text-6xl">projects</h2>
    </button>

    <div
      class="flex w-screen h-3/4 md:h-5/6 items-center snap-x overflow-scroll overscroll-contain snap-mandatory z-0 transition-all duration-700 scrollbar-hide bg-yellow-800"
      :class="[isActive ? 'opacity-100' : 'invisible z-0 scale-75  opacity-0']"
    >
      <ItemProject>
        <template #title
          >YelpCamp Project
          <a
            class="bg-greAcc rounded-lg text-primary bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 text-sm font-thin ring-secondary ring-1"
            href="#"
            >GitHub</a
          >
        </template>
        <template #description>
          I developed simple WebApp, where you can login/register and get/post
          info about places for camping. <br />
          For frontend I used <span>EJS</span> and <span>Bootstrap</span>.
          <br />
          For backend I used <span>NODE</span> with a lot of
          <span>NPM</span> packages such as <span>express</span> as main
          framework, <span>express-session</span> for state management,
          <span>connect-flash</span> for messages connected with session,
          <span>PASSPORT</span> for authentication/authorization,
          <span>helmet</span> to secure my app by setting various headers and a
          few more.
          <br />
          As DataBase I used <span>mongo DB</span>. and <span>Git</span> and
          <span>GitHub</span> as VCS. <br />
        </template>

        <template #icon>
          <icon-html />
          <icon-css />
          <icon-js />
          <icon-mongo />
          <icon-node />
          <icon-git />
        </template>
      </ItemProject>
      <ItemProject>
        <template #title
          >Music Project
          <a
            class="bg-greAcc rounded-lg text-primary bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 text-sm font-thin ring-secondary ring-1"
            href="#"
            >GitHub</a
          >
        </template>
        <template #description>
          I developed a simple music player with Vue.
        </template>

        <template #icon>
          <icon-vue />
          <icon-tailwind />
          <icon-pinia />
          <icon-firebase />
          <icon-vite />
          <icon-vercel />
        </template>
      </ItemProject>
      <ItemProject>
        <template #title
          >Personal SPA
          <a
            class="bg-greAcc rounded-lg text-primary bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 text-sm font-thin ring-secondary ring-1"
            href="#"
            >GitHub</a
          >
        </template>
        <template #description>
          I developed simple single page application as a portfolio site.
        </template>

        <template #icon>
          <icon-html />
          <icon-css />
          <icon-js />
          <icon-mongo />
          <icon-node />
          <icon-git />
        </template>
      </ItemProject>
    </div>
  </div>
</template>

<script>
import ItemProject from "@/components/ItemProject.vue";
import ItemTest from "@/components/ItemTest.vue";
import IconHtml from "@/assets/icons/IconHtml.vue";
import IconCss from "@/assets/icons/IconCss.vue";
import IconJs from "@/assets/icons/IconJS.vue";
import IconNode from "@/assets/icons/IconNode.vue";
import IconMongo from "@/assets/icons/IconMongo.vue";
import IconGit from "@/assets/icons/IconGit.vue";
import IconFirebase from "@/assets/icons/IconFirebase.vue";
import IconTailwind from "@/assets/icons/IconTailwind.vue";
import IconVercel from "@/assets/icons/IconVercel.vue";
import IconVite from "@/assets/icons/IconVite.vue";
import IconVue from "@/assets/icons/IconVue.vue";
import IconPinia from "@/assets/icons/IconPinia.vue";

export default {
  name: "ProjectsView",
  data: function () {
    return { isActive: false };
  },
  components: {
    ItemProject,
    ItemTest,
    IconHtml,
    IconCss,
    IconJs,
    IconNode,
    IconMongo,
    IconGit,
    IconFirebase,
    IconTailwind,
    IconVercel,
    IconVite,
    IconVue,
    IconPinia,
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
