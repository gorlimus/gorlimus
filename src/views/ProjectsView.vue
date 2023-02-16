<template>
  <main id="projects">
    <div class="flex items-center justify-center w-full h-screen text-primary">
      <button
        :class="[isActive ? 'off' : 'hor z-10']"
        @click.prevent="toggleClass"
      >
        <h2 class="text-6xl">projects</h2>
      </button>
      <div
        :class="[isActive ? 'opacity' : 'scale-75 opacity-0 z-0']"
        class="flex flex-row w-5/6 h-4/5 justify-around gap-10 transition ease-in-out duration-700"
      >
        <div
          class="project-gre flex flex-col items-center rounded-3xl bg-gradient-to-b from-slate-700"
        >
          <h3 class="p-8 text-3xl text-center text-greAcc">Music Project</h3>
          <p class="px-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            alias, possimus eos perspiciatis praesentium maiores necessitatibus
            illo quis deserunt nisi cumque nesciunt repudiandae, iure totam
            ullam maxime, reiciendis corporis nemo. Saepe consequuntur quos
            aspernatur autem esse mollitia eius? Et corrupti quisquam nobis ut
            vel similique quam earum sapiente cumque repellendus, unde aperiam
            assumenda quasi laborum illum exercitationem. Reiciendis, distinctio
            sed?
          </p>
          <ul
            class="grid py-12 gap-y-4 gap-x-20 grid-cols-3 grid-rows-2 text-center"
          >
            <i class=""><icon-vue /></i>
            <i class=""><icon-tailwind /></i>
            <i class=""><icon-firebase /></i>
            <i class=""><icon-vite /></i>
            <i class=""><icon-vercel /></i>
            <i class=""><icon-pinia /></i>
          </ul>
        </div>
        <div
          class="project-yel flex flex-col items-center rounded-3xl bg-gradient-to-b from-slate-700"
        >
          <h3 class="p-8 text-3xl text-center text-yelAcc">YelpCamp Project</h3>
          <p class="px-12 text-primary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            alias, possimus eos perspiciatis praesentium maiores necessitatibus
            illo quis deserunt nisi cumque nesciunt repudiandae, iure totam
            ullam maxime, reiciendis corporis nemo. Saepe consequuntur quos
            aspernatur autem esse mollitia eius? Et corrupti quisquam nobis ut
            vel similique quam earum sapiente cumque repellendus, unde aperiam
            assumenda quasi laborum illum exercitationem. Reiciendis, distinctio
            sed?
          </p>
          <ul
            class="grid py-12 gap-y-4 gap-x-20 grid-cols-3 grid-rows-2 text-center"
          >
            <i class=""><icon-html /></i>
            <i class=""><icon-css /></i>
            <i class=""><icon-js /></i>
            <i class=""><icon-node /></i>
            <i class=""><icon-mongo /></i>
            <i class=""><icon-git /></i>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
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
