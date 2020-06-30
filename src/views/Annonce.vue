<template>
  <main id="#annonce">
    <div class="annonce_info">
      <h2 class="subscription-title orange">A lire</h2>
      <p class="annonce-content dark-olive">
        En cette période compliquée le bureau de Glenan Pêche Sportive a décidé
        de ne pas organiser l’édition 2020. <br />
        En effet notre date de repli après la date initiale du 20/21 juin était
        le 4/5 octobre. Cette date voulait ne pas pénaliser les compétitions de
        septembre déjà prévues, ni aucun évènement de pêche en mer. or, le Grand
        Pavois se fera sur cette date. De nombreux compétiteurs et partenaires
        sont sur les deux évènements ce qui était très gênant.<br />
        D’autres éléments ont motivé notre décision : <br />
        Tout d’abord, l’open des Glenan mobilise beaucoup de ressources tant
        humaines que matérielles. Nos partenaires ne seront sans doute pas
        fâchés de se reporter sur 2021 et notre 10ème anniversaire....enfin
        fêté.<br />
        Enfin, et ce n’est pas la moindre de nos explications, pour les
        compétiteurs, les partenaires et même nous les bénévoles, l’open des
        Glenan est synonyme longue journée, de beau temps et de «douce nuit ».
        Autant de facteurs impossible à retrouver en octobre.<br />
        Nous vous remercions tous, partenaires, compétiteurs, de votre
        bienveillance à l’égard de Glénan Pêche Sportive et vous assurons de
        notre motivation à organiser un 10ème anniversaire de l’open propre à
        envoyer le Covid sur une autre galaxie, effrayé qu’il va être par le
        bruit que nous allons faire à Concarneau et aux Îles.<br /><br />
        Pour toute question nous ne répondrons que sur
        <a class="link" href="https://www.facebook.com/glenanpechesportive/"
          >facebook</a
        >
        en mp ou sur notre mail que vous trouverez
        <a class="link" href="mailto:infos@glenanpechesportive.fr">ici</a>.
      </p>
    </div>
    <!-- <div class="annonce_equipes white" v-if="teams !== null">
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
    <img v-else src="/loading.svg" /> -->
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
//       teams: null
//     };
//   },
//   mounted() {
//     window.console.log("mounted");
//     const minTime = new Promise(resolve => setTimeout(resolve, 1000));
//     fetch("/.netlify/functions/teams")
//       .then(res => res.json())
//       .then(e => minTime.then(() => e))
//       .then(teams => (this.teams = teams));
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
