<template>
  <div>
    <div class="section">
      <div class="label-form">
        <label for="mr">Mr </label>
        <input type="radio" value="H" v-model="kind" />
        <label for="mm">Mm</label>
        <input type="radio" value="F" v-model="kind" />
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
        <input type="date" v-model="naissance" />
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
      <label>Email:</label>
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
  data() {
    return {
      kind: "H",
      nom: "",
      prenom: "",
      naissance: "",
      adresse: "",
      postal: 0,
      ville: "",
      portable: 0,
      fixe: 0,
      email: "",
      t_shirt: ""
    };
  },
  methods: {
    toArray() {
      return [
        this.nom,
        this.prenom,
        this.adresse,
        this.postal,
        this.ville,
        this.naissance,
        this.fixe,
        this.portable,
        this.email,
        this.t_shirt
      ];
    }
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
