<template>
  <main id="#annonce">
    <div class="annonce_info">
      <h2 class="subscription-title orange">A lire</h2>
      <p class="annonce-content dark-olive">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut felis risus,
        sagittis eget quam id, varius ultricies mi. Quisque ac nisl fermentum,
        viverra nunc nec, egestas diam. Nam nec diam sit amet mi vestibulum
        faucibus ut et metus. Nullam in mauris blandit, euismod nibh vel,
        maximus turpis. Donec in nunc augue. Maecenas id ex neque. Donec
        fermentum, nulla tincidunt sagittis congue, ligula massa vulputate
        velit, sed vestibulum neque lectus a nulla.
      </p>
    </div>
    <div class="annonce_equipes white" v-if="teams !== null">
      <table>
        åå
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
