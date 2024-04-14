<template>
  <div class="press-gallery">
    <h2 class="press-title dark-blue">{{ gallery.title }}</h2>
    <a class="link" :href="gallery.img" download>
      <img class="press-img" :src="gallery.vignette" />
    </a>
    <p><a class="link" :href="gallery.img" download>Télécharger</a></p>
  </div>
</template>

<script>
export default {
  props: ["gallery"]
};
</script>

<style>
.press-gallery {
  width: 300px;
  background: #f2f2f2;
}

.press-title {
  font-size: 18px;
  height: 20px;
}

.press-img {
  width: 275px;
  height: 275px;
  object-fit: cover;
  margin: auto;
}
</style>
