<template>
  <tr class="equipe">
    <td class="equipe_number font">{{ number }}</td>
    <td class="equipe_name white">{{ name }}</td>
    <td class="score">{{ p1 }}</td>
    <td class="score">{{ p2 }}</td>
    <td class="score">{{ p3 }}</td>
    <td class="score">{{ p4 }}</td>
    <td class="score">{{ p5 }}</td>
    <td class="equipe_name white">{{ total }}</td>
  </tr>
</template>

<script>
export default {
  props: ["number", "name", "p1", "p2", "p3", "p4", "p5", "total"],
  mounted() {
    window.console.log("scrore", this.number, this.name);
  }
};
</script>

<style scoped>
.score {
  min-width: 50px;
}

.equipe_number {
  /* border: 1px solid #f2f2f2; */
  color: #65aee2;
}
.equipe:nth-child(2n) .equipe_number {
  color: #f37538;
}
.equipe_name {
  /* border-left: 1px solid #f2f2f2; */
  text-align: left;
}
</style>
