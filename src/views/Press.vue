<template>
  <div class="press-fond">
    <div class="galerie-header">
      <div
        v-on:click="press = true"
        class="dark-blue pointer"
        v-bind:class="{ orange: press }"
      >
        <span>Dossiers et Communiqués</span>
      </div>
      <div
        v-on:click="press = false"
        class="dark-blue pointer"
        v-bind:class="{ orange: !press }"
      >
        <span>Images libres de droit</span>
      </div>
    </div>
    <div class="press-info">
      <p v-if="press">
        Retrouvez dans cet espace les derniers communiqués et dossiers de presse
        de l’association Glénan Pêche Sportive ainsi que des photos.
      </p>
      <p v-else>
        Photos de l'édition 2023 disponibles pour des articles de presse.
        Téléchargez les versions haute définition en cliquant sur les vignettes.
        <br />
        Merci d’indiquer la source : « Glénan Pêche Sportive »
      </p>
    </div>
    <div v-if="press" class="press-body">
      <PressFiles
        v-for="(file, i) in pressData"
        v-bind:key="i"
        v-bind:file="file"
      />
      <div v-for="i in 20" :key="`spacer-${i}`" class="press-spacer" />
    </div>
    <div class="press-gallery-container" v-if="!press">
      <PressGallery
        v-for="(gallery, i) in pressGallery"
        v-bind:key="i"
        v-bind:gallery="gallery"
      />
      <div v-for="i in 20" :key="`spacer-${i}`" class="press-gallery-spacer" />
    </div>
  </div>
</template>

<script>
import PressFiles from "../components/PressFiles";
import PressGallery from "../components/PressGallery";

const rg = require.context("../press-gallery", true, /\.json$/);
const pressGalleryData = rg
  .keys()
  .sort()
  .reverse()
  .map(file => rg(file));

const rp = require.context("../press-space", true, /\.json$/);
const pressData = rp
  .keys()
  .sort()
  .reverse()
  .map(file => rp(file));

export default {
  components: {
    PressFiles,
    PressGallery
  },
  data() {
    return {
      pressData: [],
      pressGallery: [],
      press: true
    };
  },
  mounted() {
    this.pressData = pressData;
    this.pressGallery = pressGalleryData;
  }
};
</script>

<style>
.press-info {
  width: 100%;
  margin: auto;
  margin-top: 10px;
  display: flex;
  align-items: center;
  min-height: 40px;
  max-width: 1060px;
  background: #f2f2f2;
  justify-content: center;
}

.press-info > p {
  padding: 0;
  margin: 0;
}

.press-body {
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
}

.press-spacer {
  width: 100%;
  max-width: 520px;
}

.press-gallery-spacer {
  width: 300px;
}

.pointer {
  cursor: pointer;
}

.press-gallery-container {
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  margin-top: 20px;
  gap: 20px;
}
</style>
