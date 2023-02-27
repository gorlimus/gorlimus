<template>
  <div
    class="flex relative project-gre flex-col w-full project-gre justify-between items-center rounded-3xl bg-gradient-to-b from-slate-700 snap-center"
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

    <button
      class="absolute w-1/6 p-2 rounded-tr-3xl rounded-bl-3xl self-end text-primary text-center text-xs md:text-sm font-thin hover:opacity-100 bg-greAcc bg-opacity-20 hover:bg-opacity-40 transition-all"
    >
      <slot name="gitLink">github</slot>
    </button>
    <button
      class="absolute w-1/6 p-2 rounded-tl-3xl rounded-br-3xl self-start text-primary text-center text-xs md:text-sm font-thin hover:opacity-100 bg-greAcc bg-opacity-20 hover:bg-opacity-40 transition-all"
    >
      <slot name="vercelLink">demo</slot>
    </button>
  </div>
</template>
<script>
export default {
  name: "ProjectItem",
};
</script>
