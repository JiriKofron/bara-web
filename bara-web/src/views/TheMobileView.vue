<template>
  <TheIntro />
  <ContactButton />
  <TherapyIntro />
  <WorkTiles />
  <TherapyText />
  <TheCodex />
</template>

<script>
import TheIntro from "@/components/TheIntro.vue";
import ContactButton from "@/components/ContactButton.vue";
import TherapyIntro from "@/components/TherapyIntro.vue";
import WorkTiles from "@/components/WorkTiles.vue";
import TherapyText from "@/components/TherapyText.vue";
import TheCodex from "@/components/TheCodex.vue";

export default {
  name: "TheMobileView",
  components: {
    TheCodex,
    TheIntro,
    ContactButton,
    TherapyIntro,
    WorkTiles,
    TherapyText,
  },
};
</script>

<style scoped></style>
