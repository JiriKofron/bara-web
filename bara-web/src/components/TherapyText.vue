<template>
  <section id="services">
    <div
      class="d-flex flex-column align-items-center justify-content-center px-5 mt-5"
    >
      <p class="text-left">
        Pracuji nejčastěji individuálně, ale současně poskytuji oporu i párům v
        řešení jejich obtíží. Realizuji pro organizace skupinové i individuální
        supervize. Na konzultaci mám možnost přizvat odborníky a odbornice,
        kteří nám mohou společně pomoci rozšířit Vaše možnosti. Velmi si rozumím
        také s mladými lidmi, kteří mohou mít podobné starosti nebo přání jako
        dospělí. Nabízím jim prostor, kde budou vyslyšeni při svých cestách, ve
        kterých hledají oporu.
      </p>
    </div>
    <VueCarousel />
  </section>
</template>

<script>
import VueCarousel from "@/components/VueCarousel.vue";
export default {
  name: "TherapyText",
  components: { VueCarousel },
};
</script>

<style lang="scss" scoped>
p {
  font-family: $body-text;
  color: $darkest-blue;
  font-size: 1.4rem;
  margin: 1rem auto;
}
</style>
