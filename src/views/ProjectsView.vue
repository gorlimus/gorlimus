<template>
  <div
    id="projects"
    class="relative flex h-screen items-center justify-center text-primary snap-center"
  >
    <div
      class="flex justify-between max-w-3xl lg:max-w-md h-screen items-center snap-x snap-mandatory snap-always overflow-x-scroll transition-all duration-300 scrollbar-hide"
    >
      <ItemProject>
        <template #title>Music Project </template>
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

        <template #first-row>
          <icon-vue />
          <icon-tailwind />
          <icon-pinia />
        </template>
        <template #second-row>
          <icon-vite />
          <icon-firebase />
          <icon-vercel />
        </template>
        <template #gitLink>
          <a href="https://github.com/gorlimus/music">GitHub</a></template
        >
        <template #vercelLink> <a href="#">demo</a></template>
      </ItemProject>
      <ItemProject>
        <template #title>YelpCamp Project </template>
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

        <template #first-row>
          <icon-html />
          <icon-css />
          <icon-js />
        </template>
        <template #second-row>
          <icon-node />
          <icon-mongo />
          <icon-git />
        </template>
        <template #gitLink>
          <a href="https://github.com/gorlimus/Camp">GitHub</a></template
        >
        <template #vercelLink> <a href="#">demo</a></template>
      </ItemProject>
      <ItemProject>
        <template #title>Personal SPA </template>
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

        <template #first-row>
          <icon-html />
          <icon-css />
          <icon-js />
        </template>
        <template #gitLink> <a href="#">GitHub</a></template>
        <template #vercelLink> <a href="#">demo</a></template>
      </ItemProject>
    </div>
  </div>
</template>

<script>
import ItemProject from "@/components/ItemProject.vue";

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
  data() {
    return { isActive: false };
  },
  components: {
    ItemProject,
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
