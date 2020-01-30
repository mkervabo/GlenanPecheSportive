<template>
  <div id="app">
    <div class="reseau">
      <fa-icon :icon="['fab', 'instagram']" class="icone dark-olive"></fa-icon>
      <a href="https://www.facebook.com/glenanpechesportive/"
        ><fa-icon
          :icon="['fab', 'facebook-square']"
          class="icone dark-blue"
        ></fa-icon
      ></a>
      <a href="mailto:infos@glenanpechesportive.fr"
        ><fa-icon
          :icon="['fas', 'envelope-square']"
          class="icone white"
        ></fa-icon
      ></a>
      <a href="tel:+33677707126"
        ><fa-icon
          :icon="['fas', 'phone-square-alt']"
          class="icone orange"
        ></fa-icon
      ></a>
      <fa-icon :icon="['fab', 'twitter-square']" class="icone blue"></fa-icon>
    </div>
    <header class="intro">
      <router-link to="/">
        <img class="logo" src="./assets/logo.png" />
      </router-link>
      <Caroussel />
      <NavBar />
    </header>
    <router-view class="content" />
    <footer>
      <a href="http://fiiish.com/">
        <img class="partner-icone" src="./assets/partner/fiiish.jpg" />
      </a>
      <a href="http://www.suzukimarine.fr/">
        <img class="partner-icone" src="./assets/partner/suzuki.png" />
      </a>
      <a href="http://www.spiderwire.com/">
        <img class="partner-icone" src="./assets/partner/spider_wire.png" />
      </a>
      <a href="http://www.grand-pavois.com/">
        <img
          class="partner-icone"
          src="./assets/partner/grand-pavois-2020.png"
        />
      </a>
      <a href="https://www.salon-peche-mer.com/">
        <img
          class="partner-icone"
          src="./assets/partner/salon-peche-en-mer.jpg"
        />
      </a>
      <a>
        <img class="partner-icone" src="./assets/partner/peche-en-mer.jpg" />
      </a>
      <a href="http://acp-atlantique.com/">
        <img class="partner-icone" src="./assets/partner/ACP.png" />
      </a>
      <a href="https://www.kerfil.com/">
        <img class="partner-icone" src="./assets/partner/kerfil.jpg" />
      </a>
      <a
        href="http://www.mediterranee.creditmaritime.fr/mer-assur-1264/id-menu-1046.html"
      >
        <img class="partner-icone" src="./assets/partner/mer_assur.gif" />
      </a>
      <a href="https://www.mc-technologies.fr/">
        <img class="partner-icone" src="./assets/partner/mc_tech.png" />
      </a>
      <a href="https://catalog.ultimate-fishing.net/">
        <img
          class="partner-icone"
          src="./assets/partner/Ultimate-Fishing.jpg"
        />
      </a>
      <a href="http://www.besse.fr/">
        <img class="partner-icone" src="./assets/partner/Besse.gif" />
      </a>
      <a href="https://www.aon.com/home/index.html#">
        <img class="partner-icone" src="./assets/partner/Aon.svg" />
      </a>
      <a
        href="https://www.beneteau.com/fr/beneteau-evenement-page-associee/participer-au-barracuda-tour"
      >
        <img class="partner-icone" src="./assets/partner/barracuda-tour.png" />
      </a>
      <a>
        <img class="partner-icone" src="./assets/partner/tenryu.jpg" />
      </a>
      <a href="https://www.rodhouse.fr/fr/">
        <img class="partner-icone" src="./assets/partner/rodhouse2.jpg" />
      </a>
      <a href="https://www.alre-peche.com/">
        <img class="partner-icone" src="./assets/partner/alre-peche.jpg" />
      </a>
      <a href="http://www.lepasco.com/">
        <img class="partner-icone" src="./assets/partner/le-pasco.png" />
      </a>
      <a
        href="https://fr-fr.facebook.com/pages/category/Media/RonProduction-134411313302276//"
      >
        <img class="partner-icone" src="./assets/partner/ron-production.jpg" />
      </a>
      <a href="http://work.atm-communication.com/">
        <img class="partner-icone" src="./assets/partner/Atm-com.png" />
      </a>
      <a>
        <img
          class="partner-icone"
          src="./assets/partner/Cap-Marine-Assurances.gif"
        />
      </a>
      <a href="http://www.ticafishing.com/">
        <img class="partner-icone" src="./assets/partner/tica.jpg" />
      </a>
      <a href="https://www.navicom.fr/">
        <img class="partner-icone" src="./assets/partner/navicom.svg" />
      </a>
    </footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Caroussel from "./components/Caroussel";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faFacebookSquare,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneSquareAlt,
  faEnvelopeSquare
} from "@fortawesome/free-solid-svg-icons";

library.add(faInstagram);
library.add(faFacebookSquare);
library.add(faTwitterSquare);
library.add(faPhoneSquareAlt);
library.add(faEnvelopeSquare);

export default {
  components: {
    NavBar,
    Caroussel
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  background: #65aee2;
}

body {
  margin: 0;
}

.intro {
  height: 50vh;
  position: relative;
}

.logo {
  position: absolute;
  left: 20px;
  height: 130px;
  z-index: 2;
  transition: all 150ms;
}

.logo:hover {
  transform: scale(1.05);
}

.reseau {
  background-color: rgba(242, 242, 242, 0.3);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 6px;
}

.icone {
  width: 50px;
  text-align: center;
  font-size: 50px;
  transition: transform 200ms;
}

.icone:hover {
  transform: scale(0.9);
}

.link:hover {
  color: #f37538;
}

.dark-blue {
  color: #0185c6;
}

.blue {
  color: #65aee2;
}

.orange {
  color: #f37538;
}

.dark-olive {
  color: #3a3a3a;
}

.white {
  color: #f2f2f2;
}

.font {
  font: caption;
  font-weight: bold;
}

.partner-icone {
  height: 100px;
  margin: 5px;
}
</style>
