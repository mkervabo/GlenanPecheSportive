<template>
  <main id="#subscription">
    <div class="subscription-part">
      <div class="rules important">
        <div class="subscription-title dark-blue">Important</div>
        <div class="rules-content dark-olive">
          Ceci est le formulaire de pré-incription, votre inscription sera
          valider une fois le formulaire imprimer et poster.
        </div>
        <div class="rules-content dark-olive">
          <div class="subscription-title2 orange">Prix de l’inscription:</div>
          <br />
          <span class="font">130€ par bateau</span> (prix pour les deux
          équipiers pour l’ensemble de la compétition) comprenant aussi les
          petits déjeuners et paniers repas du samedi et dimanche midi, ainsi
          qu’un repas à Concarneau le samedi soir pour les équipages. Il est
          possible de réserver des
          <span class="font">
            diners supplémentaires le samedi soir pour les accompagnants, 20€
            par personne </span
          >.
          <br />
          <br />
          <div>
            <label class="dark-olive">Nombres de repas suplémentaire</label>
            <input class="repas" v-model="repas" />
          </div>
          <span class="subscription-title2 orange">Total: </span
          >{{ 130 + repas * 20 }}€
        </div>
      </div>
      <div>
        <div class="form">
          <div class="subscription-title orange">Patron</div>
          <IdForm class="form id-form" ref="patron" />
        </div>
        <div class="form">
          <div class="subscription-title orange">Mousse</div>
          <IdForm class="form id-form" ref="mousse" />
        </div>
      </div>
    </div>
    <div class="subscription-part">
      <div class="form securite">
        <!-- a modifier a partir de: https://www.ecologique-solidaire.gouv.fr/sites/default/files/equipement_secu_plaisance_4p_DEF_Web.pdf -->
        <div class="subscription-title orange">Équipement obligatoire</div>
        <div>
          <div class="label-form security-form">
            <label>
              Équipement individuel de flottabilité par personne embarquée (aide
              à la flottabilité ou gilet de sauvetage)
            </label>
            <input type="checkbox" v-model="securities[0]" />
          </div>
          <div class="label-form security-form">
            <label>
              Moyen de repérage lumineux. Il peut être collectif (lampe,
              projecteur, lampe IOR) ou individuel s'il est étanche et porté par
              chaque personne embarquée
            </label>
            <input type="checkbox" v-model="securities[1]" />
          </div>
          <div class="label-form security-form">
            <label>
              Dispositif d’assèchement fixe ou mobile sauf navires auto-videur
            </label>
            <input type="checkbox" v-model="securities[2]" />
          </div>
          <div class="label-form security-form">
            <label>Moyen de remonter à bord une personne tombée à l’eau</label>
            <input type="checkbox" v-model="securities[3]" />
          </div>
          <div class="label-form security-form">
            <label>
              Dispositif coupe-circuit en cas d’éjection du pilote si moteur(s)
              hors bord à barre franche de puissance > 4,5 Kw
            </label>
            <input type="checkbox" v-model="securities[4]" />
          </div>
          <div class="label-form security-form">
            <label>
              Dispositif de lutte contre l’incendie
              <span class="font">à jour de sa visite d'entretien</span>
            </label>
            <input type="checkbox" v-model="securities[5]" />
          </div>
          <div class="label-form security-form">
            <label>Dispositif de remorquage</label>
            <input type="checkbox" v-model="securities[6]" />
          </div>
          <div class="label-form security-form">
            <label>
              Ligne de mouillage ou ancre flottante sauf embarcations de
              capacité inférieur à 5 adultes
            </label>
            <input type="checkbox" v-model="securities[7]" />
          </div>
          <div class="label-form security-form">
            <label>Pavillon national Si franchisé</label>
            <input type="checkbox" v-model="securities[8]" />
          </div>
          <div class="label-form security-form">
            <label>Trois feux rouges automatiques à main</label>
            <input type="checkbox" v-model="securities[9]" />
          </div>
          <div class="label-form security-form">
            <label>Annuaire de marée</label>
            <input type="checkbox" v-model="securities[10]" />
          </div>
          <div class="label-form security-form">
            <label>
              Dispositif repérage et assistance d’une personne tombée à l’eau
              sauf embarcations de capacité inferieur à 5 adultes et tous
              pneumatiques
            </label>
            <input type="checkbox" v-model="securities[11]" />
          </div>
          <div class="label-form security-form">
            <label>Compas magnétique</label>
            <input type="checkbox" v-model="securities[12]" />
          </div>
          <div class="label-form security-form">
            <label>
              Règlement international pour prévenir les abordages en mer (RIPAM)
            </label>
            <input type="checkbox" v-model="securities[13]" />
          </div>
          <div class="label-form security-form">
            <label>Document de synthèse du balisage</label>
            <input type="checkbox" v-model="securities[14]" />
          </div>
          <div class="label-form security-form">
            <label>Carte(s) de navigation</label>
            <input type="checkbox" v-model="securities[15]" />
          </div>
          <div class="label-form">
            <label>VHF Radiomaritime obligatoire</label>
            <input type="checkbox" v-model="securities[16]" />
          </div>
        </div>
      </div>
      <div class="rules equipage">
        <div class="subscription-title dark-blue">Équipe et Bateau</div>
        <div class="form-equipage">
          <div class="label-form">
            <label class="dark-olive">Nom de léquipage:</label>
            <input v-model="equipage" />
          </div>
          <div class="label-form">
            <label class="dark-olive">Nom du bateau:</label>
            <input v-model="bateau" />
          </div>
          <div class="label-form">
            <label class="dark-olive">Longueur du bateau:</label>
            <input v-model="longueur" />
          </div>
          <div class="label-form">
            <label class="dark-olive">Immatriculation:</label>
            <input v-model="immatriculation" />
          </div>
          <div class="label-form">
            <label class="dark-olive">Puissance moteur:</label>
            <input v-model="moteur" />
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
        <div class="subscription-title dark-blue">Valider</div>
        <div class="rules-content dark-olive">
          <div class="font">En poursuivant:</div>
          <br />En continuant je certifie que je dispose de tous les matériels
          de sécurité obligatoires pour la catégorie de navigation
          correspondante à la compétition
          <br />

          <button :disabled="!securityOk" v-on:click="generate">Valider</button>
          <p v-show="!securityOk">
            Vous n'avez pas tout l'equipement obligatoire
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
      assuranre1: "",
      assurance2: "",
      securities: Array.from({ length: 17 }).fill(false)
    };
  },
  computed: {
    securityOk() {
      return this.securities.every(s => s);
    }
  },
  methods: {
    generate() {
      const tab = window.open("/loading.html");

      fetch("/contest/inscription-2020.pdf")
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
          this.drawIdForm(firstPage, this.$refs.mousse, 360 - 173);
          firstPage.moveTo(0, height);
          firstPage.moveDown(397);
          firstPage.moveRight(514);
          firstPage.drawText(String(this.repas));

          secondPage.setFontSize(12);

          secondPage.moveTo(0, height);
          secondPage.moveDown(148);
          secondPage.moveRight(159);
          secondPage.drawText(this.equipage);
          secondPage.moveDown(14);
          secondPage.drawText(this.equipage);
          secondPage.moveDown(14);
          secondPage.drawText(this.equipage);
          secondPage.moveDown(14);
          secondPage.drawText(this.equipage);

          secondPage.moveTo(0, height);
          secondPage.moveDown(148 + 14);
          secondPage.moveRight(430);
          secondPage.drawText(this.equipage);
          secondPage.moveDown(14);
          secondPage.drawText(this.equipage);
          secondPage.moveDown(14);
          secondPage.drawText(this.equipage);

          secondPage.moveTo(0, height);
          secondPage.moveDown(280);
          secondPage.moveRight(430);

          for (const [i, security] of this.securities.entries()) {
            if (security) secondPage.drawText("X" + i);
            if (i == 0 || i == 1 || i == 4 || i == 11) secondPage.moveDown(10);
            if (i == 12) secondPage.moveDown(12);
            secondPage.moveDown(12.2);
          }
          return doc.save();
        })
        .then(pdf => {
          const blob = new Blob([pdf], { type: "application/pdf" });
          const url = URL.createObjectURL(blob);
          tab.location.assign(url);
        });
    },
    drawIdForm(page, idForm, offset) {
      page.moveTo(0, page.getSize().height);
      page.moveDown(159);
      page.moveRight(173 + offset);
      for (const [i, value] of idForm.toArray().entries()) {
        page.moveDown(19);
        if (i >= 8) page.moveDown(3);
        page.drawText(value || "");
      }
    }
  }
  /*security: function () {
	return {
	securite1: false,
	securite2: false,
	securite3: false,
	securite4: false,
	securite5: false,
	securite6: false,
	securite7: false,
	securite8: false,
	securite9: false,
	securite10: false,
	securite11: false,
	securite12: false,
	securite13: false,
	securite14: false,
	securite15: false,
	securite16: false,
	securite17: false,
	securite18: false
	}
  }*/
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
}

.subscription-title {
  font: caption;
  font-weight: bold;
  font-size: 20px;
  margin: 10px;
}

.subscription-title2 {
  font: caption;
  font-weight: bold;
  font-size: 17px;
}

.form {
  background: #3a3a3a;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 10px;
  width: 800px;
}

.rules {
  background: #f2f2f2;
  max-width: 80vw;
  margin: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 10px;
}

.important {
  width: 350px;
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
  width: 350px;
}

.security-form {
  border-bottom: 1px solid rgba(242, 242, 242, 0.2);
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

.securite {
  width: 800px;
  text-align: justify;
}
</style>
