<template>
  <div class="d-flex justify-content-center">
    <button
      class="btn btn-danger btn-lg contact__btn"
      type="button"
      @click="$router.push('/contact')"
    >
      Chci konzultaci
    </button>
  </div>
</template>

<script>
export default {
  name: "ContactButton",
};
</script>

<style lang="scss" scoped>
.contact__btn {
  font-family: $header-text;
  font-size: 2.5rem;
  font-weight: 500;
  width: 90%;
  max-width: 30rem;
  margin: 1rem auto;

  @include lg {
    font-size: 1.4rem;
    max-width: 15rem;
  }
}

.btn-danger {
  background-color: $contract-red;
}
</style>
