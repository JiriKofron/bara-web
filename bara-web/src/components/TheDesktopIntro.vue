<template>
  <section>
    <img class="hero__img" src="/D3P_portrety_2021_web-17.webp" />

    <div class="hero">
      <div class="hero__headline">
        <h1>terapeutka | konzultantka</h1>
      </div>

      <div class="hero__text my-3">
        <h2>
          Hledáte ve své situaci oporu, pochopení a respekt? Velmi ráda vám je
          nabídnu.
        </h2>
      </div>
      <ContactButton />
    </div>
  </section>
</template>

<script>
import ContactButton from "@/components/ContactButton.vue";
export default {
  name: "TheDesktopIntro",
  components: { ContactButton },
};
</script>

<style lang="scss" scoped>
section {
  height: 90vh;
  margin: 6rem 0 0 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5rem;

    &__img {
      transform: scale(1.2);
      margin-left: 2rem;
    }

    &__headline {
      font-family: $header-text;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        font-size: 4rem;
        color: $darkest-blue;
      }
    }

    &__text {
      font-family: $header-text;
      max-width: 30rem;
      opacity: 0.6;

      h2 {
        font-size: 1.5rem;
        font-weight: 200;
        color: $darkest-blue;
      }
    }
  }
}
</style>
