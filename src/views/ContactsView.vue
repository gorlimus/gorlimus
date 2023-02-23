<template>
  <main id="contacts">
    <div class="flex py-10 flex-col h-screen justify-between items-center">
      <span class=""></span>
      <h2 class="text-4xl tracking-tight text-primary text-center">
        thank you and good luck
      </h2>
      <div class="flex w-full justify-evenly place-items-end">
        <a href="https://github.com/gorlimus" class="hover:fill-primary">
          <i><icon-github /></i>
        </a>
        <a href="https://www.linkedin.com/in/gorlimus/">
          <i><icon-linkedin /></i>
        </a>
        <a href="https://vimeo.com/gorlimus">
          <i><icon-vimeo /></i>
        </a>
      </div>
    </div>
  </main>
</template>
<script>
import IconLinkedin from "@/assets/icons/IconLinkedin.vue";
import IconGithub from "@/assets/icons/IconGithub.vue";
import IconVimeo from "@/assets/icons/IconVimeo.vue";
export default {
  name: "ContactsView",
  components: {
    IconLinkedin,
    IconGithub,
    IconVimeo,
  },
};
</script>
