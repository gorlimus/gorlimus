<template>
  <div
    id="projects"
    class="relative flex h-screen items-center justify-center text-primary snap-center"
  >
    <div
      class="flex flex-col h-screen lg:h-5/6 lg:flex-row justify-between items-center overflow-y-scroll overflow-auto transition-all duration-300 scrollbar-hide lg:py-0"
    >
      <ItemProject>
        <template #title>My Music</template>
        <template #description>
          This a simple WebApp, where you can login/register and
          get/post/edit/delete information about places for camping. Also you
          can upload images, leave comments and ratings. <br />
          <br />
          All data is stored in MongoDB and everything is connected with help of
          express. I used different NPM modules for state management,
          authentication / authorization, basic security.

          <br />
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
        <template #vercelLink>
          <a href="https://music-seven-rosy.vercel.app/">demo</a></template
        >
      </ItemProject>
      <ItemProject>
        <template #title>My Camp</template>
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
    </div>
  </div>
</template>

<script>
import ItemProject from "@/components/ItemProject.vue";

import IconJs from "@/assets/icons/IconJs.vue";
import IconHtml from "@/assets/icons/IconHtml.vue";
import IconCss from "@/assets/icons/IconCss.vue";
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
