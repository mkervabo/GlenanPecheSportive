<template>
  <div class="img-gallery-filter">
    <img class="img-gallery-vue" src="{{imgGallery}}" />
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
  background: rgba(58, 58, 58, 3);
  width: 100vw;
  height: 100vh;
}

.img-gallery-filter {
  max-width: 100vw;
  max-height: 100vh;
  margin: auto;
}
</style>
