<template>
  <TheMobileView v-if="mobile" />
  <TheDesktopView v-else />
</template>

<script>
import TheMobileView from "./TheMobileView.vue";
import TheDesktopView from "./TheDesktopView.vue";
export default {
  name: "TheHome",
  components: { TheDesktopView, TheMobileView },
  data() {
    return {
      mobile: false,
    };
  },
};
</script>

<style scoped></style>
