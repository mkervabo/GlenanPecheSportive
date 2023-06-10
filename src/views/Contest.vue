<template>
  <div class="contest-fond">
    <div class="contest-article contest-sub">
      <h2 class="contest-title orange">A savoir</h2>
      <br />
      <div class="contest-content">
        <p>
          L'Open se déroulera sur deux jours du samedi 24 Juin au dimanche 25
          Juin 2023. Pour plus d'informations rendez-vous
          <router-link class="link2" to="/annonce">ici</router-link> !
        </p>
        <p>
          Les pré-inscriptions sont ouverte !
        </p>
      </div>
      <br />
      <h2 class="contest-title orange">Classement</h2>
      <div
        v-on:click="contest22 = !contest22"
        class="contest-content link cursor"
      >
        Classement 2022
      </div>
      <div v-show="contest22" class="link2">
        <p class="white">
          Cliquez ci-dessous pour consulter les résultats des manches et le
          classement général de l'open des Glénan 2022.
        </p>
        <a class="link2" href="/contest/classement/2022/1er_manche_2022.pdf"
          >1ere manche Open des Glénan 2022, samedi 24 juin</a
        >
        <br />
        <a class="link2" href="/contest/classement/2022/2eme_manche_2022.pdf"
          >2eme manche Open des Glénan 2022, dimanche 25 juin</a
        >
        <br />
        <a
          class="link2"
          href="/contest/classement/2022/Classement_general_2022.pdf"
          >Classement général des équipes et des équipages Open des Glénan
          2022</a
        >
      </div>
      <div
        v-on:click="contest21 = !contest21"
        class="contest-content link cursor"
      >
        Classement 2021
      </div>
      <div v-show="contest21" class="link2">
        <p class="white">
          Cliquez ci-dessous pour consulter les résultats des manches et le
          classement général de l'open des Glénan 2021.
        </p>
        <a
          class="link2"
          href="/contest/classement/2021/classement_1er_manche.pdf"
          >1ere manche Open des Glénan 2021, samedi 12 juin</a
        >
        <br />
        <a class="link2" href="/contest/classement/2021/classement_general.pdf"
          >Classement général des équipes et des équipages Open des Glénan
          2021</a
        >
      </div>
      <div
        v-on:click="contest18 = !contest18"
        class="contest-content link cursor"
      >
        Classement 2018
      </div>
      <div v-show="contest18" class="link2">
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
      <div v-show="contest15" class="link2">
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
      <h2 class="contest-title dark-blue">Planning</h2>
      <br />
      <div class="contest-content">
        <p>
          Bonjour à tous les compétiteurs, Cette page va évoluer, merci de la
          consulter à quelques jours de l’Open des Glénan 2023. Petite précision
          l'organisation se réserve le droit de modifier les horaires des
          manches en fonction des derniers bulletins météo, que vous pouvez
          consulter sur<span class="orange">
            <a href="https://www.windguru.cz/48469" class="link2 font">
              Windguru</a
            >
            ou sur
            <a
              href="https://fr.windfinder.com/forecast/iles_de_glenan_le_loc_h"
              class="link2 font"
              >Windfinder</a
            ></span
          >
        </p>
        <p>
          La présence est obligatoire lors des briefings. Voici les informations
          pratiques et les instructions pour cette compétition.
        </p>
        <p>
          <span class="font">En cas d’arrivée avant le vendredi 23/06</span>,
          Vous pourrez mettre à l’eau à la cale sud de Port la Forêt.Mais vous
          n'aurez pas accès au parking dédié à notre organisation.
        </p>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=11_caE_Tp7kaPTJreQf4sYrOKRq_7BUw&ehbc=2E312F"
          width="100%"
          height="300"
        ></iframe>
        <p class="font">
          Arrivée à Port la Forêt le vendredi 23/06:
        </p>
        <p>
          <span class="font">La cale sud de mise à l’eau</span> sera disponible
          le vendredi. Le bateau viendra s’amarrer au ponton de la base à terre,
          et la remorque sera garée sur un parking dédié tout proche, un
          fléchage est prévu pour ce parking.
        </p>
        <br />
        <p>
          <span class="font">Important:</span>
          <span class="orange">Prévoir 2 bouts d'amarrage de 25m environ</span>
          (avant et arrière), et des pare-battages. Les bateaux seront amarrés à
          couple sur plusieurs largeurs, et les conditions météo imposent de
          solides amarrages.
        </p>
        <p>
          <span class="font"
            >Les dossiers avec tous les documents indispensables</span
          >
          à la compétition seront à retirer chez<span class="blue">
            CN DIFFUSION</span
          >
          le vendredi 24, à partir de 10h00 jusqu’à 18h00. Et après sur notre
          base a terre.Il est demandé que tous les dossiers soient retirés le
          vendredi, si vous ne pouvez pas venir le
          <span class="font">vendredi</span> arrangez vous avec un autre
          compétiteur qui le récupérera pour vous.
        </p>
        <p>
          <span class="font">Pêche:</span> s'agissant d'une compétition en
          no-kill intégral, tous les poissons pêchés doivent être relâchés
          vivants, quelque soit l'espèce. Les viviers des compétiteurs pourront
          être inspectés de façon aléatoire à la fin de chaque journée de pêche
          par un commissaire de l'organisation, en lien avec la réglementation
          qui nous l'impose.
        </p>
        <p>
          Les fichiers informatiques avec les points délimitant la zone de pêche
          sont à installer sur vos appareils
          <a
            class="link2 font"
            href="/contest/TraceZonePecheOpenGlenan.gpx"
            download
            >.gpx</a
          >
        </p>
        <p>
          <span class="font">Carburant:</span> la station de carburant du port
          de plaisance de Port la Forêt distribue du SP95
        </p>

        <h2>1er jour de compétition samedi 24/06</h2>

        <p>
          Veille VHF obligatoire pendant la compétition, le canal sera
          communiqué lors du briefing du samedi matin
        </p>
        <p class="font">Points d’attention pour les équipes:</p>
        <p>
          Au
          <span class="font"
            >briefing de 6h30, la présence d’au moins 1 membre de chaque équipe
            est obligatoire</span
          >, un appel sera fait et une feuille d’émargement sera à signer.
        </p>
        <p>
          <span class="font">En fin de manche (17h00)</span>, pointage visuel
          obligatoire en mer sur la zone de sortie à 17h30 max (même zone que
          zone de départ au nord de Penfret) de tous les bateaux auprès du
          bateau commissaire qui sera là. Il sera possible de mesurer des
          poissons en même temps.
        </p>

        <h2>2ème jour de compétition dimanche 25/06</h2>

        <p class="font">Points d’attention pour les équipes:</p>
        <p>
          Au
          <span class="font"
            >briefing de 6h30, la présence d’au moins 1 membre de chaque équipe
            est obligatoire</span
          >, un appel sera fait et une feuille d’émargement sera à signer. Les
          paniers piquenique seront remis à ce moment-là.
        </p>
        <p>
          <span class="font">En fin de manche à 15h00 maxi</span>, pointage
          visuel obligatoire sur la zone de sortie (même zone que zone de
          départ) de tous les bateaux auprès du bateau commissaire qui sera là.
          Il sera possible de mesurer des poissons en même temps.
        </p>
        <p>
          Au retour à Port la Forêt ,merci de sortir vos bateaux avant la remise
          des prix. Vous pourrez vous garer sur le parking remorques.
        </p>
        <p>
          Merci à chacun de bien respecter ces consignes,
          <span class="font"
            >c’est important pour la sécurité des personnes</span
          >, et pour que
          <span class="font">cette compétition soit un plaisir</span> pour tout
          le monde.
        </p>

        <p>Au plaisir de vous rencontrer bientôt, L’équipe GPS</p>
      </div>
    </div>
    <div class="contest-article contest-info">
      <h2 class="contest-title dark-blue">Programme</h2>
      <br />
      <div class="contest-content">
        <p>
          Téléchargez le règlement 2023
          <a
            href="/contest/Réglement-open-des-Glénan-2023.pdf"
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
        <h2>Vendredi 23 juin</h2>
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
            >Il sera interdit de se garer sur le site de la cale, un parking
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
        <h2>Samedi 24 juin</h2>
        <p>Marée:haute mer à 8h18,basse mer à 15h36, coeff. 53</p>
        <p>
          <span class="font">A partir de 6h00:</span> petit déjeuner au village
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
          <span class="font">A 6h45:</span> :Émargement et remise des paniers
          repas.
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
        <p><span class="font">A 19h30:</span> fermeture de la buvette.</p>
        <p>
          <span class="font">A partir de 20h00:</span> copieux repas des
          équipages au village pêche (langoustines, cochon grillé gratin
          dauphinois, tarte aux fraises). Concert live pour clôturer cette
          journée.
        </p>

        <h2>Dimanche 25 juin</h2>
        <p>Marée:haute mer à 10h06,basse mer à 16h24, coeff. 47</p>
        <p>
          <span class="font">A partir de 6h00:</span> petit déjeuner au village
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
          <span class="font">A 6h45:</span> :Émargement et remise des paniers
          repas.
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
      contest22: false,
      contest21: false,
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

.link {
  color: #0185c6;
}

.link:hover {
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
