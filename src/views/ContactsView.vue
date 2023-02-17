<template>
  <main id="contacts">
    <div class="w-full h-screen">
      <div class="flex justify-center items-center py-64">
        <h2 class="text-4xl tracking-tight text-primary">thank you</h2>
      </div>
      <div class="flex justify-evenly items-end">
        <i><icon-github /> </i>
        <i><icon-linkedin /> </i>
        <i><icon-vimeo /> </i>
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
