<template>
  <section class="media">
    <article class="media__video">
      <h2>Video</h2>
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">Rozhovory o psychoterapii</h3>
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/XzL05rLSOgo"
            title="Rozhovory o psychoterapii"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h3 class="card-title">Současná situace očima psychoterapeuta</h3>
          <iframe
            width="100%"
            height="auto"
            src="https://www.facebook.com/plugins/video.php?height=303&href=https%3A%2F%2Fwww.facebook.com%2Fmyterap.io%2Fvideos%2F1552767414880768%2F&show_text=false&width=560&t=0"
            style="border: none; overflow: hidden"
            allowfullscreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </article>
    <hr />
    <article class="media__audio">
      <h2>Audio</h2>
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">Současná situace očima psychoterapeuta</h3>
          <iframe
            class="card-body"
            height="auto"
            width="100%"
            src="https://anchor.fm/mozaikavzdelavani/embed/episodes/14-S-Barborou-Penicovou-o-duevnm-zdrav-a-projektu-Nevypus-dui-e1koipm/a-a873rs7"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            onload="resizeToContent(this)"
          ></iframe>
        </div>
      </div>
    </article>
    <hr />
    <article class="media__text">
      <h2>Text</h2>
      <div class="card">
        <div class="card-body">
          <h3 class="card-header mb-3">Rozhovor</h3>
          <a
            href="https://refresher.cz/117506-Nevypust-dusi-Pomoc-mladym-v-oblasti-dusevniho-zdravi-je-v-Cesku-v-troskach-stoji-opravdove-zivoty-Rozhovor"
            target="_blank"
            class="card-subtitle"
            >Refresher - Pomoc mladým v oblasti duševního zdraví je v Česku v
            troskách</a
          >
          <hr class="mt-2" />
          <p class="card-text mt-2">
            Se současnou a budoucí šéfkou neziskové organizace Nevypusť duši o
            tom, jak by mohl vypadat svět, kdyby všichni lidé chodili na
            terapii, o pomoci, prevenci a destigmatizaci duševních poruch v
            Česku i o tom, jakou sílu může mít jedno vlídné slovo.
          </p>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "TheMediaPage",
  methods: {
    resizeToContent(iframe) {
      iframe.height = iframe.contentWindow.document.body.scrollHeight;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  margin-top: 7rem;

  article {
    margin: 2rem auto;
    width: 80%;

    h2 {
      font-family: $header-text;
      font-size: 2rem;
      color: $darkest-blue;
      padding-bottom: 1rem;
    }

    iframe {
      margin: 1rem auto;
      flex-grow: 1;
    }

    .card {
      border: 1px solid $contract-red;
      margin: 1rem auto;
      max-width: 35rem;
    }

    .card-header {
      color: $contract-red;
      background-color: transparent;
    }

    h3 {
      font-family: $header-text;
      font-size: 1.5rem;
      color: $darkest-blue;
    }

    a {
      text-decoration: underline;
      font-family: $body-text;
      color: $dark-blue;
      font-size: 1.2rem;
    }

    &__body {
      display: flex;
      flex-direction: column;
    }
  }

  @include sm {
    .media__video {
      iframe {
        height: 15rem;
      }
    }
  }
}
</style>
