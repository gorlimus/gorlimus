<template>
  <div
    id="about"
    class="h-screen flex md:flex-row justify-center md:justify-center items-center snap-center select-none"
  >
    <img
      class="hidden object-cover lg:flex lg:w-2/6 max-w-lg mx-4 rounded-full"
      src="@/assets/images/me.jpeg"
    />

    <div
      class="flex flex-col h-full max-w-xl lg:w-4/6 px-8 z-10 overflow-y-scroll items-center py-16 scrollbar-hide"
    >
      <p class="text-center lg:text-left text-primary">
        Hi! My name is Vladimir Heifetz and I'm a Fullstack Developer with a
        marketing background. I've spent the last 8 years creating and filming
        commercials for well known brands such as
        <span> P&G</span>, <span> NYX</span>, <span> Alpro</span>,<span>
          Colin's
        </span>
        and etc.<span>
          I've helped dozens of companies to create content and increase their
          sales!
        </span>
        Most recently, I led Alpro's advertising campaign as Commercial Director
        / Creative Producer.
        <a href="https://vimeo.com/gorlimus">
          <icon-vimeo
            class="h-10 inline justify-self-center self-center fill-vimeo hover:fill-primary bg-primary hover:bg-vimeo rounded-full transition-all duration-300 scale-75"
          />
        </a>
      </p>
      <br />

      <p class="text-center lg:text-left text-primary">
        But during covid, I started to learn
        <icon-sharp class="h-6 inline" /> for fun, but it dragged me so deep
        that I spent all my free time coding so eventually I decided to make it
        my primary work. For now I've developed a couple of WebApp Projects and
        a few personal websites.
        <a href="https://github.com/gorlimus">
          <icon-git-hub
            class="h-10 inline justify-self-center self-center fill-primary hover:fill-black hover:bg-primary rounded-3xl transition-all duration-300 scale-75"
          />
        </a>
        <br />
        <br />
        I successfully completed two bootcamps:
        <span>"WebDev 2022"</span> by Colt Steele and
        <span>"Vue Developer 2023"</span> on ZTM. I especially fell in love with
        <icon-vue class="w-6 h-6 inline-block" /> and
        <icon-vite class="w-6 h-6 inline-block" /> for their convenience, ease
        of use and rich functionality. Everyday I keep on learning new
        technologies and concepts.
        <br />
        <br />
        I've spent years figuring out the "formula" to communicating with
        audience through video content, and now
        <span>I want to create more interactive products</span>. And I'm really
        excited to apply my marketing expertise in WebDev.
      </p>
    </div>
  </div>
</template>
<script>
import IconVite from "@/assets/icons/IconVite.vue";
import IconVue from "@/assets/icons/IconVue.vue";
import IconVimeo from "@/assets/icons/IconVimeo.vue";
import IconGitHub from "@/assets/icons/IconGithub.vue";
import IconSharp from "@/assets/icons/IconSharp.vue";

export default {
  name: "AboutView",
  components: {
    IconVite,
    IconVue,
    IconVimeo,
    IconGitHub,
    IconSharp,
  },
};
</script>
