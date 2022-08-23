<template>
  <div class="work__tiles">
    <div class="card work__tiles__tile" v-for="card in cards" :key="card.id">
      <font-awesome-icon
        :icon="card.icon"
        size="7x"
        class="work__tiles__icon"
      />

      <div class="card-body">
        <h3 class="card-title text-center">{{ card.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkTiles",
  data() {
    return {
      cards: [
        {
          id: 0,
          title: "13 let v sociálních službách",
          icon: "fa-solid fa-people-group",
        },
        {
          id: 1,
          title: "3 roky terapeutické praxe",
          icon: "fa-solid fa-file-medical",
        },
        {
          id: 2,
          title: "400+ sezení s klienty",
          icon: "fa-solid fa-hand-holding-hand",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.work__tiles {
  margin: 4rem auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @include lg {
    flex-direction: row;
    justify-content: space-evenly;
  }

  &__icon {
    color: white;
    vertical-align: middle;
    padding-top: 1rem;
  }

  &__tile {
    margin: 2rem auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70vw;
    height: 70vw;
    max-width: 25rem;
    max-height: 25rem;
    background-color: $dark-blue;
    padding: 1rem;

    @include sm {
      justify-content: space-evenly;
    }

    @include lg {
      max-width: 15rem;
      max-height: 15rem;
    }

    .card-body {
      color: white;
      font-family: $header-text;

      h3 {
        font-size: 1.3rem;
        font-weight: 700;
      }

      @include sm {
        flex: 0 0 auto;
      }
    }
  }
}
</style>
