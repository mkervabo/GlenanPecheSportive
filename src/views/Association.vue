<template>
  <div class="association-fond">
    <div class="association-article association-pres">
      <h2 class="association-title dark-blue">Qui somme nous ?</h2>
      <div class="association-content">
        <p>Présentation du bureau</p>
        <br />
        <p v-for="(member, i) in members" :key="i">
          <span class="font" :class="member.color">{{ member.name }}: </span
          >{{ member.role }}
        </p>
      </div>
    </div>
    <div class="association-article association-pres">
      <h2 class="association-title dark-blue">Nom : Les GLENAN</h2>
      <div class="association-content">
        <p>
          Position géographique :
          <span class="orange">47°43:01 Nord - 4°00:00 0uest</span>
        </p>
        <p>Caractéristique : <span class="orange">Paradis sur terre</span></p>
        <p>
          Les <span class="blue">Glénan</span> sont un archipel de 9 îles
          principales situé à une dizaine de milles de Concarneau et de
          Fouesnant, commune à laquelle l'archipel est rattaché
        </p>
        <p>
          Pas insulaires jusqu'au néolithique, les lles sont occupées par
          l'homme depuis toujours comme l'ont prouvées de nombreuses fouilles.
        </p>
        <p>
          La plus ancienne carte mentionnant les
          <span class="blue">Glénan</span> remonte à
          <span class="orange">1313</span> dans l'atlas maritime de
          <span class="dark-blue">Pierre Vesconte</span>, ou l'archipel figure
          sous le nom de <span class="blue">Grana</span>. En
          <span class="orange">1466</span> elles sont nommées
          <span class="blue">Glaram</span> et c'est en
          <span class="orange">1585</span> qu'elles deviennent
          <span class="blue">Glénan</span>.
        </p>
        <p>
          La principale ile, <span class="blue">Saint Nicolas</span>, tire son
          nom d'un prieuré qui y fut construit au moyen-âge.
        </p>
        <p>
          L'archipel a appartenu à
          <span class="blue">l'Abbaye de Rhuis</span> du
          <span class="orange">moyen-âge jusqu'à la révolution française</span>.
          De tout temps la masse d'îles et de cailoux a été une zone de flibuste
          ou de défense de la côte par sa position stratégique. Les pêcheurs qui
          vivaient sur les iles s'accomodaient tant bien que mal de ces
          visiteurs ponctuels (forbans, corsaires anglais, etc...)
        </p>
        <br />
        <p>
          En <span class="orange">1755</span>, débute la construction du fort
          sur <span class="blue">l'ile Cigogne</span>, dont le positionnement
          est parfait.
        </p>
        <p>
          Voilà une description des îles en <span class="orange">1772</span> par
          <span class="dark-blue">le Commandant De La Rosière</span>, tellement
          bien faite qu'elle mérite d'être citée in extenso :
        </p>
        <p>
          « On appelle les <span class="blue">Glénan</span>, douze petites îles
          entremêlées et environnées d'une quantité de rochers dessus et dessous
          l'eau, qui sont à trois petites lieues au sud sud-est de la
          <span class="blue">pointe de Mousterlin</span>, dont l'étendue de
          l’est à l'ouest est de deux lieues et du sud au nord d'une lieue.
        </p>
        <p>
          Quatre de ces îles :
          <span class="blue">Saint-Nicolas, Drenec, Cigogne et Bananec</span>,
          forment un port appelé La Chambre, assez étendu pour contenir 30
          navires et où le mouillage est excellent par deux brasses au plus. il
          y a une passe à l’est et une à l’ouest, qui en facilitent la sortie à
          tous vents, et les bâtiments y sont d’autant mieux placés qu’ils ne
          sauraient être aperçus que lorsque l’on n’est plus à portée de les
          éviter. Il est défendu par un fort construit sur
          <span class="blue">l'ile Cigogne</span> qui répand son feu à l’est au
          nord et à l'ouest, mais qui est encore imparfait, et sur lequel il n’y
          a que deux pièces de canon.
        </p>
        <p>
          Il y a sur <span class="blue">l'île Saint-Nicolas</span>, qui couvre
          le port au sud, quelques bâtiments militaires, une chapelle et deux
          batteries, ensemble de six canons, pour la défense de deux petites
          anses de sable qu'elle a, l'une au nord, et l'autre au sud, et qui lui
          servent de port.
        </p>
        <p>
          <span class="blue">L'île de Penfret</span>, la plus à l'est, est la
          plus grande et serait susceptible de quelque culture. On peut mouiller
          à l'est et au nord de celle-ci par 10-12 brasses. Un fortin y serait
          très bien placé et très utile pour la protection du cabotage et de la
          pêche. Il y a dans cette île un bon puits d'eau douce.
        </p>
        <p>
          Celle de <span class="blue">Loc'h</span>, ou de
          <span class="blue">l'Etang</span>, la plus au sud et la plus grande
          après la précédente, a, au sud-ouest, une petite anse appelée
          <span class="blue">Port-Sterval</span>, où il reste à basse mer deux
          brasses d'eau et dont l'entrée est en partie défendue par
          <span class="blue">le fort Cigogne</span>. Il y a au milieu de cette
          ile un étang qui sèche quelquefois et un puits d'eau saumâtre. La
          partie du nord serait assez élevée pour mettre à couvert du feu de
          <span class="blue">l'Isle Cigogne</span>.
        </p>
        <p>
          Entre les <span class="blue">Glénan</span> et la
          <span class="blue">pointe de Mousterlin</span>, est un gros rocher
          appelé <span class="blue">l'lle aux moutons</span>, et au sud sud-est
          de ce dernier, le banc des Pourceaux qu'on laisse à gauche, lorsqu'on
          vient des Etocs de Penmarc'h, et qu'on passe en terre des
          <span class="blue">Glénan</span>. « On peut passer entre ce banc et
          <span class="blue">l'Ile aux Moutons</span>, mais il faut beaucoup
          d'attention pour éviter les rochers ».
        </p>
        <br />
        <p>
          Au cours du <span class="orange">XIXème siècle</span>, les îles
          changent de mains plusieurs fois au fil de l'essor de la pêche
          (construction des viviers de <span class="blue">St Nicolas</span> en
          <span class="orange">1870</span>) et des sècheries de poisson, d'une
          modeste activité agricole, et même de l'activité plus controversée de
          la fabrication de soude.
        </p>
        <p>
          Au <span class="orange">XXème siècle</span>, les îles se modèlent
          comme nous les connaissons aujourd'hui : Acquisition de
          <span class="blue">l'Ile du Loc'h</span> par la
          <span class="dark-blue">famille Bolloré</span> en
          <span class="orange">1920</span> et création du « centre nautique des
          <span class="blue">Glénans</span>» par les époux Viannay en
          <span class="orange">1947</span> qui se déploie toujours aujourd'hui
          sur <span class="blue">Penfret, Cigogne, Bananec et Drennec</span>. Il
          faut d'ailleurs noter que la premiere implantation du centre nautique
          s'est faite sur Le Loch, prêté à l'époque par la<span
            class="dark-blue"
          >
            Famille Bolloré</span
          >. Autrefois prêtée, aujourd'hui cloturée, tel est le destin du Loch.
        </p>
        <br />
        <p>
          Avec l'essor de la plaisance, des liaisons maritimes, du centre
          nautique, du Centre international de Plongée, les
          <span class="blue">Glénan</span> sont devenus un terrain de jeu
          (aujourd'hui seuls deux pêcheurs professionnels y sont basés en
          saison) connu partout pour la clarté des eaux du lagon qui en font un
          véritable <span class="blue">Tahiti breton</span>.
        </p>
      </div>
    </div>
    <div class="association-article association-pres">
      <h2 class="association-title dark-blue">
        LA PÊCHE AUX GLÉNAN: Comment ça marche ?
      </h2>
      <div class="association-content">
        <p>
          Pas question, bien entendu de révéler les spots (pas si secrets
          d'ailleurs) des vainqueurs de l'Open des Glénan, mais juste de vous
          donner quelques indications générales sur la pêche aux leurres aux
          Iles. Pour cela nous avons interrogé Monsieur X, ancien vainqueur de
          l'Open des Glénan (il ne veut pas réveler son identité de peur de se
          faire gronder par les autres compétiteurs).
        </p>
        <br />
        <p>
          <span class="blue bold">Génan Pêche Sportive:</span> Alors Monsieur X,
          les Glénan, comment ça marche ?
        </p>
        <br />
        <p>
          <span class="orange">Monsieur X:</span> Alors là mon p'tit gars, je
          vais te dire: Aux Glénan, il y a « en gros » deux zones: l'intérieur
          et l'extérieur. A l'intérieur, on trouve beaucoup de zones sableuses,
          des herbiers, des zones de laminaires, des bordures, des gros pavés
          (on vous le dit c'est un paradis). Petit, si tu ne comprends pas ce
          que je te dis, l'intérieur c'est ce qui est en bleu clair sur ta
          cartographie. Au menu à l'intérieur: du bar évidemment, du petit lieu
          (attention à la taille minimum), du pagre, de la gueule pavée (et
          oui), de l'aiquillette, et, et, et de la VIEILLE. Comme tu n'as pas
          l'air très finaud, je suis obligé de te dire que tu pêcheras mieux à
          l'intérieur quand il y aura de l'eau (c'est fort ça, non ?), enfin
          plus d'eau, c'est-à-dire entre + 2 et-2 de la Pleine Mer.
        </p>
        <p>
          <span class="blue">GPS:</span> Bien Monsieur X, un petit truc, une
          astuce pour l'intérieur ?
        </p>
        <p>
          <span class="orange">Monsieur X:</span> Oh, comme tu y vas petit.
          Compte pas sur moi pour te dire qu'entre l'intérieur et l'extérieur,
          il y a les sorties, avec des effets de chasse d'eau et du courant. Les
          autres pêcheurs vont me gronder. Tu trouveras.
        </p>
        <p>
          <span class="orange">Monsieur X:</span> Et l’extérieur, alors c’est
          comment ?
        </p>
        <p>
          <span class="orange">Monsieur X:</span> Grand mon gars, très grand.
          Rien Des plateaux immergés à 10/15/20/25 mètres, des petits courants
          quand on sait les trouver, des remontées brutales, des cailloux qui
          sortent. Le paradis je te dis….
        </p>
        <p><span class="blue">GPS:</span> Ça va Monsieur X</p>
        <p>
          <span class="orange">Monsieur X:</span> Oui petit, tu comprends ça
          fait longtemps.
        </p>
        <p>
          Donc dehors tu as jusqu'à 40/45 Métres de fond et c'est aussi varié
          qu'à l'intérieur.
        </p>
        <p>
          Petite différence: la taille des poissons. Tu as l'air benêt, mais tu
          as déjà du comprendre. A l'extérieur les VIEILLES sont grosses, très
          grosses.
        </p>
        <p>
          <span class="blue">GPS:</span> Nos pêcheurs veulent savoir s'il y a du
          courant aux Glénan ?
        </p>
        <p>
          <span class="orange">Monsieur X:</span> Pas trop, mais assez. Tu ne
          veux pas mes spots en plus, non ?
        </p>
        <p>
          <span class="blue">GPS:</span> Non bien sur mais juste un dernier
          truc. Juré nous ne répèterons pas!
        </p>
        <p>
          <span class="orange">Monsieur X:</span>
          Tu pousses petit, je vais avoir des histoires. Un dernier truc, mais
          tu ne dis pas que ça vient de moi, il vont me taper sinon. Je le dis
          vite pour ne pas laisser de traces: la desc... c'est l'E. Tu répètes
          pas hein !
        </p>
        <br />
        <p>
          <span class="blue">GPS:</span> Et pour les leurres Monsieur X, qu'est
          ce qui marche aux Glénan ?
        </p>
        <p>
          <span class="orange">Monsieur X:</span> Ben dis donc t'es curieux toi.
          Tu veux pas savoir la taille de ma canne non plus? Bon je vais te
          dire. Les jeunes y pêchent avec des trucs en plastique mou ou en
          plastique dur. Moi, j'ai un secret: la couenne de porc stockée dans le
          sel pendant 4 mois et dans le gasoil 6 semaines, c'est redoutable.
        </p>
        <p>
          Un dernier truc petit. Il y a aussi des cailloux cachés dans l'eau
          claire, tout petits et tout vicieux. Gaffe aux embases si tu es
          NORMAND
        </p>
        <p>
          <span class="blue">GPS:</span> Et bien, il ne reste plus qu'à
          remercier Monsieur X de ses précieux conseils, qui n'ont l'air de
          rien, mais qui sont très surs. Oui, Monsieur X, une dernière précision
          ?
        </p>
        <p>
          <span class="orange">Monsieur X:</span> Oui, j’oubliais. Les plus
          belles godailles je les ai prises à Saint Nicolas, mon gars.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import marked from "marked";

const r = require.context("../association", true, /\.json$/);
const members = r.keys().map(file => r(file));

export default {
  computed: {
    members() {
      return members;
    }
  },
  methods: {
    markdown(input) {
      return marked(input, { sanitize: true });
    }
  }
};
</script>
<style>
.association-fond {
  background: #65aee2;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.association-article {
  margin: 10px;
  padding: 10px;
  background: #f2f2f2;
  color: #3a3a3a;
}

.association-title {
  font: caption;
  font-weight: bold;
  font-size: 25px;
  margin: 10px;
}

.association-content {
  font: caption;
  margin: 10px;
  text-align: justify;
  font-size: 15px;
}
.association-pres {
  max-width: 800px;
}

span {
  font-weight: bold;
}
</style>
