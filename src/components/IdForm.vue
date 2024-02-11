<template>
  <div class="id-form">
    <div class="row">
      <fieldset class="kind">
        <label
          >M
          <input type="radio" value="H" v-model="kind" />
        </label>
        <label
          >Mme
          <input type="radio" value="F" v-model="kind" />
        </label>
      </fieldset>
      <fieldset v-show="!captain" class="kind">
        <label
          >Mineur
          <input type="checkbox" v-model="minor" />
        </label>
      </fieldset>
    </div>
    <div class="row">
      <fieldset class="section">
        <div class="label-form">
          <label
            >Nom:
            <input type="text" v-model="nom" autocomplete="family-name" />
          </label>
        </div>
        <div class="label-form">
          <label
            >Prénom:
            <input type="text" v-model="prenom" autocomplete="given-name" />
          </label>
        </div>
        <div class="label-form">
          <label
            >Date de Naissance:
            <input type="date" v-model="naissance" autocomplete="bday" />
          </label>
        </div>
      </fieldset>
      <fieldset class="section">
        <div class="label-form">
          <label
            >Adresse:
            <input type="text" v-model="adresse" />
          </label>
        </div>
        <div class="label-form">
          <label
            >Code postal:
            <input type="number" v-model="postal" autocomplete="postal-code" />
          </label>
        </div>
        <div class="label-form">
          <label
            >Ville:
            <input type="text" v-model="ville" autocomplete="address-level1" />
          </label>
        </div>
      </fieldset>
    </div>
    <div class="row">
      <fieldset class="section">
        <div class="label-form">
          <label
            >Téléphone Portable:
            <input type="text" v-model="portable" autocomplete="tel-local" />
          </label>
        </div>
      </fieldset>
      <fieldset class="section">
        <div class="label-form">
          <label
            >Email:
            <input type="email" v-model="email" autocomplete="email" />
          </label>
          <p v-show="!mailOk" class="form-error">
            Vous avez entré un email invalide
          </p>
        </div>
      </fieldset>
    </div>
    <div class="row">
      <fieldset class="section">
        <div class="label-form">
          <label
            >Téléphone Fixe:
            <input type="text" v-model="fixe" />
          </label>
        </div>
      </fieldset>
      <fieldset class="section">
        <div class="label-form">
          <label
            >Taille T-shirt:
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
          </label>
        </div>
      </fieldset>
      <fieldset class="section">
        <label
          >Petit déjeuné
          <input type="checkbox" v-model="dej" checked />
        </label>
      </fieldset>
      <fieldset class="section"></fieldset>
      <fieldset class="section">
        <label
          >Repas du Samedi soir
          <input type="checkbox" v-model="diner" checked />
        </label>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: "H",
      minor: false,
      nom: "",
      prenom: "",
      naissance: "",
      adresse: "",
      postal: "",
      ville: "",
      portable: "",
      fixe: "",
      email: "",
      t_shirt: "",
      dej: true,
      diner: true
    };
  },
  props: ["captain"],
  computed: {
    mailOk() {
      var mailReg = new RegExp(/^([\w-.]+)@((?:[\w]+\.)+)([a-zA-Z]{2})/i);
      return mailReg.test(this.email);
    },
    isOk() {
      return (
        this.nom &&
        this.prenom &&
        this.naissance &&
        this.adresse &&
        this.postal &&
        this.ville &&
        (this.portable || this.fixe) &&
        this.email &&
        this.t_shirt &&
        this.mailOk
      );
    }
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
        this.t_shirt,
        this.dej,
        this.diner
      ];
    },
    toJSON() {
      return {
        kind: this.kind,
        minor: this.minor,
        nom: this.nom,
        prenom: this.prenom,
        adresse: this.adresse,
        postal: this.postal,
        ville: this.ville,
        naissance: this.naissance,
        fixe: this.fixe,
        portable: this.portable,
        email: this.email,
        t_shirt: this.t_shirt,
        dej: this.dej,
        diner: this.diner
      };
    }
  }
};
</script>

<style>
.id-form label {
  font: caption;
  font-size: 15px;
  color: #f2f2f2;
  width: 100%;
}

.id-form fieldset {
  margin: 0;
  padding: 0;
  border: 0;
}

.id-form {
  display: flex;
  flex-direction: column;
  text-align: right;
}

.id-form .row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.id-form .kind {
  width: 50%;
  text-align: right;
}

.id-form .kind > label {
  margin: 0 10px;
}

.id-form .section {
  min-width: 50%;
}

.label-form {
  display: flex;
  margin: 10px 0;
  flex-direction: column;
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
