<template>
  <main id="#annonce">
    <div class="annonce_info">
      <h2 class="subscription-title orange">A lire</h2>
      <p class="annonce-content dark-olive">
        Amis compétiteurs<br />
        Vous avez été très nombreux à vous inscrire à l'open des Glénan 2020,
        tant à l'occasion du salon de Nantes que durant cette semaine par
        courrier. Nous avons dû faire face à un engouement sans précédent pour
        notre compétition et nous vous en sommes très reconnaissant.
        Malheureusement nous ne pourrons pas contenter tout le monde à notre
        grand regret.<br />
        Voici donc la liste des inscrits pour cette édition 2020.<br />
        Nous avons essayé d'être le plus impartial possible en prenant en
        priorité les dossiers complets déposés à Nantes suivis des arrivées par
        courrier. Vous comprendrez tous qu'un certain nombre de places étaient
        réservées pour nos fidèles partenaires sans qui cette compétition
        n'existerait pas.<br />
        Une liste d'attente est en place, si vous en faite partie nous vous
        informerons de l'évolution des inscriptions.<br />
        Merci à tous.<br />
      </p>
    </div>
    <div class="annonce_equipes white" v-if="teams !== null">
      <table>
        <tbody>
          <Equipe
            v-for="team in teams"
            :key="team[0]"
            :number="(team[0], '-')"
            :name="team[1]"
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
      teams: null
    };
  },
  mounted() {
    window.console.log("mounted");
    const minTime = new Promise(resolve => setTimeout(resolve, 1000));
    fetch("/.netlify/functions/teams")
      .then(res => res.json())
      .then(e => minTime.then(() => e))
      .then(teams => (this.teams = teams));
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
