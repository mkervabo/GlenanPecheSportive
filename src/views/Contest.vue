<template>
  <div class="contest-fond">
    <div class="contest-article contest-sub">
      <h2 class="contest-title orange">A savoir</h2>
      <br />
      <div class="contest-content">
        <p>
          L'Open se déroulera sur deux jours du samedi 25 Juin au dimanche 26
          Juin 2022. Pour plus d'informations rendez-vous
          <router-link class="link" to="/annonce">ici</router-link> !
        </p>
        <p>
          Les pré-inscriptions sont fermées.
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
    <div class="contest-article contest-info">
      <h2 class="contest-title dark-blue">Programme</h2>
      <br />
      <div class="contest-content">
        <p>
          Téléchargez le règlement 2022
          <a
            href="/contest/Réglement-open-des-Glénan-2022.pdf"
            class="link2 font"
            >en cliquant ici</a
          >
        </p>
        <p>
          Instructions importantes pour tous les compétiteurs:
          <a href="/" class="link2"
            >cliquez ici à quelques jours de la compétition !</a
          >
        </p>
        <h2>Vendredi 24 juin</h2>
        <p>
          <span class="font">A partir de 10h:</span> chez notre partenaire
          <span class="blue"> CN DIFFUSION PORT LA FORET</span>, remise du
          programme et des documents (carnets de prises, bracelets compétiteurs,
          N° d'équipe, carte de zone, ...) ainsi que d'une dotation de
          bienvenue.
        </p>
        <p>
          La cale sud de mise à l'eau sera disponible.
          <span class="blue"
            >Il sera interdit de se garer sur le site de la cale ,un parking
            dédié sera prévu.</span
          >
        </p>
        <p>L’emplacement obligatoire des bateaux est le ponton extérieur.</p>

        <p>
          <span class="font">A partir de 19h:</span> pot de bienvenue sur la
          base a terre.
        </p>

        <p>
          Pour la navigation des deux journées : nous vous rappelons que la
          vitesse est limitée à l’intérieur de l’Archipel. Le non-respect de
          cette limitation peut entrainer l’élimination de l’équipage
          contrevenant. l’Archipel est un spot très fréquenté à cette période et
          il nous paraît INDISPENSABLE de respecter l’ensemble des plaisanciers
          sur zone.
        </p>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=11_caE_Tp7kaPTJreQf4sYrOKRq_7BUw&ehbc=2E312F"
          width="100%"
          height="300"
        ></iframe>
        <h2>Samedi 25 juin</h2>
        <p>Marée: basse mer à 9h10, haute mer à 15h26, coeff. 55</p>
        <p>
          <span class="font">A partir de 5h45:</span> petit déjeuner au village
          pêche.
        </p>
        <p>
          <span class="font">A 6h30:</span> briefing des équipages,
          émargement,remise des paniers pique-nique.
          <span class="blue"
            >Présence obligatoire d'au moins un membre d'équipage.</span
          >
        </p>
        <p>
          <span class="font">A 7h:</span> départ des pontons pour se rendre en
          convoi sur la zone de départ.
        </p>
        <p>
          <span class="font">A 8h:</span> départ lancé de la
          <span class="font">première manche</span>, 20 noeuds maxi, et début de
          la pêche. Carte avec la zone de départ et les limites de zone de pêche
          <a class="link2 font" href="/contest/Carte-zone-de-pêche.gif">ici</a>.
          <span class="orange font"
            >C'est la même zone de pêche que les précédentes éditions</span
          >.
        </p>
        <p>
          Points gps de la zone
          <a
            class="link2 font"
            href="/contest/TraceZonePecheOpenGlenan.gpx"
            download
            >ici</a
          >
        </p>
        <p>
          La zone de pêche doit obligatoirement être reportée sur votre traceur.
          L’organisation se réserve le droit de vérifier cela
        </p>

        <p>
          <span class="font">A 17h00:</span> fin de 1ère manche, pointage visuel
          en sortie de zone obligatoire pour
          <span class="font">tous les équipages</span> (possibilité d'y mesurer
          des poissons) et retour immédiat sur PORT LA FORÊT.
          <span class="font">Important:</span> s'agissant d'une compétition en
          no-kill intégral, tous les poissons pêchés doivent être relâchés
          vivants, quelque soit l'espèce. Des contrôles aléatoires de viviers
          sont possibles.
        </p>
        <p>
          <span class="font">A 19h:</span> affichage des résultats de la 1ère
          manche, et pot offert par GPS au village pêche.
        </p>
        <p>
          <span class="font">A partir de 20h30:</span> copieux repas des
          équipages au village pêche (langoustines, cochon grillé gratin
          dauphinois, tarte aux fraises). Concert live pour clôturer cette
          journée.
        </p>

        <h2>Dimanche 26 juin</h2>
        <p>Marée: basse mer à 9H57, haute mer à 16H04, coeff. 59</p>
        <p>
          <span class="font">A partir de 5h45:</span> petit déjeuner au village
          pêche.
        </p>
        <p>
          <span class="font">A 6h30:</span> briefing des équipages, émargement,
          remise des paniers pique-nique.
          <span class="blue"
            >Présence obligatoire d'au moins un membre d'équipage.</span
          >
        </p>
        <p>
          <span class="font">A 7h:</span> départ des pontons pour se rendre en
          convoi sur la zone de départ.
        </p>
        <p>
          <span class="font">A 8h:</span> départ lancé de la seconde manche, 20
          noeuds maxi, et début de la pêche.
        </p>
        <p>
          <span class="font">Déjeuner:</span> les paniers piquenique seront
          remis aux équipages à la base à terre avant le départ.
        </p>
        <p>
          <span class="font">A 15h00:</span> fin de 2ème manche, pointage visuel
          en sortie de zone et retour immédiat sur Port la forêt.
        </p>
        <p>
          <span class="font">A 16h30:</span> affichage des résultats de la
          seconde manche et des résultats définitifs et remise des prix.
          Présence de tous les équipages indispensable, beaucoup de lots de
          grande valeur seront remis par tirage au sort !
        </p>
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
