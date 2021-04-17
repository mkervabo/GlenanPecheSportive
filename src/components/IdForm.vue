<template>
  <div class="id-form">
    <div class="row"></div>
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
      </fieldset>
      <fieldset class="section"></fieldset>
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
      <fieldset class="section"></fieldset>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nom: "",
      prenom: "",
      portable: "",
      fixe: "",
      email: ""
    };
  },
  computed: {
    mailOk() {
      var mailReg = new RegExp(/^([\w-.]+)@((?:[\w]+\.)+)([a-zA-Z]{2})/i);
      return mailReg.test(this.email);
    },
    isOk() {
      return (
        this.nom &&
        this.prenom &&
        (this.portable || this.fixe) &&
        this.email &&
        this.mailOk
      );
    }
  },
  methods: {
    toArray() {
      return [this.nom, this.prenom, this.fixe, this.portable, this.email];
    },
    toJSON() {
      return {
        nom: this.nom,
        prenom: this.prenom,
        fixe: this.fixe,
        portable: this.portable,
        email: this.email
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
