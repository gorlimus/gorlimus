<template>
  <div
    class="xl:max-w-lg flex relative flex-col lg:max-w-lg h-full justify-between items-center rounded-3xl bg-gradient-to-b from-slate-700 snap-center my-32 lg:my-0"
  >
    <button
      class="fixed top-0 w-1/5 md:w-1/5 p-2 rounded-tr-3xl rounded-bl-3xl self-end text-primary text-center text-xs md:text-sm font-thin hover:opacity-100 bg-greAcc bg-opacity-20 hover:bg-opacity-40 transition-all"
    >
      <slot name="gitLink">github</slot>
    </button>
    <button
      class="fixed top-0 w-1/5 md:w-1/5 p-2 rounded-tl-3xl rounded-br-3xl self-start text-primary text-center text-xs md:text-sm font-thin hover:opacity-100 bg-greAcc bg-opacity-20 hover:bg-opacity-40 transition-all"
    >
      <slot name="vercelLink">demo</slot>
    </button>

    <h3 class="p-4 text-xl md:text-2xl text-center text-greAcc">
      <slot name="title"></slot>
    </h3>
    <p class="px-10 text-base">
      <slot name="description"></slot>
    </p>
    <div class="w-5/6 pb-4 flex flex-col sm:flex-row lg:flex-col">
      <ul class="flex flex-row p-4 w-full justify-around">
        <slot name="fe-row"></slot>
      </ul>
      <ul class="flex flex-row p-4 w-full justify-around">
        <slot name="be-row"></slot>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProjectItem",
};
</script>
