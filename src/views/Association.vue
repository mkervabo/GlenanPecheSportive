<template>
  <div class="association-fond">
    <div class="association-article association-pres">
      <h2 class="association-title dark-blue">L'Association</h2>
      <div class="association-content">
        <p>Présentation du bureau</p>
        <br />
        <p v-for="(member, i) in members" :key="i">
          <span class="font" :class="member.color">{{ member.role }} </span
          >{{ member.name }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import marked from "marked";

const r = require.context("../association", true, /\.json$/);
const members = r.keys().map(file => r(file));

export default {
  computed: {
    members() {
      return members;
    }
  },
  methods: {
    markdown(input) {
      return marked(input, { sanitize: true });
    }
  }
};
</script>
<style>
.association-fond {
  background: #65aee2;
  width: 100%;
  display: flex;
  justify-content: center;
}

.association-article {
  margin: 10px;
  padding: 10px;
  background: #f2f2f2;
  color: #3a3a3a;
}

.association-title {
  font: caption;
  font-weight: bold;
  font-size: 25px;
  margin: 10px;
}

.association-content {
  font: caption;
  margin: 10px;
  text-align: justify;
  font-size: 15px;
}
.association-pres {
  max-width: 800px;
}
</style>
