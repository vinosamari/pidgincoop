<template>
  <main>
    <div
      class="rounded-full shadow-lg p-8 m-5 h-auto px-12 flex flex-col justify-center items-center"
    >
      <img src="~/static/icon.png" alt="" class="h-24" />
      <p class="logoText text-xl">PidginCoop</p>
    </div>
    <faux-nav></faux-nav>
    <h1 class="hidden md:block">
      Welcome to our Nigerian Pidgin translation project! We're building a
      cutting-edge machine learning model that can translate English to Nigerian
      Pidgin with remarkable accuracy.
    </h1>
    <h1 class="md:hidden block">
      Welcome to our Nigerian Pidgin translation project! We're creating a
      state-of-the-art model that accurately translates English to Nigerian
      Pidgin.
    </h1>
    <h2 class="hidden md:block">
      But we can't do it alone. That's where you come in. We need your help to
      train our model with natural, real-life translations that capture the
      richness and diversity of Nigerian Pidgin. By contributing your
      translations to our platform, you'll be playing a crucial role in
      improving our model's accuracy and helping to bridge the language barrier
      between English and Nigerian Pidgin speakers. It's easy to get started.
      Simply submit your translations using our intuitive and user-friendly
      form. We encourage you to add variations to the same query to capture the
      many nuances of Nigerian Pidgin. And if you're feeling lucky, sign up with
      your email and win gifts and vouchers as you translate! So what are you
      waiting for? Join our community of language enthusiasts and be part of the
      solution. Help us build a better, more inclusive world, one translation at
      a time. Submit your Nigerian Pidgin translations now!
    </h2>
    <h2 class="md:hidden block">
      We need your help to improve our Nigerian Pidgin translation model. By
      contributing your real-life translations, you'll be playing a crucial role
      in bridging the language barrier between English and Nigerian Pidgin
      speakers. Submit your translations using our intuitive and user-friendly
      form. Add variations to the same query to capture the many nuances of
      Nigerian Pidgin. Sign up with your email and win gifts and vouchers as you
      translate! Join our community of language enthusiasts and be part of the
      solution. Help us build a more inclusive world, one translation at a time.
      Submit your Nigerian Pidgin translations now!
    </h2>
    <section>
      <h3>
        Question: <br class="md:hidden block" />
        <span>{{ unanswered }}</span>
      </h3>
      <div>
        <h3>
          Translation:
          <span
            ><input
              type="text"
              v-model="translation1"
              placeholder="Talk am for pidgin."
          /></span>
        </h3>
        <button v-if="!hasVariations" class="md:inline-block">
          Submit Translation
        </button>
      </div>
      <button @click="hasVariations = !hasVariations" v-if="!hasVariations">
        Add Variation
      </button>
      <button v-if="hasVariations">Add translation</button>
      <button v-if="hasVariations" @click="hasVariations = !hasVariations">
        Next
      </button>
    </section>
  </main>
</template>

<script>
import FauxNav from "~/components/FauxNav.vue";
export default {
  components: { FauxNav },
  name: "IndexPage",
  data() {
    return {
      translation1: "",
      hasVariations: false,
    };
  },
  mounted() {
    let localTranslations = localStorage.getItem("localStorageTranslations");
    if (!localTranslations) {
      this.$store.dispatch("getDbTranslations");
    } else {
      this.$store.commit(
        "SET_TRANSLATIONS_LIST",
        JSON.parse(localTranslations)
      );
    }
  },
  computed: {
    unanswered() {
      return this.$store.getters.getRandomUnansweredQuestion;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merienda:wght@300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Yeseva+One&display=swap");
main {
  font-family: "Josefin Sans";
  @apply bg-gradient-to-br from-teal-300 to-cyan-300 min-h-screen text-center p-5 text-teal-900 flex flex-col items-center pt-10;
}
.logoText {
  font-family: "Yeseva One";
  @apply text-teal-800;
}
h1 {
  @apply text-3xl capitalize tracking-widest font-bold my-2;
}
h2 {
  @apply text-xl tracking-tighter my-2;
}
h3 {
  @apply my-3 text-lg md:text-xl capitalize;
}
section {
  @apply my-4 shadow-md rounded-md mx-auto w-3/4 p-5 text-center flex flex-col justify-center items-center;
}
input {
  @apply px-5 py-2 rounded-md shadow-md;
}
button {
  @apply bg-teal-700 text-teal-50 font-bold px-4 py-2 rounded-md shadow-lg shadow-teal-200 hover:cursor-pointer hover:shadow-2xl hover:bg-white hover:text-teal-800 transform transition-all duration-300 ease-in-out my-2;
}
h3 span {
  @apply font-bold tracking-wider text-lg md:text-xl;
}
section div {
  @apply md:flex gap-2 items-center;
}
</style>
