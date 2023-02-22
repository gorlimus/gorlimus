<template>
  <div
    class="my-10 project-gre md:max-w-2xl lg:max-w-lg flex flex-col justify-around items-center rounded-3xl bg-gradient-to-b from-slate-700"
  >
    <h3
      class="p-4 sm:p-4 md:p-2 lg:p-4 text-3xl sm:text-xl md:text-2xl lg:text-3xl text-center text-greAcc"
    >
      <slot name="title"></slot>
    </h3>
    <p class="px-10 text-md sm:text-sm md:text-lg lg:text-md">
      <slot name="description"></slot>
    </p>

    <ul
      class="grid object-left-bottom py-4 gap-y-4 gap-x-14 sm:gap-x-12 grid-cols-3 sm:grid-cols-6 sm:grid-rows-1 lg:grid-cols-3"
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
