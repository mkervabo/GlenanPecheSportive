<template>
  <main id="#subscription">
    <div class="subscription-important">
      <h2 class="subscription-title orange">A lire</h2>
      <p class="rules-content dark-olive">
        Les pré-inscriptions sont ouvertes !
      </p>
      <p class="rules-content dark-olive">
        Il est indispensable de lire le reglement avant votre incription vous
        pouvez le trouver
        <a class="link" href="/contest/reglement-open-des-Glenan-2025.pdf"
          >ici</a
        >
      </p>
      <p class="rules-content dark-olive">
        Pour toute question nous ne répondrons que sur notre
        <a class="link" href="https://www.facebook.com/glenanpechesportive/"
          >facebook</a
        >
        en mp ou sur notre mail que vous trouverez
        <a class="link" href="mailto:infos@glenanpechesportive.bzh"
          >infos@glenanpechesportive.fr</a
        >.
      </p>
      <p class="rules-content dark-olive">
        Merci de votre compréhension.
      </p>
    </div>
    <div class="subscription-part">
      <div class="rules important">
        <h2 class="subscription-title dark-blue">Important</h2>
        <div class="rules-content dark-olive">
          <span class="font" style="color: #E53935"
            >Ceci est le formulaire de pré-incription, votre inscription sera
            validée une fois le formulaire imprimé et posté.<br />
            Minimum requis pour s'inscrire 50ch et 5m.
          </span>
          <p class="contest-content">
            Le règlement est par
            <a class="link" href="/contest/reglement-open-des-Glenan-2025.pdf"
              >là</a
            >
            ! <span class="font orange">Il est indispensable de le lire !</span>
          </p>
          <!-- <p>
            <span class="font orange"
              >Le règlement sera disponible bientôt !</span
            >
          </p> -->
          <p class="contest-content">
            Pour plus d'informations ou en cas de problèmes lors de votre
            inscription vous pouvez nous contacter sur cet email:
            <a class="link" href="mailto:inscription@glenanpechesportive.bzh"
              >inscription@glenanpechesportive.bzh</a
            >
          </p>
          <p class="font">Joindre au présent bulletin d'inscription :</p>
          <p>
            Les attestations d'assurance responsabilité civile des équipiers et
            du bateau,
            <span class="font">et</span> la fiche sécurité dûment remplie et
            signée.
          </p>
          <p>
            <span class="font">70€ par bateau</span> (prix pour les deux
            équipiers pour l’ensemble de la compétition) comprenant aussi les
            paniers repas du samedi.
          </p>
          <br />
          <!-- <div>
            <label class="dark-olive"
              >Nombres de repas suplémentaire
              <input class="repas" v-model="repas" autocomplete="off" />
            </label>
          </div> -->
          <br />
          <span class="subscription-title2 orange">Total:</span>
          {{ 70 }}€
        </div>
      </div>
      <div class="members">
        <div class="form">
          <h2 class="subscription-title orange">Capitaine</h2>
          <IdForm ref="patron" :captain="true" />
        </div>
        <div class="form">
          <h2 class="subscription-title orange">Mousse</h2>
          <IdForm ref="mousse" :captain="false" />
        </div>
      </div>
    </div>
    <div class="subscription-part">
      <div class="form securite">
        <h2 class="subscription-title orange">Équipement obligatoire</h2>
        <div>
          <div class="label-form security-form">
            <label>
              Équipement individuel de flottabilité par personne embarquée (aide
              à la flottabilité ou gilet de sauvetage)
              <input
                class="check-box"
                type="checkbox"
                v-model="securities[0]"
              />
            </label>
          </div>
          <div class="label-form security-form">
            <label>
              Moyen de repérage lumineux. Il peut être collectif (lampe,
              projecteur, lampe IOR) ou individuel s'il est étanche et porté par
              chaque personne embarquée
              <input
                class="check-box"
                type="checkbox"
                v-model="securities[1]"
              />
            </label>
          </div>
          <div class="label-form security-form">
            <label>
              Dispositif d’assèchement fixe ou mobile sauf navires auto-videur
              <input
                class="check-box"
                type="checkbox"
                v-model="securities[2]"
              />
            </label>
          </div>
          <div class="label-form security-form">
            <label>
              Moyen de remonter à bord une personne tombée à l’eau
              <input
                class="check-box"
                type="checkbox"
                v-model="securities[3]"
              />
            </label>
          </div>
          <div class="label-form security-form">
            <label>
              Dispositif coupe-circuit en cas d’éjection du pilote si moteur(s)
              hors bord à barre franche de puissance > 4,5 Kw
              <input
                class="check-box"
                type="checkbox"
                v-model="securities[4]"
              />
            </label>
          </div>
          <div class="label-form security-form">
            <label>
              <span>
                Dispositif de lutte contre l’incendie
                <span class="font">à jour de sa visite d'entretien</span>
              </span>
              <input
                class="check-box"
                type="checkbox"
                v-model="securities[5]"
              />
            </label>
          </div>
          <div class="label-form security-form">
            <label>
              Dispositif de remorquage
              <input
                class="check-box"
                type="checkbox"
                v-model="securities[6]"
              />
            </label>
          </div>
          <div class="label-form security-form">
            <label>
              Ligne de mouillage ou ancre flottante sauf embarcations de
              capacité inférieur à 5 adultes
              <input
                class="check-box"
                type="checkbox"
                v-model="securities[7]"
              />
            </label>
          </div>
          <div class="label-form security-form">
            <label>
              Pavillon national Si franchisé
              <input
                class="check-box"
                type="checkbox"
                v-model="securities[8]"
              />
            </label>
          </div>
          <div class="label-form security-form">
            <label>
              Trois feux rouges automatiques à main
              <input
                class="check-box"
                type="checkbox"
                v-model="securities[9]"
              />
            </label>
          </div>
          <div class="label-form security-form">
            <label>
              Annuaire de marée
              <input
                class="check-box"
                type="checkbox"
                v-model="securities[10]"
              />
            </label>
          </div>
          <div class="label-form security-form">
            <label>
              Dispositif repérage et assistance d’une personne tombée à l’eau
              sauf embarcations de capacité inferieur à 5 adultes et tous
              pneumatiques
              <input
                class="check-box"
                type="checkbox"
                v-model="securities[11]"
              />
            </label>
          </div>
          <div class="label-form security-form">
            <label>
              Compas magnétique
              <input
                class="check-box"
                type="checkbox"
                v-model="securities[12]"
              />
            </label>
          </div>
          <div class="label-form security-form">
            <label>
              Règlement international pour prévenir les abordages en mer (RIPAM)
              <input
                class="check-box"
                type="checkbox"
                v-model="securities[13]"
              />
            </label>
          </div>
          <div class="label-form security-form">
            <label>
              Document de synthèse du balisage
              <input
                class="check-box"
                type="checkbox"
                v-model="securities[14]"
              />
            </label>
          </div>
          <div class="label-form security-form">
            <label>
              Carte(s) de navigation
              <input
                class="check-box"
                type="checkbox"
                v-model="securities[15]"
              />
            </label>
          </div>
          <div class="label-form security-form">
            <label>
              VHF Radiomaritime obligatoire
              <input
                class="check-box"
                type="checkbox"
                v-model="securities[16]"
              />
            </label>
          </div>
        </div>
      </div>
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
              Nom du bateau:
              <input v-model="bateau" />
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
              Immatriculation:
              <input v-model="immatriculation" />
            </label>
          </div>
          <div class="label-form">
            <label class="dark-olive">
              Puissance moteur:
              <input v-model="moteur" />
            </label>
          </div>
          <div class="label-form">
            <label class="dark-olive">Compagnie d'assurance:</label>
            <input v-model="assurance1" />
          </div>
          <div class="label-form">
            <label class="dark-olive">N° de contrat assurance:</label>
            <input v-model="assurance2" />
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
          <p>
            En continuant je certifie que je dispose de tous les matériels de
            sécurité obligatoires pour la catégorie de navigation correspondante
            à la compétition
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
            {{ willDownload ? "Télécharger" : "Valider" }}
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
          <p class="contest-content">
            Si vous rencontrez des problèmes pour remplir l'inscription vous
            pouvez toujours
            <a class="link" href="/contest/inscription-2025.pdf"
              >télécharger un bulletin vierge</a
            >
            et le remplir comme avant.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import IdForm from "../components/IdForm";
import { PDFDocument } from "pdf-lib";

export default {
  components: {
    IdForm
  },
  data() {
    return {
      repas: 0,
      equipage: "",
      bateau: "",
      longueur: "",
      immatriculation: "",
      moteur: "",
      assurance1: "",
      assurance2: "",
      securities: Array.from({ length: 17 }).fill(false)
    };
  },
  computed: {
    willDownload() {
      // Edge can't open a blob data url
      return window.navigator && window.navigator.msSaveOrOpenBlob;
    },
    securityOk() {
      return this.securities.every(s => s);
    },
    boatOk() {
      return (
        this.equipage &&
        this.bateau &&
        this.longueur &&
        this.immatriculation &&
        this.moteur &&
        this.assurance1 &&
        this.assurance2
      );
    }
  },
  methods: {
    async generate() {
      const tab = this.willDownload || window.open("/loading.html");
      const loaded =
        this.willDownload || new Promise(resolve => (tab.onload = resolve));

      const { status } = await fetch("/.netlify/functions/subscription", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          repas: this.repas,
          equipage: this.equipage.toUpperCase(),
          bateau: this.bateau,
          longueur: this.longueur,
          immatriculation: this.immatriculation,
          moteur: this.moteur,
          assurance1: this.assurance1,
          assurance2: this.assurance2,
          patron: this.$refs.patron.toJSON(),
          mousse: this.$refs.mousse.toJSON()
        })
      });
      if (status === 200) {
        this.$toasted.show("Inscription validée", {
          className: "font toast-success",
          position: "top-center",
          fullWidth: true,
          fitToScreen: true,
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
          fullWidth: true,
          fitToScreen: true,
          action: {
            text: "X",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          }
        });
      }
      fetch("/contest/inscription-2025.pdf")
        .then(res => res.arrayBuffer())
        .then(pdf => PDFDocument.load(pdf))
        .then(doc => {
          const pages = doc.getPages();
          const firstPage = pages[0];
          const secondPage = pages[1];
          const { width, height } = firstPage.getSize();
          window.console.log(width, height);
          firstPage.setFontSize(12);
          firstPage.moveTo(0, height);
          firstPage.moveDown(143);
          firstPage.moveRight(143);
          firstPage.drawText(this.equipage);
          this.drawIdForm(firstPage, this.$refs.patron, 0);
          this.drawIdForm(firstPage, this.$refs.mousse, 360 - 175);
          firstPage.moveTo(0, height);
          firstPage.moveDown(455);
          firstPage.moveRight(200);
          firstPage.drawText(String(this.repas));
          secondPage.setFontSize(12);
          secondPage.moveTo(0, height);
          secondPage.moveDown(150);
          secondPage.moveRight(180);
          secondPage.drawText(this.equipage.toUpperCase());
          secondPage.moveDown(20);
          secondPage.drawText(this.bateau);
          secondPage.moveDown(20);
          secondPage.drawText(this.immatriculation);
          secondPage.moveDown(20);
          secondPage.drawText(this.longueur);
          secondPage.moveTo(0, height);
          secondPage.moveDown(150 + 20);
          secondPage.moveRight(425);
          secondPage.drawText(this.moteur);
          secondPage.moveDown(20);
          secondPage.drawText(this.assurance1);
          secondPage.moveDown(20);
          secondPage.drawText(this.assurance2);
          secondPage.moveTo(0, height);
          secondPage.moveDown(325);
          secondPage.moveRight(470);
          for (const [i, security] of this.securities.entries()) {
            if (security) secondPage.drawText("X");
            if (i == 1 || i == 4 || i == 11) secondPage.moveDown(6);
            secondPage.moveDown(15.5);
          }
          return doc.save();
        })
        .then(pdf => {
          const blob = new Blob([pdf], { type: "application/pdf" });
          if (this.willDownload)
            window.navigator.msSaveOrOpenBlob(
              blob,
              "inscription-open-glenan-2024.pdf"
            );
          else {
            const url = URL.createObjectURL(blob);
            return loaded.then(() => {
              tab.location.assign(url);
              setTimeout(() => {
                if (tab.location.pathname === "/loading.html") {
                  tab.close();
                }
              }, 500);
            });
          }
        });
    },
    drawIdForm(page, idForm, offset) {
      page.moveTo(0, page.getSize().height);
      page.moveDown(161);
      page.moveRight(180 + offset);
      for (const [i, value] of idForm.toArray().entries()) {
        window.console.log(typeof value, i);
        if (i === 10 || i == 11) {
          page.moveDown(14);
          const newoffset = value ? 93 : 123;
          page.moveRight(newoffset);
          page.drawText("x");
          page.moveRight(-newoffset);
        } else {
          page.moveDown(20);
          if (typeof value == "string") page.drawText(value || "");
        }
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

button:active {
  background: #0185c6;
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
  font-size: 11px;
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
