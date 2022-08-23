<template>
  <footer class="card">
    <div class="card-body">
      <h3 class="card-header">Adresa</h3>
      <hr class="mb-1" />
      <address class="card-subtitle">
        Bolzanova 1, Praha 1 - Nové Město,
        <br />
        110 00 (kanceláře Freya z.s.)
      </address>
      <span class="card-text">IČO: 06753493</span>
    </div>
  </footer>
  <div class="copyright container">
    <a href="#" @click="$router.push('/')">www.psenicova.cz</a>
    <span>&copy Copyright {{ year }}</span>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  background-color: $dark-blue;
  font-family: $header-text;
  font-size: 0.85rem;
  color: white;
  padding: 1rem;
}

.copyright {
  width: 100%;
  height: 2rem;
  font-size: 0.9rem;
  font-family: $body-text;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $darkest-blue;
}
</style>
