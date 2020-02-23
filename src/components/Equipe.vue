<template>
  <div class="equipe">
    <span class="equipe_number font">{{ number }}</span>
    <span class="equipe_name white">{{ name }}</span>
  </div>
</template>

<script>
export default {
  props: ["number", "name"]
};
</script>

<style>
.equipe {
  margin: 0;
}

.equipe_number {
  border: 1px solid #f2f2f2;
}

.equipe_name {
  border-left: 1px solid #f2f2f2;
}
</style>
