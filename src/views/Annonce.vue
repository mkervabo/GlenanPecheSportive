<template>
  <main id="#annonce">
    <div class="annonce_info">
      <h2 class="subscription-title orange">A lire</h2>
      <p class="annonce-content dark-olive">
        Voici la liste des inscrits de l’open des Glénan 2022.<br />
        Si le nom de votre équipe n’apparaît pas dans cette liste c’est sans
        doute 🤔: <br />
        Que votre dossier est incomplet <br />
        Ou pas encore arrivé par voie postale.<br />
        En cas de doute contactez-nous<br />
        A bientôt sur l’eau 😉<br />
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
        Ci-dessous se trouvent la liste des inscrits pour l'open 2022:
      </p>
    </div> -->
    <div class="annonce_equipes white" v-if="teams !== null">
      <table>
        <tbody>
          <Equipe
            v-for="team in deleteEmpty"
            :key="team[0]"
            :number="team[0] + '-'"
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
    deleteEmpty() {
      window.console.log(this.teams);
      return this.teams.filter(team => team[1] != null).slice(1);
    }
    //   sortTeams() {
    //     window.console.log(this.teams);
    //     return this.teams.slice(0).sort(function(a, b) {
    //       return parseInt(a[1], 10) < parseInt(b[1], 10) ? 1 : -1;
    //     });
    //   }
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
