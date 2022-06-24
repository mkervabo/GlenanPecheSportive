<template>
  <tr class="equipe">
    <td class="equipe_number font">{{ rank + " -" }}</td>
    <td class="equipe_name white">{{ total }}</td>
    <td class="equipe_name white">{{ number }} - {{ name }}</td>
  </tr>
</template>

<script>
export default {
  props: ["number", "name", "total", "rank"]
};
</script>

<style scoped>
.score {
  min-width: 50px;
}

.equipe {
  width: 100%;
}

.equipe_number {
  /* border: 1px solid #f2f2f2; */
  color: #65aee2;
  text-align: center;
}
.equipe:nth-child(2n) .equipe_number {
  color: #f37538;
}
.equipe_name {
  /* border-left: 1px solid #f2f2f2; */
  text-align: left;
}
</style>
