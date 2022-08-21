<template>
  <main class="container-fluid">
    <TheNavbar />
    <router-view></router-view>
    <TheFooter />
  </main>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheFooter,
    TheNavbar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
main {
  margin: 0;
  padding: 0 !important;
  width: 100%;
}
</style>
