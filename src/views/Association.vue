<template>
  <div class="association-fond">
    <div class="association-article association-pres">
      <h2 class="association-title dark-blue">L'Association</h2>
      <div class="association-content">
        <p>Présentation du bureau</p>
        <br />
        <p><span class="font blue">Président: </span>Hervé Cotonnec</p>
        <p><span class="font blue">Vice président: </span>Romain Marion</p>
        <p>
          <span class="font blue">Responsable commissaires Trésorier: </span
          >Patrick Tudal
        </p>
        <p>
          <span class="font blue">Secrétaires: </span>Valérie Le Bartz et Lucie
          Trouillebout
        </p>
        <p>
          <span class="font blue">Responsable Inscriptions:</span>
          Yannick et Frédérique Kervabon
        </p>
        <p>
          <span class="font blue">Responsable pub annuaire: </span>Christophe Le
          Bartz
        </p>
        <p>
          <span class="font blue"
            >Gestion à Terre "Mise à l'eau et petit déjeuné ":
          </span>
          Jean-Loup et Anne Marie Weber
        </p>
        <p>
          <span class="font orange">Membres actifs:</span> Gérard Guernalec,
          Christophe Guillerme, Jean François Le Buhannic, Claude Diascorn
        </p>
        <br />
        <br />
        <p>
          A l'attention des membres de l'association Glénan Pêche Sportive,nous
          vous demandons de remplir un bulletin d'adhésion pour l'année 2020.
          <a class="link2" href="/GPS-Bulletin-dadhésion-2020.pdf"
            >Rendez vous sur cette page.</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import marked from "marked";

const r = require.context("../association", true, /\.json$/);
const articles = r.keys().map(file => r(file));

export default {
  computed: {
    articles() {
      return articles;
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
</style>
