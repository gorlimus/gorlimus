<template>
  <main id="about">
    <div class="flex relative w-full h-screen items-center justify-center">
      <div
        class="absolute h-4/6 z-10 transition ease-in-out duration-700"
        :class="[isActive ? 'translate-x-1/2 scale-90' : '']"
        @click.prevent="toggleClass"
      >
        <img
          src="@/assets/images/me.jpeg"
          class="ab object-cover h-full rounded-full"
        />
      </div>

      <div
        class="w-1/2 h-4/6 transition ease-in-out duration-700 z-0 pl-20 py-6"
        :class="[isActive ? '-translate-x-1/2' : 'opacity-0']"
      >
        <p class="text-left text-md leading-6 text-primary">
          Hi! I'm Vova. I'm a developer with a serious love for filming. I've
          spent the last few years filming commercials for brands at 10+
          different production houses and creative agencies where
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
          I’ve since focused my time on bringing my classroom teaching
          experience to an online environment. In 2016 I launched my Web
          Developer Bootcamp course, which has since gone on to become one of
          the best selling and top rated courses on Udemy. I was also voted
          Udemy’s Best New Instructor of 2016.
          <br />
          I've spent years figuring out the "formula" to communicating with
          audience in my commercials, and I'm really excited to finally apply my
          expertise in WebDev. I can confidently say that my marketing
          experience are without a doubt the most useful ones in application
          development.
        </p>
      </div>
    </div>
  </main>
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
