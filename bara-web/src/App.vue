<template>
  <main class="container-fluid">
    <TheNavbar />
    <router-view></router-view>
  </main>
  <TheFooter />
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
#app {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

main {
  margin: 0;
  padding: 0 !important;
  width: 100%;
}
</style>
