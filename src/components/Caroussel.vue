<template>
  <div>
    <div class="next next-left" v-on:click="left">
      <fa-icon :icon="['far', 'arrow-alt-circle-left']" class="arrow"></fa-icon>
    </div>
    <img class="caroussel" v-bind:src="banners[i].img" />
    <div class="next next-right" v-on:click="right">
      <fa-icon
        :icon="['far', 'arrow-alt-circle-right']"
        class="arrow"
      ></fa-icon>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight
} from "@fortawesome/free-regular-svg-icons";

library.add(faArrowAltCircleLeft);
library.add(faArrowAltCircleRight);

const r = require.context("../carroussel", true, /\.json$/);
const banners = r.keys().map(file => r(file));

export default {
  data() {
    return {
      banners() {
        return banners;
      }
    };
  },
  methods: {
    right() {
      this.i++;
      if (this.i >= this.banners.length) this.i = 0;
    },
    left() {
      this.i--;
      if (this.i < 0) this.i = this.banners.length - 1;
    }
  },
  mounted() {
    this.interval = setInterval(this.right, 5000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style>
.caroussel {
  width: 100%;
  height: 50vh;
  background-color: #3a3a3a;
  object-fit: cover;
}

.next {
  z-index: 1;
  width: 100px;
  height: 120px;
  color: rgba(242, 242, 242, 0);
  background-color: rgba(242, 242, 242, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.next-left {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.next-right {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.next:hover {
  color: rgba(242, 242, 242, 0.6);
  background-color: rgba(242, 242, 242, 0.3);
}

.arrow {
  font-size: 50px;
}
</style>
