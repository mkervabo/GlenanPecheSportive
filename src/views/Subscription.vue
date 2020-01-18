<template>
  <main>
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
          <span class="font"
            >diners supplémentaires le samedi soir pour les accompagnants, 20€
            par personne</span
          >.
          <br />
          <br />
          <div>
            <label class="dark-olive">Nombres de repas suplémentaire</label>
            <input class="repas" v-model="repas" />
          </div>
        </div>
      </div>
      <div>
        <div class="form">
          <div class="subscription-title orange">Patron</div>
          <IdForm class="form id-form" />
        </div>
        <div class="form">
          <div class="subscription-title orange">Mousse</div>
          <IdForm class="form id-form" />
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
            <input type="checkbox" v-model="securite1" />
          </div>
          <div class="label-form security-form">
            <label>
              Moyen de repérage lumineux. Il peut être collectif (lampe,
              projecteur, lampe IOR) ou individuel s'il est étanche et porté par
              chaque personne embarquée
            </label>
            <input type="checkbox" v-model="securite2" />
          </div>
          <div class="label-form security-form">
            <label
              >Dispositif d’assèchement fixe ou mobile sauf navires
              auto-videur</label
            >
            <input type="checkbox" v-model="securite3" />
          </div>
          <div class="label-form security-form">
            <label>Moyen de remonter à bord une personne tombée à l’eau</label>
            <input type="checkbox" v-model="securite4" />
          </div>
          <div class="label-form security-form">
            <label>
              Dispositif coupe-circuit en cas d’éjection du pilote si moteur(s)
              hors bord à barre franche de puissance > 4,5 Kw
            </label>
            <input type="checkbox" v-model="securite5" />
          </div>
          <div class="label-form security-form">
            <label>
              Dispositif de lutte contre l’incendie
              <span class="font">à jour de sa visite d'entretien</span>
            </label>
            <input type="checkbox" v-model="securite6" />
          </div>
          <div class="label-form security-form">
            <label>Dispositif de remorquage</label>
            <input type="checkbox" v-model="securite7" />
          </div>
          <div class="label-form security-form">
            <label
              >Ligne de mouillage ou ancre flottante sauf embarcations de
              capacité inférieur à 5 adultes</label
            >
            <input type="checkbox" v-model="securite8" />
          </div>
          <div class="label-form security-form">
            <label>Pavillon national Si franchisé</label>
            <input type="checkbox" v-model="securite9" />
          </div>
          <div class="label-form security-form">
            <label>Trois feux rouges automatiques à main</label>
            <input type="checkbox" v-model="securite10" />
          </div>
          <div class="label-form security-form">
            <label>Annuaire de marée</label>
            <input type="checkbox" v-model="secutite12" />
          </div>
          <div class="label-form security-form">
            <label>
              Dispositif repérage et assistance d’une personne tombée à l’eau
              sauf embarcations de capacité inferieur à 5 adultes et tous
              pneumatiques
            </label>
            <input type="checkbox" v-model="securite13" />
          </div>
          <div class="label-form security-form">
            <label>Compas magnétique</label>
            <input type="checkbox" v-model="securite14" />
          </div>
          <div class="label-form security-form">
            <label
              >Règlement international pour prévenir les abordages en mer
              (RIPAM)</label
            >
            <input type="checkbox" v-model="securite15" />
          </div>
          <div class="label-form security-form">
            <label>Document de synthèse du balisage</label>
            <input type="checkbox" v-model="securite16" />
          </div>
          <div class="label-form security-form">
            <label>Carte(s) de navigation</label>
            <input type="checkbox" v-model="securite17" />
          </div>
          <div class="label-form">
            <label>VHF Radiomaritime obligatoire</label>
            <input type="checkbox" v-model="securite18" />
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
          <br />
          En continuant je certifie que je dispose de tous les matériels de
          sécurité obligatoires pour la catégorie de navigation correspondante à
          la compétition
          <br />
          <button>Télécharger</button>
          <button>Imprimer</button>
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
main {
  height: 100%;
  background: #65aee2;
  font: caption;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.subscription-part {
  width: 100vw;
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

.id-form {
  max-width: 700px;
}

.form {
  background: #3a3a3a;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 10px;
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

.securite {
  max-width: 800px;
  text-align: justify;
}
</style>
