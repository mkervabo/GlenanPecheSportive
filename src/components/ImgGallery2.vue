<template>
  <div class="img-gallery-filter">
    <img class="img-gallery-vue" v-bind:src="imgGallery" />
  </div>
</template>

<script>
export default {
  props: ["imgGallery"]
};
</script>

<style>
.img-gallery-filter {
  z-index: 2;
  background: rgba(58, 58, 58, 0.9);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-gallery-vue {
  max-width: 90vw;
  max-height: 90vh;
}
</style>
