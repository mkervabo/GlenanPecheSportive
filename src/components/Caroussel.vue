<template>
  <div>
    <div class="next next-left" v-on:click="left">
      <i class="far fa-arrow-alt-circle-left arrow"></i>
    </div>
    <img class="caroussel" v-bind:src="banners[i]" />
    <div class="next next-right" v-on:click="right">
      <i class="far fa-arrow-alt-circle-right arrow"></i>
    </div>
  </div>
</template>

<script>
const banners = [
  require("../assets/banner/banner00.jpg"),
  require("../assets/banner/banner02.jpg"),
  require("../assets/banner/banner03.jpg"),
  require("../assets/banner/banner04.jpg"),
  require("../assets/banner/banner05.jpg")
];

export default {
  data() {
    return {
      banners,
      i: 0
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
