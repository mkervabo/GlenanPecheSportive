<template>
  <table v-if="result">
    <tbody>
      <ResultCase
        number="n°"
        name="nom d'equipe"
        total="Résultat"
        rank="Classement"
      />
      <ResultCase
        v-for="(score, index) in sortResult"
        :key="index"
        :number="score[0]"
        :name="score[1]"
        :total="score[2]"
        :rank="index + 1"
      />
    </tbody>
  </table>
  <img v-else src="/loading.svg" />
</template>

<script>
import ResultCase from "../components/ResultCase";
export default {
  components: {
    ResultCase
  },
  data() {
    return {
      result: []
    };
  },
  props: {
    range: Number
  },
  mounted() {
    window.console.log("mounted");
    const minTime = new Promise(resolve => setTimeout(resolve, 1000));
    fetch("/.netlify/functions/result?range=" + this.range)
      .then(res => {
        return res.json();
      })
      .then(e => minTime.then(() => e))
      .then(result => (this.result = result));
  },
  computed: {
    deleteEmpty() {
      const result = this.result.filter(
        result => result[1] != null && result[1] !== ""
      );
      return result;
    },
    sortResult() {
      return this.deleteEmpty.slice(1).sort(function(a, b) {
        return parseInt(a[2], 10) <= parseInt(b[2], 10) ? 1 : -1;
      });
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
}

tbody {
  width: 100%;
}
</style>
