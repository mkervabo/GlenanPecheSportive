<template>
  <div class="contest-fond">
    <div class="contest-article contest-sub">
      <h2 class="contest-title orange">A savoir</h2>
      <br />
      <div class="contest-content">
        <p>
          L'Open se déroulera sur une seule journée le Samedi 12 Juin 2021. Pour
          plus d'informations rendez-vous
          <router-link class="link" to="/annonce">ici</router-link> !
        </p>
        <p>
          Les pré-inscriptions sont ouverte jusqu'aux 30 mars,
          <a class="link2" href="/subscription">rendez-vous ici</a>.
        </p>
      </div>
      <br />
      <h2 class="contest-title orange">Classement</h2>
      <div
        v-on:click="contest18 = !contest18"
        class="contest-content link cursor"
      >
        Classement 2018
      </div>
      <div v-show="contest18" class="link">
        <p class="white">
          Le nombre de bars péchés et maillés augmente nettement cette année:
          494 bars ont été validés puis relachés. A noter que de nombreux
          poissons non maillés ont été péchés également. Bien sûr, tous les
          poissons péchés ont été relâchés vivants.
          <br />
          Cliquez ci-dessous pour consulter les résultats des manches et le
          classement général de l'open des Glénan 2018.
        </p>
        <a
          class="link2"
          href="/contest/classement/2018/Classement-1ere-manche.pdf"
          >1ere manche Open des Glénan 2018, samedi 23 juin</a
        >
        <br />
        <a
          class="link2"
          href="/contest/classement/2018/Classement-2eme-manche.pdf"
          >2eme manche Open des Glénan 2018, dimanche 24 juin</a
        >
        <br />
        <a class="link2" href="/contest/classement/2018/Classement-general.pdf"
          >Classement général des équipes et des équipages Open des Glénan
          2018</a
        >
      </div>
      <div
        v-on:click="contest17 = !contest17"
        class="contest-content link cursor"
      >
        Classement 2017
      </div>
      <div v-show="contest17" class="link">
        <p class="white">
          Le nombre de bars péchés et maillés augmente nettement cette année:
          Quelques chiffres sur la pêche cette année: 357 bars maillés ont été
          péchés puis relachés. A noter que de nombreux poissons non maillés ont
          été péchés également. Bien sûr, tous les poissons péchés ont été
          relâchés vivants.
          <br />
          Cliquez ci-dessous pour consulter les résultats des manches et le
          classement général de l'open des Glénan 2017.
        </p>
        <a
          class="link2"
          href="/contest/classement/2017/Classement-1ere-manche.pdf"
          >1ere manche Open des Glénan 2017, samedi 1er juillet</a
        >
        <br />
        <a
          class="link2"
          href="/contest/classement/2017/Classement-2eme-manche.pdf"
          >2eme manche Open des Glénan 2017, dimanche 2 juillet</a
        >
        <br />
        <a class="link2" href="/contest/classement/2017/Classement-general.pdf"
          >Classement général des équipes et des équipages Open des Glénan
          2017</a
        >
      </div>
      <div
        v-on:click="contest16 = !contest16"
        class="contest-content link cursor"
      >
        Classement 2016
      </div>
      <div v-show="contest16" class="link">
        <p class="white">
          Quelques chiffres sur la pêche en 2016: 258 bars ont été péchés puis
          relachés. Pour mémoire en 2015, 137 bars péchés, et en 2014, 190 bars
          avaient été péchés.
          <br />
          Cliquez ci-dessous pour consulter les résultats des manches et le
          classement général de l'open des Glénan 2016.
        </p>
        <a
          class="link2"
          href="/contest/classement/2016/Classement-1ere-manche.pdf"
          >1ere manche Open des Glénan 2016, samedi 18 juin</a
        >
        <br />
        <a
          class="link2"
          href="/contest/classement/2016/Classement-2eme-manche.pdf"
          >2eme manche Open des Glénan, dimanche 19 juin</a
        >
        <br />
        <a class="link2" href="/contest/classement/2016/Classement-general.pdf"
          >Clasement général Open des Glénan 2016</a
        >
      </div>
      <div
        v-on:click="contest15 = !contest15"
        class="contest-content link cursor"
      >
        Classement 2015
      </div>
      <div v-show="contest15" class="link">
        <p class="white">
          Quelques chiffres sur la pêche en 2015: 137 bars ont été péchés puis
          relachés (115 par l'Open et 22 par les Barracudas). Pour mémoire en
          2014, 190 bars avaient été péchés puis relachés (172 par l'Open et 18
          par les barracudas).
          <br />
          Cliquez ci-dessous pour consulter les résultats des manches et le
          classement général de l'open des Glénan 2015.
        </p>
        <p>
          <a class="link2" href="/contest/classement/2015/equipage.jpg"
            >Liste des équipes et équipages</a
          >
          <br /><br />
          <a
            class="link2"
            href="/contest/classement/2015/Classement-1ere-manche.pdf"
            >1ere manche Open des Glénan, samedi 20 juin</a
          >
          <br />
          <a
            class="link2"
            href="/contest/classement/2015/Classement-2eme-manche.pdf"
            >2eme manche Open des Glénan, dimanche 21 juin</a
          >
          <br />
          <a
            class="link2"
            href="/contest/classement/2015/Classement-general.pdf"
            >Classement général Open des Glénan 2015</a
          >
        </p>
        <a
          class="link2"
          href="/contest/classement/2015/Classement-1ere-manche-Barracuda.pdf"
          >1ere manche Barracuda Concarneau 2015</a
        >
        <br />
        <a
          class="link2"
          href="/contest/classement/2015/Classement-2eme-manche-Barracuda.pdf"
          >2eme manche Barracuda Concarneau 2015</a
        >
        <br />
        <a
          class="link2"
          href="/contest/classement/2015/Classement-general-Barracuda.pdf"
          >Classement général Barracuda Concarneau 2015</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contest18: false,
      contest17: false,
      contest16: false,
      contest15: false
    };
  },
  methods: {
    showClassement(show) {
      if (show == true) show = false;
      else show = true;
    }
  }
};
</script>

<style>
.contest-fond {
  background: #65aee2;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
}

.contest-article {
  font: caption;
  font-size: 15px;
  text-align: justify;
  padding: 20px;
  background: #3a3a3a;
  color: #f2f2f2;
  margin: 10px;
}

.contest-info {
  max-width: 700px;
  background: #f2f2f2;
  color: #3a3a3a;
}

.contest-sub {
  width: 250px;
}

.day {
  font-size: 19px;
  color: #f37538;
}

.link2 {
  color: #f37538;
}

.link2:hover {
  color: #0185c6;
}

.cursor {
  cursor: pointer;
}
</style>
