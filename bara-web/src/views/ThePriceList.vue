<template>
  <section style="margin-top: 7rem">
    <div class="list-group">
      <div class="list-group-item p-3">
        <h3>Individuální konzultace</h3>
        <p>750 Kč / 50 minut</p>
      </div>
      <div class="list-group-item p-3">
        <h3>Párová konzultace</h3>
        <p>950 Kč / 50 minut</p>
      </div>
      <div class="list-group-item p-3">
        <h3>Skupinová supervize</h3>
        <p>1000 Kč / 60 minut</p>
      </div>
      <div class="list-group-item p-3">
        <h3>Konzultace s reflektujícím týmem</h3>
        <p>
          Po dohodě s Vámi mohu na konzultaci přizvat další odborníky, kteří po
          jeho skončení sdělí své postřehy. Mohou Vám tak nabídnout alternativní
          možnosti.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ThePriceList",
};
</script>

<style lang="scss" scoped>
section {
  max-width: 40rem;
  margin: 0 auto;
}

h3 {
  font-family: $header-text;
  font-size: 1.4rem;
  color: $contract-red;
}

p {
  font-family: $body-text;
  color: $darkest-blue;
  font-size: 1.2rem;
  margin-top: 0.5rem;
}
</style>
