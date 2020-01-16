<template>
  <div>
    <div class="section">
      <div class="label-form">
        <label for="mr">Mr </label>
        <input type="radio" id="mr" v-model="kind" />
        <label for="mm">Mm</label>
        <input type="radio" id="mm" v-model="kind" />
      </div>
      <div class="label-form">
        <label>Nom:</label>
        <input v-model="nom" />
      </div>
      <div class="label-form">
        <label>Prénom:</label>
        <input v-model="prenom" />
      </div>
      <div class="label-form">
        <label>Date de Naissance:</label>
        <input class="jour" v-model="naissance_jour" placeholder="00" />
        <input class="mois" v-model="naissance_mois" placeholder="00" />
        <input class="année" v-model="naissance_annee" placeholder="0000" />
      </div>
    </div>
    <div class="section">
      <div class="label-form">
        <label>Adresse:</label>
        <input v-model="adresse" />
      </div>
      <div class="label-form">
        <label>Code postal:</label>
        <input v-model="postal" />
      </div>
      <div class="label-form">
        <label>Ville:</label>
        <input v-model="ville" />
      </div>
    </div>

    <div class="label-form">
      <label>Téléphone Portable:</label>
      <input v-model="portable" />
    </div>
    <div class="label-form">
      <label>Email</label>
      <input v-model="email" />
    </div>
    <div class="label-form">
      <label>Téléphone Fixe:</label>
      <input v-model="fixe" />
    </div>
    <div class="label-form">
      <label>Taille T-shirt:</label>
      <select v-model="t_shirt">
        <option disabled value>Choisissez</option>
        <option>XS</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
        <option>XXL</option>
        <option>XXXL</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      kind: false,
      nom: "",
      prenom: "",
      naissance_jour: 0,
      naissance_mois: 0,
      naissance_annee: 0,
      adresse: "",
      postal: 0,
      ville: "",
      postable: 0,
      fixe: 0,
      email: "",
      t_shirt: ""
    };
  }
};
</script>

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
