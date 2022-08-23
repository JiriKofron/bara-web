<template>
  <button class="btn btn-outline-info btn-sm btn__more" type="button">
    více o mně...
  </button>
</template>

<script>
export default {
  name: "MoreInfoBtn",
};
</script>

<style lang="scss" scoped>
.btn__more {
  width: 70%;
  max-width: 20rem;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: $header-text;
  color: $light-blue;
}
</style>
