<template>
  <div
    id="projects"
    class="relative flex h-screen items-center justify-center text-primary snap-center select-none"
  >
    <div
      class="flex flex-col h-screen lg:h-5/6 lg:flex-row justify-between items-center overflow-y-scroll transition-all duration-300 scrollbar-hide lg:py-0"
    >
      <ItemProject class="project-gre">
        <template #title>My Music</template>
        <template #description>
          I built a Full Stack Music Player Application using
          <span class="text-greAcc">Vue</span> and
          <span class="text-greAcc">Vite</span>, solely for educational and
          learning purposes. This project allowed me to improve my skills in
          creating fast and dynamic web apps and dive deeper into modern
          technologies.
          <br />
          <br />
          <ul>
            <li>CRUD, Auth, Routing, State Management</li>
            <li>Upload and listen to music, leave and sort comments</li>
            <li>Internationalization</li>
            <li>Progressive Web Application</li>
            <li>Testing</li>
          </ul>
        </template>

        <template #fe-row>
          <icon-vue />
          <icon-tailwind />
          <icon-pinia />
        </template>
        <template #be-row>
          <icon-vite />
          <icon-firebase />
          <icon-vitest />
        </template>
        <template #gitLink>
          <a href="https://github.com/gorlimus/music">GitHub</a></template
        >
        <template #vercelLink>
          <a href="https://music-seven-rosy.vercel.app/">demo</a></template
        >
      </ItemProject>
      <ItemProject class="project-yel">
        <template #title><span class="text-yelAcc">My Camp</span></template>
        <template #description>
          I built a Full Stack Booking Camp Application using
          <span class="text-yelAcc"> JS</span>
          and
          <span class="text-yelAcc">Express</span>, solely for educational and
          learning purposes. This project allowed me to improve my skills in
          creating fast and dynamic web apps and dive deeper into modern
          technologies.
          <br />
          <br />

          <ul class="">
            <li>CRUD, Auth, Routing, State Management</li>
            <li>Upload images, leave comments and ratings.</li>
            <li></li>
            <li></li>
          </ul>
        </template>

        <template #fe-row>
          <icon-html />
          <icon-css />
          <icon-js />
        </template>
        <template #be-row>
          <icon-node />
          <icon-mongo />
          <icon-git />
        </template>
        <template #gitLink>
          <a href="https://github.com/gorlimus/Camp">GitHub</a></template
        >
        <template #vercelLink>
          <a href="https://my-camp-lm8f3fxfs-gorlimus.vercel.app/"
            >demo</a
          ></template
        >
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

import IconVite from "@/assets/icons/IconVite.vue";
import IconVue from "@/assets/icons/IconVue.vue";
import IconPinia from "@/assets/icons/IconPinia.vue";
import IconVitest from "@/assets/icons/IconVitest.vue";

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

    IconVite,
    IconVue,
    IconPinia,
    IconVitest,
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
