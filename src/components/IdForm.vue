<template>
  <div>
    <div class="section">
      <div class="label-form">
        <label>Nom:</label>
        <input v-model="nom" placeholder="nom" />
      </div>
      <div class="label-form">
        <label>Prénom:</label>
        <input v-model="prenom" placeholder="prenom" />
      </div>
      <div class="label-form">
        <label>Date de Naissance:</label>
        <input class="jour" v-model="naissance_jour" placeholder="jour" />
        <input class="mois" v-model="naissance_mois" placeholder="mois" />
        <input class="année" v-model="naissance_année" placeholder="annee" />
      </div>
    </div>
    <div class="section">
      <div class="label-form">
        <label>Adresse:</label>
        <input v-model="adresse" placeholder="adresse" />
      </div>
      <div class="label-form">
        <label>Code postal:</label>
        <input v-model="postal" placeholder="code postal" />
      </div>
      <div class="label-form">
        <label>Ville:</label>
        <input v-model="ville" placeholder="ville" />
      </div>
    </div>

    <div class="label-form">
      <label>Téléphone Portable:</label>
      <input v-model="portable" placeholder="portable" />
    </div>
    <div class="label-form">
      <label>Email</label>
      <input v-model="email" placeholder="email" />
    </div>
    <div class="label-form">
      <label>Téléphone Fixe:</label>
      <input v-model="fixe" placeholder="fixe" />
    </div>
    <div class="label-form">
      <label>Taille T-shirt:</label>
      <select v-model="selected">
        <option disabled value>Choisissez</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
        <option>XXL</option>
      </select>
    </div>
  </div>
</template>

<style>
label {
  font: caption;
  font-size: 15px;
  color: #f2f2f2;
}

.section {
  width: 300px;
}

.label-form {
  display: flex;
  justify-content: space-between;
  margin: 10px;
}

.jour {
  width: 30px;
}

.mois {
  width: 30px;
}

.année {
  width: 60px;
}
input {
  margin-left: 10px;
}
</style>
