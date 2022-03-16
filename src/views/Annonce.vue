<template>
  <main id="#annonce">
    <div class="annonce_info">
      <h2 class="subscription-title orange">A lire</h2>
      <p class="annonce-content dark-olive">
        Bonjour à tous,<br />
        Vous êtes très nombreux à nous envoyer des messages, nous appeler...
        pour avoir des nouvelles de l'open des Glénan 2022.<br />
        On peut enfin vous confirmer qu'il aura bien lieu les 25 et 26 Juin à
        ...PORT LA FORÊT.<br />
        Nous avons reçu la réponse définitive ce matin. 🤩😎<br />
        Concernant les inscriptions, tout sera en ligne sur le site ce week-end.
        <br />
        Le principe reste le même pour s'inscrire: <br />
        Téléchargez la feuille de renseignements<br />
        Constituez un dossier COMPLET avec le règlement par chèque<br />
        Postez le tout....<br />
        La prise en compte des dossiers complets se fera dans leur ordre
        d'arrivée dans la boite.<br />
        SVP ne nous inondez pas de messages, tout les renseignements vous seront
        donnés.<br />
        Merci à tous de votre intérêt pour notre compète, et RDV pour une vraie
        10ième édition.....<br />
        Le bureau de GPS.<br />
        Pour toute question nous ne répondrons que sur
        <a class="link" href="https://www.facebook.com/glenanpechesportive/"
          >facebook</a
        >
        en mp ou sur notre mail que vous trouverez
        <a class="link" href="mailto:infos@glenanpechesportive.fr">ici</a>.
      </p>
    </div>
    <!-- <div class="annonce_info white" id="equipes">
      <h2 class="subscription-title orange">Classement</h2>
      <p class="annonce-content dark-olive">
        Ci-dessous se trouvent les résultats en continu de la compétition. Ils
        seront mis à jour régulièrement au cours de la journée.
      </p>
    </div>
    <div class="annonce_equipes white" v-if="teams !== null">
      <table>
        <tbody>
          <Equipe
            v-for="(team, index) in sortTeams"
            :key="team[0]"
            :number="index + 1 + '-'"
            :name="team[0]"
            :score="team[1]"
          />
        </tbody>
      </table>
    </div> 
    <img v-else src="/loading.svg" />-->
  </main>
</template>

<script>
// import Equipe from "../components/Equipe";
// export default {
//   components: {
//     Equipe
//   },
//   data() {
//     return {
//       teams: []
//     };
//   },
//   mounted() {
//     window.console.log("mounted");
//     const minTime = new Promise(resolve => setTimeout(resolve, 1000));
//     fetch("/.netlify/functions/teams")
//       .then(res => res.json())
//       .then(e => minTime.then(() => e))
//       .then(teams => (this.teams = teams));
//   },
//   computed: {
//     sortTeams() {
//       window.console.log(this.teams);
//       return this.teams.slice(0).sort(function(a, b) {
//         return parseInt(a[1], 10) < parseInt(b[1], 10) ? 1 : -1;
//       });
//     }
//   }
// };
</script>

<style>
#annonce {
  height: 100%;
  background: #65aee2;
  font: caption;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.annonce-content {
  font: caption;
  margin-left: 10px;
  margin-right: 10px;
  text-align: justify;
}
.annonce_info {
  max-width: 900px;
  padding: 10px;
  margin: 10px auto;
  background: #f2f2f2;
  text-align: left;
}
.annonce_equipes {
  width: 100%;
  max-width: 900px;
  padding: 10px;
  margin: 10px auto;
  background: #3a3a3a;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
