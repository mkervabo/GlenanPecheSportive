<template>
  <img class="img-gallery" v-bind:src="imgGallery" />
</template>

<script>
export default {
  props: ["imgGallery"]
};
</script>

<style>
.img-gallery {
  width: 350px;
  height: 350px;
  object-fit: cover;
  margin: 10px;
  z-index: 0;
}
</style>
