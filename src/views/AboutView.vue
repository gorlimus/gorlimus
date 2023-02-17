<template>
  <container
    id="about"
    class="h-auto flex flex-col md:flex-row-reverse justify-center items-center"
  >
    <div
      class="flex h-1/2 w-1/2 md:w-1/2 mt-10 translate-y-1/2 md:-translate-x-1/2 md:translate-y-0 justify-center items-center transition ease-in-out duration-700 z-10"
      :class="[
        isActive
          ? 'md:translate-x-1 md:translate-y-0 translate-y-0 scale-90'
          : '',
      ]"
    >
      <img
        class="ab object-cover w-max-2xl rounded-full hover:scale-105 transition ease-in-out duration-700"
        @click.prevent="toggleClass"
        src="@/assets/images/me.jpeg"
      />
    </div>

    <div
      class="w-5/6 md:w-1/2 -translate-y-10 transition ease-in-out duration-700 delay-75 z-10"
      :class="[isActive ? 'visible opacity-100' : 'invisible opacity-0']"
    >
      <p class="text-left text-sm md:text-xs text-primary">
        Hi! I'm Vova. I'm a developer with a serious love for filming. I've
        spent the last few years filming commercials for brands at 10+ different
        production houses and creative agencies where
        <span>
          I've helped hundreds of people create content and increase their
          sales. </span
        >My commercials were created for companies like P&G, NYX and Colin's.
        Most recently, I led Alpro's advertising campaign as Lead Director and
        Creative Producer.
        <br />
        After relocating to <span>Tel-Aviv</span>, I've decided to become a
        digital nomad, so I studied Web Development in depth, and specifically
        Vue, to find a full-time job as web-developer. I also developed a few
        pet-projects with <span>JS/Bootstrap/Node/MongoDB</span> and
        <span>/Tailwind/Firebase</span>.<br />
        I’ve since focused my time on bringing my classroom teaching experience
        to an online environment. In 2016 I launched my Web Developer Bootcamp
        course, which has since gone on to become one of the best selling and
        top rated courses on Udemy. I was also voted Udemy’s Best New Instructor
        of 2016.
        <br />
        I've spent years figuring out the "formula" to communicating with
        audience in my commercials, and I'm really excited to finally apply my
        expertise in WebDev. I can confidently say that my marketing experience
        are without a doubt the most useful ones in application development.
      </p>
    </div>
  </container>
</template>
<script>
export default {
  name: "AboutView",
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
