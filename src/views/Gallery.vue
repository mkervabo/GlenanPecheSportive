<template>
  <div class="gallery-fond">
    <div class="gallery-body">
      <ImgGallery />
      <ImgGallery />
      <ImgGallery />
      <ImgGallery />
      <ImgGallery />
      <ImgGallery />
    </div>
  </div>
</template>

<script>
import ImgGallery from "../components/ImgGallery";

export default {
  components: {
    ImgGallery
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
