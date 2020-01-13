<template>
  <div id="app">
    <div class="reseau">
      <i class="fab fa-instagram icone dark-olive"></i>
      <i class="fab fa-facebook-square icone dark-blue"></i>
      <i class="fas fa-envelope icone white"></i>
      <i class="fas fa-phone-square-alt icone orange"></i>
      <i class="fab fa-twitter-square icone blue"></i>
    </div>
    <header class="intro">
      <a herf="/">
        <img class="logo" src="./assets/logo.png" />
      </a>
      <Caroussel />
      <NavBar />
    </header>
    <router-view />
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
      <a href="https://www.catamaran-emelia.com/">
        <img class="partner-icone" src="./assets/partner/mer_assur.gif" />
      </a>
      <a href="https://delalande-peche.fr/">
        <img class="partner-icone" src="./assets/partner/delalande.jpg" />
      </a>
    </footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Caroussel from "./components/Caroussel";

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
  height: 135px;
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
}

.icone {
  width: 50px;
  text-align: center;
  font-size: 50px;
}

.icone:hover {
  font-size: 45px;
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
</style>
