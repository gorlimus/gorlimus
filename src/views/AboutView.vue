<template>
  <container
    id="about"
    class="h-screen py-10 md:py-0 flex md:flex-row justify-center md:justify-bottom lg:justify-center items-center"
  >
    <img
      class="hidden object-cover md:flex md:w-2/6 max-w-lg mx-4 rounded-full"
      @click.prevent="toggleClass"
      src="@/assets/images/me.jpeg"
    />

    <div
      class="flex flex-col pt-20 h-screen max-h-fit md:w-1/2 lg:justify-center md:pt-10 md:items-start lg:items-center px-8 z-10 overflow-y-scroll"
    >
      <p class="text-md md:text-left md:text-base text-primary">
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

      <router-link
        class="my-10 bg-greAcc w-fit self-center rounded-lg text-primary bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 text-sm ring-secondary ring-1"
        :to="{ name: 'projects' }"
      >
        go to projects
      </router-link>
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
