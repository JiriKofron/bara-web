<template>
  <footer class="card">
    <div class="card-body container">
      <h3 class="card-header">Adresa</h3>
      <hr class="mb-1" />
      <address class="card-subtitle">
        Bolzanova 1, Praha 1 - Nové Město,
        <br />
        110 00 (kanceláře Freya z.s.)
      </address>
      <span class="card-text">IČO: 06753493</span>
    </div>
    <div class="copyright container-fluid">
      <a href="#" @click="$router.push('/')">www.psenicova.cz</a>
      <span>&copy Copyright {{ year }}</span>
    </div>
  </footer>
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
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: $dark-blue;
  font-family: $header-text;
  font-size: 0.85rem;
  color: white;
}

.copyright {
  width: 100%;
  padding: 0 1rem;
  margin: 0;
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
