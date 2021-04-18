<template>
  <main id="#subscription">
    <div class="subscription-important">
      <h2 class="subscription-title orange">A lire</h2>
      <p class="rules-content dark-olive">
        Cette année a l'occasion de l'Open des Glénan 2021 nous organisons un
        tirage au sort afin de sélectionner les participants. L'inscription
        officielle des gagnants aura lieu après ce tirage au sort, nous vous
        informerons de l'organisation de celui-ci sur notre
        <a class="link" href="https://www.facebook.com/glenanpechesportive/"
          >facebook</a
        >.<br />
        Merci de votre compréhension.<br /><br />
        Pour toute question nous ne répondrons que sur notre
        <a class="link" href="https://www.facebook.com/glenanpechesportive/"
          >facebook</a
        >
        en mp ou sur notre mail que vous trouverez
        <a class="link" href="mailto:infos@glenanpechesportive.fr"
          >infos@glenanpechesportive.fr</a
        >.
      </p>
    </div>
    <div class="subscription-part">
      <div class="rules important">
        <h2 class="subscription-title dark-blue">Important</h2>
        <div class="rules-content dark-olive">
          <span class="font" style="color: #E53935"
            >Ceci est le formulaire de pré-incription, votre inscription sera
            validée une fois le tirage au sort effectuer.
          </span>
          <p class="contest-content">
            Le règlement de l'open de 2021 sera disponible dès que possible, il
            sera rédigé en accord avec les réglementations COVID en vigueur à ce
            moment-là.
          </p>
          <p class="contest-content">
            Pour plus d'informations ou en cas de problèmes lors de votre
            inscription vous pouvez nous contacter sur cet email:
            <a class="link" href="mailto:inscription@glenanpechesportive.bzh"
              >inscription2021@glenanpechesportive.bzh</a
            >
          </p>
        </div>
      </div>
      <div class="members">
        <div class="form">
          <h2 class="subscription-title orange">Capitaine</h2>
          <IdForm ref="patron" />
        </div>
        <div class="form">
          <h2 class="subscription-title orange">Mousse</h2>
          <IdForm ref="mousse" />
        </div>
      </div>
    </div>
    <div class="subscription-part">
      <div class="rules equipage">
        <h2 class="subscription-title dark-blue">Équipe et Bateau</h2>
        <div class="form-equipage">
          <div class="label-form">
            <label class="dark-olive">
              Nom de l'équipage:
              <input v-model="equipage" />
            </label>
          </div>
          <div class="label-form">
            <label class="dark-olive">
              Longueur du bateau:
              <input v-model="longueur" />
            </label>
          </div>
          <div class="label-form">
            <label class="dark-olive">
              Puissance moteur:
              <input v-model="moteur" />
            </label>
          </div>
        </div>
        <h2 class="subscription-title dark-blue">Valider</h2>
        <div class="rules-content dark-olive">
          <div class="font">En poursuivant:</div>
          <p>
            J'ai conscience que l'association Glénan Pêche Sportive collecte mes
            informations et qu'elles ne seront pas utilisées à des fins
            commerciales.
          </p>
          <button
            :disabled="
              !securityOk ||
                !boatOk ||
                !($refs.patron && $refs.patron.isOk) ||
                !($refs.mousse && $refs.mousse.isOk)
            "
            v-on:click="generate"
          >
            Valider
          </button>
          <p v-show="!securityOk" class="form-error">
            Vous n'avez pas tout l'équipement obligatoire
          </p>
          <p v-show="!boatOk" class="form-error">
            Vous n'avez pas remplis tout les champs
          </p>
          <p v-show="!($refs.patron && $refs.patron.isOk)" class="form-error">
            Vous n'avez pas complété le formulaire du capitaine
          </p>
          <p v-show="!($refs.mousse && $refs.mousse.isOk)" class="form-error">
            Vous n'avez pas complété le formulaire du mousse
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import IdForm from "../components/IdForm";

export default {
  components: {
    IdForm
  },
  data() {
    return {
      equipage: "",
      longueur: "",
      moteur: ""
    };
  },
  computed: {
    securityOk() {
      // return this.securities.every(s => s);
      return 1;
    },
    boatOk() {
      return this.equipage && this.longueur && this.moteur;
    }
  },
  methods: {
    async generate() {
      const { status } = await fetch("/.netlify/functions/subscription", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          equipage: this.equipage,
          longueur: this.longueur,
          moteur: this.moteur,
          patron: this.$refs.patron.toJSON(),
          mousse: this.$refs.mousse.toJSON()
        })
      });

      if (status === 200) {
        this.$toasted.show("Inscription validée", {
          className: "font toast-success",
          position: "top-center",
          action: {
            text: "X",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          }
        });
      } else {
        this.$toasted.show("Erreur lors de l'inscription", {
          type: "error",
          className: "font",
          position: "top-center",
          action: {
            text: "X",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          }
        });
      }
    }
  }
};
</script>

<style>
#subscription {
  height: 100%;
  background: #65aee2;
  font: caption;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.subscription-part {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.subscription-title {
  font: caption;
  font-weight: bold;
  font-size: 20px;
  margin: 10px;
}

.subscription-important {
  max-width: 1220px;
  padding: 10px;
  margin: 10px auto;
  background: #f2f2f2;
  text-align: left;
}

.subscription-title2 {
  font: caption;
  font-weight: bold;
  font-size: 17px;
}

.form {
  text-align: justify;
  flex-direction: column;
  background: #3a3a3a;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  margin: 10px;
  width: calc(100% - 20px);
  box-sizing: border-box;
  max-width: 800px;
  height: 100%;
}

.rules {
  background: #f2f2f2;
  max-width: 80vw;
  margin: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px;
}

.important {
  width: 400px;
}

.repas {
  width: 30px;
}

.rules-content {
  font: caption;
  margin-left: 10px;
  margin-right: 10px;
  text-align: justify;
}

.equipage {
  width: 400px;
}

.security-form {
  border-bottom: 1px solid rgba(242, 242, 242, 0.2);
}

.security-form:last-child {
  border-bottom: none;
}

.security-form label {
  font: caption;
  font-size: 15px;
  color: #f2f2f2;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.securite {
  height: auto;
}

button {
  background: #65aee2;
  color: #f2f2f2;
  border-radius: 10%;
  border: 0;
  border-right: solid 1px #0185c6;
  border-bottom: solid 1px #0185c6;
  padding: 8px;
  margin: 10px;
}

button:disabled {
  background: #3a3a3a;
  color: graytext;
}

.members {
  width: 100%;
  max-width: 820px;
  display: flex;
  flex-direction: column;
}

.form-error {
  color: red;
  margin: 0;
}

.form-equipage label {
  font: caption;
  font-size: 15px;
  width: 100%;
}

.form-equipage .label-form {
  display: inherit;
  width: 100%;
  text-align: right;
  white-space: nowrap;
}

.toast-success {
  background: #f37538 !important;
}
</style>
