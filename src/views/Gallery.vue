<template>
  <div class="gallery-fond">
    <div class="gallery-body">
      <ImgGallery
        v-for="(imgGallery, i) in imgsGallery"
        v-bind:key="i"
        v-bind:img-gallery="imgGallery"
        v-on:click.native="
          monImage = imgGallery;
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
  </div>
</template>

<script>
import ImgGallery from "../components/ImgGallery";
import ImgGallery2 from "../components/ImgGallery2";

const context = require.context("../assets/gallery", true, /.*/);

const imgsGallery = context.keys().map(key => context(key));

export default {
  components: {
    ImgGallery,
    ImgGallery2
  },
  data() {
    return {
      monImage: "../assets/gallery/gallery01.jpg",
      imgsGallery,
      i: 0,
      openImg: false
    };
  }
};
</script>

<style>
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
</style>
