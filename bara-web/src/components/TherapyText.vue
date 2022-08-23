<template>
  <section id="services" class="services">
    <div
      class="d-flex flex-column align-items-center justify-content-center px-5 mt-5 services__text"
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
    <div class="services__carousel">
      <VueCarousel />
    </div>
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
.services {
  @include lg {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    &__carousel {
      margin-top: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid $contract-red;
      border-radius: 1rem;
    }

    &__text,
    &__carousel {
      width: 50%;
    }
  }
}

p {
  font-family: $body-text;
  color: $darkest-blue;
  font-size: 1.4rem;
  margin: 1rem auto;
}
</style>
