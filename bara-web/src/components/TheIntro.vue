<template>
  <section>
    <div class="hero">
      <img class="hero__img" src="/D3P_portrety_2021_web-16-v6.webp" />
      <div class="hero__headline">
        <h1>
          terapeutka <span class="hero__headline--dark">konzultantka</span>
        </h1>
      </div>

      <div class="hero__text my-3">
        <h2 class="text-center">
          Hledáte ve své situaci oporu, pochopení a respekt? Velmi ráda vám je
          nabídnu.
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheIntro",
};
</script>

<style lang="scss" scoped>
section {
  height: 100%;
  max-height: 55rem;
  margin: 6rem 0 0 0;
  position: relative;
  display: flex;
  justify-content: center;
}

.hero {
  max-width: 25rem;
  display: flex;
  flex-direction: column;

  &::before {
    background-color: #555;
    box-shadow: 0 0 30px 50px #555;
  }

  &__img {
    width: 100%;
    z-index: 1;
  }

  &__headline {
    width: 100%;
    margin-top: -3.5rem;
    color: white;
    z-index: 1000;
    display: flex;
    justify-content: center;

    &--dark {
      color: $darkest-blue;
    }

    h1 {
      font-family: $header-text;
      text-align: center;
      font-size: 2.5rem;
      line-height: 3.5rem;
    }
  }

  &__text {
    font-family: $body-text;
    color: $darkest-blue;
  }
}
</style>
