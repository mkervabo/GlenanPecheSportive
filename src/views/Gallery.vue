<template>
  <div class="gallery-fond">
    <div class="gallery-body">
      <ImgGallery
        v-for="(imgGallery, i) in imgsGallery"
        v-bind:key="i"
        v-bind:img-gallery="imgGallery"
        v-on:click="openImg(i)"
      />
      <ImgGallery2 v-bind:img-gallery="monImage" />
    </div>
  </div>
</template>

<script>
import ImgGallery from "../components/ImgGallery";

const imgsGallery = [
  require("../assets/kitten/kitten01.png"),
  require("../assets/kitten/kitten02.jpg"),
  require("../assets/kitten/kitten03.jpeg"),
  require("../assets/kitten/kitten04.jpg"),
  require("../assets/kitten/kitten05.jpg"),
  require("../assets/kitten/kitten06.jpeg")
];

export default {
  components: {
    ImgGallery
  },
  data() {
    return {
      monImage: "../assets/kitten/kitten01.png",
      imgsGallery,
      i: 0
    };
  },
  methods: {
    openImg: function(i) {
      this.monImage = imgsGallery[i];
    }
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
