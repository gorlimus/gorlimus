<template>
  <div
    class="my-8 md:my-2 project-gre md:max-w-2xl lg:max-w-lg flex flex-col justify-around items-center rounded-3xl bg-gradient-to-b from-slate-700 snap-center"
  >
    <h3 class="p-4 text-2xl md:text-3xl text-center text-greAcc">
      <slot name="title"></slot>
    </h3>
    <p class="px-10 text-sm md:text-lg">
      <slot name="description"></slot>
    </p>
    <ul
      class="grid object-left-bottom py-4 gap-y-4 gap-x-14 md:gap-x-12 grid-cols-3 sm:grid-cols-6 sm:grid-rows-1 lg:grid-cols-3"
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
