<template>
  <div class="dektop">
    <TheDesktopIntro />
    <section class="mt-5">
      <TherapyIntro />
    </section>

    <WorkTiles />

    <section>
      <TherapyText />
      <TheCodex />
    </section>
  </div>
</template>

<script>
import TheDesktopIntro from "@/components/TheDesktopIntro.vue";
import TherapyIntro from "@/components/TherapyIntro.vue";
import WorkTiles from "@/components/WorkTiles.vue";
import TherapyText from "@/components/TherapyText.vue";
import TheCodex from "@/components/TheCodex.vue";
import VueCarousel from "@/components/VueCarousel.vue";

export default {
  name: "TheDesktopView",
  components: {
    VueCarousel,
    TheDesktopIntro,
    TherapyIntro,
    WorkTiles,
    TherapyText,
    TheCodex,
  },
};
</script>

<style lang="scss" scoped>
.desktop {
  &__carintro {
    display: flex;
    justify-content: space-evenly;
    margin-top: 4rem;
  }
}
</style>
