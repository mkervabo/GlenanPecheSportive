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
    <div class="annonce_equipes white">
      <div class="tab-bar">
        <ul>
          <li
            v-for="(tabName, index) in tabBar"
            :key="index"
            v-on:click="makeActive(index)"
            v-bind:class="{ active: active[index] }"
          >
            {{ tabName }}
          </li>
        </ul>
      </div>
      <div class="tab-view">
        <table :key="0" v-if="active[0]">
          <tbody>
            <Equipe
              v-for="team in deleteEmpty"
              :key="team[0]"
              :number="team[0] + '-'"
              :name="team[1]"
            />
          </tbody>
        </table>
        <ScoreTab :key="1" v-if="active[1]" :range="0" />
        <ResultTab :key="2" v-if="active[2]" :range="1" />
        <ScoreTab :key="3" v-if="active[3]" :range="2" />
        <ResultTab :key="4" v-if="active[4]" :range="3" />
        <ResultTab :key="5" v-if="active[5]" :range="4" />
      </div>
    </div>
    <!-- <img v-else src="/loading.svg" /> -->
  </main>
</template>

<script>
import Equipe from "../components/Equipe";
import ResultTab from "../components/ResultTab";
import ScoreTab from "../components/ScoreTab";
export default {
  components: {
    Equipe,
    ResultTab,
    ScoreTab
  },
  data() {
    return {
      teams: [],
      active: [true, false, false, false, false, false],
      tabBar: [
        "Teams",
        "Poissons Samedi",
        "Classement Samedi",
        "Poissons Dimanche",
        "Classement Dimanche",
        "Classement final"
      ]
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
  },
  methods: {
    makeActive(range) {
      this.active = [false, false, false, false, false, false];
      this.$set(this.active, range, true);
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
  max-width: 100%;
  min-height: 600px;
  max-width: 900px;
  padding: 10px;
  margin: 10px auto;
  background: #3a3a3a;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.tab-bar > ul {
  width: 100%;
  display: flex;
  margin: 0;
  padding: 0;
  overflow-x: scroll;
}

.tab-view {
  overflow-x: scroll;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  border-top: solid 1px;
  max-width: 100%;
}

.tab-bar > ul > li {
  margin: 0;
  min-width: 150px;
  border-right: solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tab-bar > ul > li:last-child {
  border-right: none;
}

.tab-bar > ul > li:hover {
  background: #4b4b4b;
}

.active {
  background: #4b4b4b;
}

.phone_tab_button {
  display: none;
}
</style>
