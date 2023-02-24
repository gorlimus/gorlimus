<template>
  <div
    class="flex h-full mx-40 flex-col w-screen project-gre justify-between items-center rounded-3xl bg-gradient-to-b from-slate-700 snap-center"
  >
    <div class="mx-40 md:mx-96 sm:mx-80"></div>
    <h3 class="p-4 text-2xl md:text-3xl text-center text-greAcc">
      <slot name="title"></slot>
    </h3>
    <p class="px-10 text-sm md:text-base">
      <slot name="description"></slot>
    </p>
    <ul
      class="grid py-4 gap-4 md:gap-x-12 grid-cols-3 sm:grid-cols-6 sm:grid-rows-1 lg:grid-cols-3"
    >
      <slot name="icon"></slot>
    </ul>
  </div>
</template>
<script>
export default {
  name: "ProjectItem",
};
</script>
