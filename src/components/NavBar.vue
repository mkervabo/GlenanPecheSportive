<template>
  <nav>
    <router-link
      v-for="route in $router.options.routes.filter(route => route.meta)"
      :key="route.path"
      :to="route.path"
      :style="`background-image: url('${route.meta.image}')`"
      class="header_button"
    >
      {{ route.meta.title }}
    </router-link>
  </nav>
</template>

<script>
export default {
  mounted() {
    window.lol = this;
  }
};
</script>

<style>
nav {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(101, 174, 226, 0.4);
  position: absolute;
  bottom: 0;
}

.header_button {
  font: caption;
  font-size: 14px;
  font-weight: bold;
  height: 100px;
  width: 100px;
  line-height: 100px;
  margin: 0 10px;
  color: #f37538;
  z-index: 1;
  transition: all 150ms;
  background-size: contain;
  background-repeat: no-repeat;
  text-decoration: none;
}

.header_button:hover {
  transform: scale(1.1);
}
</style>
