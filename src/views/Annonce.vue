<template>
  <main id="#annonce">
    <div class="annonce_info">
      <h2 class="subscription-title orange">A lire</h2>
      <p class="annonce-content dark-olive">
        Bonjour à tous,<br />
        Malgré la situation actuelle, nous avons décidé d'organiser l'Open des
        Glénan en 2021. Cette édition ne s'appellera pas "Les 10 ans" mais sera
        plutôt une version light de tout ce que l'on vous a proposé jusqu'à
        maintenant. Le but est de continuer à faire vivre notre compétition mise
        à mal ces deux dernières années par la mauvaise météo et le covid, et de
        garder la motivation des bénévoles, partenaires et compétiteurs, même si
        nous aurons du mal à retrouver l'esprit convivial de cet évènement. Bien
        sûr tout ceci reste lié à l'évolution de la situation sanitaire et aux
        autorisations administratives nécessaires. Voici ce vers quoi nous nous
        dirigeons:<br /><br />
        - La compétition se déroulera sur une seule journée le Samedi 12 Juin
        2021.<br />
        - Aucune organisation à terre. (briefing, podium, buvette, repas...)<br />
        - Tout se fera en mer à partir d'un bateau organisation (briefing,
        pointage visuel, remise des prix...)<br />
        - Les compétiteurs géreront la mise à l'eau de leur bateau, nous
        mettront à dispo un endroit de stockage des remorques à Concarneau et
        Port la Forêt si possible. <br />
        - Le RDV se fera à un point précis en mer.<br />
        - Le nombre de bateau sera limité à 60.<br />
        - Le montant de l'inscription sera revu à la baisse, probablement aux
        alentour de 50 € par bateau.<br />
        - Lorsque les autorisations seront validées, nous éditerons en ligne un
        bulletin de pré-inscription et une date limite de retour. Après cette
        date, nous effectuerons un tirage au sort en live via Facebook pour
        désigner les heureux participants.<br /><br />
        Merci à tous de l'intérêt que vous portez à notre évènement, à
        bientôt.<br />
        Le bureau de Glénan Pêche Sportive.<br />
        Pour toute question nous ne répondrons que sur
        <a class="link" href="https://www.facebook.com/glenanpechesportive/"
          >facebook</a
        >
        en mp ou sur notre mail que vous trouverez
        <a class="link" href="mailto:infos@glenanpechesportive.fr">ici</a>.
      </p>
    </div>
    <div class="annonce_info white" id="equipes">
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
            :score="'|  ' + team[1]"
          />
        </tbody>
      </table>
    </div>
    <img v-else src="/loading.svg" />
  </main>
</template>

<script>
import Equipe from "../components/Equipe";
export default {
  components: {
    Equipe
  },
  data() {
    return {
      teams: []
    };
  },
  mounted() {
    window.console.log("mounted");
    const minTime = new Promise(resolve => setTimeout(resolve, 1000));
    fetch("/.netlify/functions/teams")
      .then(res => res.json())
      .then(e => minTime.then(() => e))
      .then(teams => (this.teams = teams));
  },
  computed: {
    sortTeams() {
      window.console.log(this.teams);
      return this.teams.slice(0).sort(function(a, b) {
        return parseInt(a[1], 10) < parseInt(b[1], 10) ? 1 : -1;
      });
    }
  }
};
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
