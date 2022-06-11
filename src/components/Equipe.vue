<template>
  <tr class="equipe">
    <td class="equipe_number font">{{ number }}</td>
    <td class="equipe_name white">{{ name }}</td>
    <!-- <td class="equipe_name white">{{ score }}</td> -->
  </tr>
</template>

<script>
export default {
  props: ["number", "name", "score"]
};
</script>

<style>
.equipe {
  margin: 0;
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
