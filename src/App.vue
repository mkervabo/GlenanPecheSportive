<template>
  <div id="app">
    <div class="reseau">
      <a href="https://www.instagram.com/open_des_glenan/?hl=fr">
        <fa-icon
          :icon="['fab', 'instagram']"
          class="icone dark-olive"
        ></fa-icon>
      </a>
      <a href="https://www.facebook.com/glenanpechesportive/">
        <fa-icon
          :icon="['fab', 'facebook-square']"
          class="icone dark-blue"
        ></fa-icon>
      </a>
      <a href="mailto:infos@glenanpechesportive.bzh">
        <fa-icon
          :icon="['fas', 'envelope-square']"
          class="icone white"
        ></fa-icon>
      </a>
      <a href="tel:+33677707126">
        <fa-icon :icon="['fas', 'phone-square-alt']" class="icone orange">
        </fa-icon>
      </a>
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
      <a v-for="sponsor in sponsors" :key="sponsor.name" :href="sponsor.link">
        <img
          importance="low"
          class="partner-icone"
          :src="sponsor.logo"
          :style="sponsor.whitebackground && 'background: white;'"
        />
      </a>
      <a class="link2 legal" href="/legal">Mention Legal</a>
    </footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Caroussel from "./components/Caroussel";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneSquareAlt,
  faEnvelopeSquare
} from "@fortawesome/free-solid-svg-icons";

library.add(faInstagram);
library.add(faFacebookSquare);
library.add(faPhoneSquareAlt);
library.add(faEnvelopeSquare);

const r = require.context("./sponsors", true, /\.json$/);
const sponsors = r.keys().map(file => r(file));

export default {
  components: {
    NavBar,
    Caroussel
  },
  computed: {
    sponsors() {
      return sponsors;
    }
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

footer {
  background: rgb(53, 53, 53);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
}

a {
  text-decoration: none;
}

.legal {
  position: relative;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
