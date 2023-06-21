<template>
  <div class="press-article">
    <h3 class="dark-blue">{{ article.title }}</h3>
    <p>{{ article.content }}</p>
    <div class="press-img">
      <a v-bind:href="article.link" target="_blank">
        <img v-bind:src="article.img" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["article"]
};
</script>

<style sc>
.press-article {
  width: 500px;
  background: #f2f2f2;
  padding: 10px;
  margin: 10px;
}

.press-img {
  cursor: pointer;
}

.press-img > a > img {
  width: 480px;
  height: 300px;
  object-fit: contain;
}
</style>
