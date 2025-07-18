<template>
  <main id="#annonce">
    <div class="annonce_info">
      <h2 class="subscription-title orange">A lire</h2>
      <p class="annonce-content dark-olive">
        Les inscriptions à l’Open des Glénan 2025 sont désormais closes.<br />
        Merci à toutes les équipes qui se sont inscrites dans les délais !<br /><br />

        Vous trouverez ci-dessous la liste officielle des équipages inscrits.<br />
        Chaque équipe recevra prochainement un e‑mail de confirmation avec les
        dernières informations pratiques.<br /><br />

        📍 Rappel : le briefing obligatoire aura lieu le vendredi 29 août à 19h
        à Concarneau.<br /><br />

        👉 Pour toute question ou modification, merci de nous contacter via les
        coordonnées figurant dans le règlement.<br /><br />

        🎣 Bonne préparation à tous,<br />
        L’équipe Glénan Pêche Sportive
      </p>
    </div>
    <div class="annonce_equipes white">
      <div class="tab-bar">
        <ul>
          <li
            v-for="tab in tabBar.filter(tab => tab.date < new Date())"
            :key="tab.name"
            v-on:click="makeActive(tab)"
            v-bind:class="{ active: tab.active }"
          >
            <span>{{ tab.name }}</span>
          </li>
        </ul>
      </div>
      <div class="tab-view">
        <table :key="0" v-if="tabBar[0].active">
          <tbody>
            <Equipe
              v-for="team in deleteEmpty"
              :key="team[0]"
              :number="team[0] + '-'"
              :name="team[1]"
            />
          </tbody>
        </table>
        <!-- <ScoreTab :key="1" v-if="tabBar[1].active" :range="0" /> -->
        <!-- <ResultTab :key="2" v-if="tabBar[2].active" :range="1" />
        <ScoreTab :key="3" v-if="tabBar[3].active" :range="2" />
        <ResultTab :key="4" v-if="tabBar[4].active" :range="3" />
        <ResultTab :key="5" v-if="tabBar[5].active" :range="4" /> -->
      </div>
    </div>
    <!-- <img v-else src="/loading.svg" /> -->
  </main>
</template>

<script>
import Equipe from "../components/Equipe";
// import ResultTab from "../components/ResultTab";
// import ScoreTab from "../components/ScoreTab";
export default {
  components: {
    Equipe
    // ResultTab,
    // ScoreTab
  },
  data() {
    return {
      teams: [],
      tabBar: [
        { name: "Equipe", date: new Date("0"), active: true }
        // {
        //   name: "Poissons Samedi",
        //   date: new Date("June 24, 2023 00:00:00 GMT+02:00"),
        //   active: false
        // },
        // {
        //   name: "Classement Samedi",
        //   date: new Date("June 24, 2023 00:00:00 GMT+02:00"),
        //   active: false
        // },
        // {
        //   name: "Poissons Dimanche",
        //   date: new Date("June 25, 2023 00:00:00 GMT+02:00"),
        //   active: false
        // },
        // {
        //   name: "Classement Dimanche",
        //   date: new Date("June 25, 2023 21:00:00 GMT+02:00"),
        //   active: false
        // },
        // {
        //   name: "Classement final",
        //   date: new Date("June 25, 2023 21:30:00 GMT+02:00"),
        //   active: false
        // }
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
    makeActive(newActive) {
      for (const tab of this.tabBar) {
        tab.active = false;
      }
      newActive.active = true;
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
  height: 50px;
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
  list-style: none;
}

.tab-bar > ul > li > span {
  margin: 0;
  min-width: 150px;
  height: 100%;
  border-right: solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tab-bar > ul > li:last-child > span {
  border-right: none;
}

.tab-bar > ul > li:hover > span {
  background: #4b4b4b;
}

.active {
  background: #4b4b4b;
}

.phone_tab_button {
  display: none;
}
</style>
