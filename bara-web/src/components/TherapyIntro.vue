<template>
  <section id="about">
    <div
      class="d-flex flex-column align-items-center justify-content-center px-5 mt-5 intro__text"
    >
      <p class="text-left">
        Na terapii můžete přijít s různými potížemi, se kterými si nevíte rady a
        v situacích, kdy potřebujete podpořit. Můj terapeutický přístup je velmi
        individuální a záleží i na vás samotných, jak budeme postupovat.
        Důležité je, abyste přicházeli s vlastní potřebou změny. Nenabízím návod
        na lepší žití nebo radu, jak si například lépe vybrat, ale prostor plný
        podpory, pochopení a respektu při hledání odpovědí na Vaše otázky.
      </p>
      <p class="text-left">
        Jsem velkou zastánkyní myšlenek, které mají vysoké morální ambice a
        zakládají se na pomoci ohroženým skupinám. Ve volném čase jsem nadšenou
        filmovou kritičkou, odhodlanou lyžařkou, stále se učící kuchařkou a
        trochu netrpělivou mámou.
      </p>
    </div>
    <div class="d-flex align-items-center justify-content-center">
      <MoreInfoBtn />
    </div>
  </section>
</template>

<script>
import MoreInfoBtn from "@/components/MoreInfoBtn.vue";

export default {
  name: "TherapyIntro",
  components: { MoreInfoBtn },
};
</script>

<style lang="scss" scoped>
.intro__text {
  display: flex;
}

p {
  font-family: $body-text;
  color: $darkest-blue;
  font-size: 1.4rem;
  margin: 1rem auto;
  max-width: 40rem;
}
</style>
