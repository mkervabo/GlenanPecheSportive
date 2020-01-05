<template>
  <div>
    <label>Nom:</label>
    <input v-model="nom" placeholder="nom" />
    <br />
    <label>Prénom:</label>
    <input v-model="prenom" placeholder="prenom" />
  </div>
</template>

<style>
label {
  font: caption;
  font-size: 14px;
  color: #f2f2f2;
}

input {
}
</style>
