<template>
  <div
    id="projects"
    class="flex h-screen items-center justify-center text-primary"
  >
    <button
      :class="[isActive ? 'off' : 'z-10 ver']"
      @click.prevent="toggleClass"
    >
      <h2 class="text-6xl">projects</h2>
    </button>

    <div
      :class="[isActive ? 'opacity' : ' scale-75 opacity-0 z-0']"
      class="flex py-10 flex-col h-screen justify-between items-center lg:justify-center lg:flex-row w-full max-h-fit overflow-y-auto transition-all duration-300 ease-linear"
    >
      <ItemProject>
        <template #title>Music Project</template>
        <template #description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          dicta quam magnam facere quas! Aut doloribus dignissimos aperiam, nam,
          neque asperiores aliquid, facere quia illo voluptatibus qui facilis!
          Error doloribus quas commodi saepe eum molestiae officia adipisci
          voluptate, excepturi nisi fugiat nihil, numquam quod nemo quos eaque
          id amet laudantium sit vero suscipit repellat mollitia. Voluptates,
          sequi voluptatum.
          <a
            class="bg-greAcc rounded-lg text-primary bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 text-sm ring-secondary ring-1"
            href="#"
          >
            GitHub
          </a>
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
        <template #title>YelpCamp Project</template>
        <template #description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          laboriosam praesentium dicta quam magnam facere quas! Aut doloribus
          dignissimos aperiam, nam, neque asperiores aliquid, facere quia illo
          voluptatibus qui facilis! Error doloribus quas commodi saepe eum
          molestiae officia adipisci voluptate, excepturi nisi fugiat nihil,
          numquam quod nemo quos eaque id amet laudantium sit vero suscipit
          repellat mollitia. Voluptates, sequi voluptatum.
          <a
            class="bg-greAcc rounded-lg text-primary bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 text-sm ring-secondary ring-1"
            href="#"
            >GitHub</a
          >
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
        <template #title>Personal Web</template>
        <template #description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          cupiditate tempora, aspernatur adipisci cumque facere nesciunt maxime
          itaque nihil possimus harum ea reiciendis excepturi voluptatibus
          eveniet eligendi sapiente est dignissimos. Quos, non! Rerum
          perspiciatis ab dolor maiores. Culpa quisquam autem saepe quibusdam,
          nulla nisi iste totam cupiditate, dicta esse quasi facilis dolorum
          pariatur, mollitia accusantium dolor recusandae illum explicabo!
          Rerum.
          <a
            class="bg-greAcc rounded-lg text-primary bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 text-sm ring-secondary ring-1"
            href="#"
            >GitHub</a
          >
        </template>

        <template #icon>
          <icon-html />
          <icon-tailwind />
          <icon-vue />
        </template>
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
  data: function () {
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
