<template>
  <div class="gallery-fond">
    <div>
      <div class="galerie-header">
        <div
          v-on:click="galerie = true"
          class="dark-blue"
          v-bind:class="{ orange: galerie }"
        >
          <span>Gallerie</span>
        </div>
        <div
          v-on:click="galerie = false"
          class="dark-blue"
          v-bind:class="{ orange: !galerie }"
        >
          <span>Press</span>
        </div>
      </div>
      <div v-if="galerie" class="gallery-body">
        <ImgGallery
          v-for="(imgGallery, i) in imgsGallery"
          v-bind:key="i"
          v-bind:img-gallery="imgGallery.img"
          v-on:click.native="
            monImage = imgGallery.img;
            openImg = true;
          "
        />
        <div v-for="i in 20" :key="`spacer-${i}`" class="gallery-spacer" />
        <ImgGallery2
          v-bind:img-gallery="monImage"
          v-show="openImg"
          v-on:click.native="openImg = false"
        />
      </div>
      <div v-else class="gallery-body">
        <PressArticle
          v-for="(data, i) in pressData"
          v-bind:key="i"
          v-bind:article="data"
        />
        <div v-for="i in 20" :key="`spacer-${i}`" class="press-spacer" />
      </div>
    </div>
  </div>
</template>

<script>
import ImgGallery from "../components/ImgGallery";
import ImgGallery2 from "../components/ImgGallery2";
import PressArticle from "../components/PressArticle";

const rg = require.context("../gallery", true, /\.json$/);
const imgsGallery = rg
  .keys()
  .sort()
  .reverse()
  .map(file => rg(file));

const rp = require.context("../press", true, /\.json$/);
const pressData = rp
  .keys()
  .sort()
  .reverse()
  .map(file => rp(file));

export default {
  computer: {
    imgsGallery() {
      return imgsGallery;
    },
    pressData() {
      return pressData;
    }
  },
  components: {
    ImgGallery,
    ImgGallery2,
    PressArticle
  },
  data() {
    return {
      monImage: imgsGallery[0].img,
      imgsGallery,
      pressData,
      i: 0,
      openImg: false,
      galerie: true
    };
  }
};
</script>

<style>
.galerie-header {
  margin-top: 5px;
  height: 30px;
  display: flex;
  gap: 20px;
  justify-content: center;
}

.galerie-header > div {
  width: 520px;
  height: 100%;
  display: flex;
  background: #f2f2f2;
  justify-content: center;
  align-items: center;
}

.galerie-header > div:hover {
  color: #f37538;
}

.gallery-fond {
  background: #65aee2;
  width: 100%;
  display: flex;
  justify-content: center;
}

.gallery-body {
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.gallery-spacer {
  width: 350px;
  margin: 0 10px;
}

.press-spacer {
  width: 400px;
  margin: 0 10px;
}
</style>
