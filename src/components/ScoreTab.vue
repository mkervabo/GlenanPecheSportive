<template>
  <table v-if="result">
    <tbody>
      <ScoreCase
        v-for="score in deleteEmpty"
        :key="score[0]"
        :number="score[0] + '-'"
        :name="score[1]"
        :p1="score[4]"
        :p2="score[5]"
        :p3="score[6]"
        :p4="score[7]"
        :p5="score[8]"
        :total="score[9]"
      />
    </tbody>
  </table>
  <img v-else src="/loading.svg" />
</template>

<script>
import ScoreCase from "../components/ScoreCase";
export default {
  components: {
    ScoreCase
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
    }
    //   sortTeams() {
    //     window.console.log(this.teams);
    //     return this.teams.slice(0).sort(function(a, b) {
    //       return parseInt(a[1], 10) < parseInt(b[1], 10) ? 1 : -1;
    //     });
    //   }
  }
};
</script>
