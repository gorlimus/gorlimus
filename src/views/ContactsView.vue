<template>
  <main id="contacts">
    <div
      class="relative flex py-10 flex-col h-screen justify-center items-center snap-center select-none"
    >
      <div class="w-5/6 max-w-lg h-2/3">
        <form
          action=""
          class="h-full flex flex-col justify-center items-center font-extralight text-center bg-gradient-to-b from-slate-700 rounded-2xl"
          @submit.prevent="sendEmail()"
        >
          <div class="w-full h-1/6 flex">
            <label
              for="email"
              class="bg-greAcc/20 h-full w-1/3 rounded-tl-2xl flex items-center justify-center text-primary uppercase text-sm"
              >email</label
            >
            <input
              id="email"
              class="h-full w-2/3 appearance-none bg-transparent p-2 rounded-tr-2xl focus:outline-none transition-all duration-300 border-2 border-greAcc/20 placeholder:text-greAcc focus:placeholder:text-secondary focus:z-10 text-greAcc"
              type="email"
              v-model="email"
              placeholder="Enter your Email"
            />
          </div>

          <div class="w-full h-4/6">
            <textarea
              class="h-full w-full appearance-none bg-transparent p-2 focus:outline-none caret-secondary resize-none transition-all border-x-2 border-greAcc/20 duration-300 placeholder:text-greAcc focus:placeholder:text-secondary focus:z-10 text-greAcc"
              type="textarea"
              v-model="message"
              placeholder="Enter Your Message"
            ></textarea>
          </div>

          <button
            class="text-primary w-full h-1/6 rounded-b-2xl hover:text-secondary transition-all duration-300 border-2 border-greAcc/20 active:text-primary active:bg-greAcc/20 disabled:bg-greAcc/20 disabled:text-primary/20"
            :disabled="this.in_submission"
            type="submit"
          >
            submit
          </button>
        </form>
      </div>

      <div
        class="absolute bottom-10 flex w-full justify-evenly place-items-end"
      >
        <a href="https://github.com/gorlimus" class="hover:fill-primary">
          <i
            ><icon-github
              class="fill-primary hover:bg-black hover:scale-125 transition-all duration-300 rounded-full"
          /></i>
        </a>
        <a href="https://www.linkedin.com/in/gorlimus/">
          <i
            ><icon-linkedin
              class="fill-primary hover:bg-[#0077b5] hover:scale-125 transition-all duration-300 rounded-full"
          /></i>
        </a>
        <a href="https://vimeo.com/gorlimus">
          <i
            ><icon-vimeo
              class="fill-primary hover:bg-vimeo rounded-full transition-all duration-300 hover:scale-125"
          /></i>
        </a>
      </div>
    </div>
  </main>
</template>
<script>
import IconLinkedin from "@/assets/icons/IconLinkedin.vue";
import IconGithub from "@/assets/icons/IconGithub.vue";
import IconVimeo from "@/assets/icons/IconVimeo.vue";
import smtp from "@/includes/smtp.js";

export default {
  name: "ContactsView",
  data() {
    return {
      email: "",
      subject: "",
      message: "",
      in_submission: false,
    };
  },
  components: {
    IconLinkedin,
    IconGithub,
    IconVimeo,
  },
  methods: {
    sendEmail() {
      console.log(this.in_submission);
      smtp.Email.send({
        SecureToken: "e4a60bd6-904a-4a81-9278-bad8b95012a1",
        To: "VovaHeifetz@gmail.com",
        From: "gorlimus@gmail.com",
        Subject: this.email,
        Body: `
          From: ${this.email}
          Body: ${this.message}`,
      }).then((message) => alert(message));

      this.in_submission = true;
      console.log(this.in_submission);
    },
  },
};
</script>
