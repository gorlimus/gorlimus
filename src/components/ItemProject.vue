<template>
  <div
    class="flex project-gre md:py-8 my-80 flex-col w-full project-gre justify-between items-center rounded-3xl bg-gradient-to-b from-slate-700 snap-center"
  >
    <div class="mx-40 md:mx-56 sm:mx-80"></div>
    <h3 class="p-4 text-2xl md:text-3xl text-center text-greAcc">
      <slot name="title"></slot>
    </h3>
    <p class="px-10 text-sm">
      <slot name="description"></slot>
    </p>
    <ul class="flex flex-row p-4 w-full justify-around">
      <slot name="first-row"></slot>
    </ul>
    <ul class="flex flex-row p-4 w-full justify-around">
      <slot name="second-row"></slot>
    </ul>
  </div>
</template>
<script>
export default {
  name: "ProjectItem",
};
</script>
