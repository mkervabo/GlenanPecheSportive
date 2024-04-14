<template>
  <div class="press-fond">
    <div class="galerie-header">
      <div
        v-on:click="press = true"
        class="dark-blue"
        v-bind:class="{ orange: press }"
      >
        <span>Dossier et Communiquer de Press</span>
      </div>
      <div
        v-on:click="press = false"
        class="dark-blue"
        v-bind:class="{ orange: !press }"
      >
        <span>Image libre de droit</span>
      </div>
    </div>
    <div v-if="press" class="gallery-body">
      <PressFiles
        v-for="(file, i) in pressData"
        v-bind:key="i"
        v-bind:presseFile="file"
      />
      <div v-for="i in 20" :key="`spacer-${i}`" class="gallery-spacer" />
    </div>
  </div>
</template>

<script>
import PressFiles from "../components/PressFiles";

const rp = require.context("../press", true, /\.json$/);
const pressData = rp
  .keys()
  .sort()
  .reverse()
  .map(file => rp(file));

export default {
  computer: {
    pressData() {
      return pressData;
    }
  },
  components: {
    PressFiles
  },
  data() {
    return {
      pressData,
      press: true
    };
  }
};
</script>
