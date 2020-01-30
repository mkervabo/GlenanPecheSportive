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

const imgsGallery = [
  require("../assets/gallery/gallery01.jpg"),
  require("../assets/gallery/gallery02.jpg"),
  require("../assets/gallery/gallery03.jpg"),
  require("../assets/gallery/gallery04.jpg"),
  require("../assets/gallery/gallery05.jpg"),
  require("../assets/gallery/gallery06.jpg"),
  require("../assets/gallery/gallery07.jpg"),
  require("../assets/gallery/gallery08.jpg"),
  require("../assets/gallery/gallery09.jpg"),
  require("../assets/gallery/gallery10.jpg"),
  require("../assets/gallery/gallery11.jpg"),
  require("../assets/gallery/gallery12.jpg"),
  require("../assets/gallery/gallery13.jpg"),
  require("../assets/gallery/gallery14.jpg"),
  require("../assets/gallery/gallery15.jpg"),
  require("../assets/gallery/gallery16.jpg"),
  require("../assets/gallery/gallery17.jpg")
];

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
</style>
