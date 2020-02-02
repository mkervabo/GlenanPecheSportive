<template>
  <div class="partenaire-fond">
    <div class="partenaire-body">
      <div
        v-for="sponsor in sponsors"
        :key="sponsor.name"
        class="partenaire-icone"
      >
        <a :href="sponsor.link">
          <img class="partenaire-img" :src="sponsor.logo" />
          <br />
          <div class="link">{{ sponsor.name }}</div>
        </a>
      </div>
      <div v-for="i in 10" :key="i" class="partenaire-spacer" />
    </div>
  </div>
</template>

<script>
import sponsors from "../sponsors";

export default {
  computed: {
    sponsors() {
      return sponsors;
    }
  }
};
</script>

<style>
.partenaire-fond {
  background: #65aee2;
  width: 100%;
}

.partenaire-body {
  max-width: 1000px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  font-size: 15px;
  margin: auto;
}

.partenaire-icone {
  background-color: rgba(242, 242, 242, 0.8);
  padding: 5px;
  width: 300px;
  margin: 5px;
}

.partenaire-spacer {
  width: 300px;
  margin: 0 5px;
  padding: 0 5px;
}

.partenaire-img {
  max-width: 280px;
  max-height: 120px;
}
</style>
