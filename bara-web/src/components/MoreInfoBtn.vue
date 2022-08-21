<template>
  <button class="btn btn-outline-info btn-sm btn__more" type="button">
    více...
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
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-family: $header-text;
  color: $light-blue;
}
</style>
