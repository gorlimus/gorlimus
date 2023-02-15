<template>
  <main id="projects">
    <div
      class="flex flex-col items-center justify-center w-full h-screen text-primary"
      :class="[isActive ? 'py-12 gap-10' : 'justify-center']"
    >
      <button
        :class="[isActive ? 'hidden' : 'ver']"
        @click.prevent="toggleClass"
      >
        <h2 class="text-6xl">projects</h2>
      </button>
      <div
        v-if="isActive"
        class="flex flex-row w-5/6 h-4/5 justify-around gap-10"
      >
        <div
          class="project-gre flex flex-col items-center rounded-3xl bg-slate-700"
        >
          <h3 class="p-4 text-3xl text-center text-greAcc">Music Project</h3>
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
            class="grid py-16 gap-y-4 gap-x-20 grid-cols-3 grid-rows-3 text-center"
          >
            <li>vue3</li>
            <li>tailwind</li>
            <li>firebase</li>
            <li>pinia</li>
            <li>vroutes</li>
            <li>i18n</li>
            <li>PWA</li>
            <li>VERCEL</li>
            <li>Vitest</li>
          </ul>
        </div>
        <div
          class="project-yel flex flex-col items-center rounded-3xl bg-slate-700"
        >
          <h3 class="p-4 text-3xl text-center text-yelAcc">YelpCamp Project</h3>
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
            class="grid py-16 gap-y-4 gap-x-20 grid-cols-3 grid-rows-2 text-center"
          >
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>NODE</li>
            <li>MONGO</li>
            <li>restfulapi</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ProjectsView",
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
