<template>
  <nav>
    <a href="/association" class="header_button">
      <div class="header_button_filter">Association</div>
    </a>
    <a href="/contest" class="header_button">
      <div class="header_button_filter">Competition</div>
    </a>
    <a href="/agenda" class="header_button">
      <div class="header_button_filter">Agenda</div>
    </a>
    <a href="/partenaire" class="header_button">
      <div class="header_button_filter">Partenaire</div>
    </a>
    <a href="/gallery" class="header_button">
      <div class="header_button_filter">Galerie</div>
    </a>
  </nav>
</template>

<style>
nav {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(58, 58, 58, 0.6);
  position: absolute;
  bottom: 0;
}

.nav_01 {
  background: url("../assets/kitten/kitten01.png");
}

.nav_02 {
  background: url("../assets/kitten/kitten02.jpg");
}

.nav_03 {
  background: url("../assets/kitten/kitten03.jpeg");
}

.nav_04 {
  background: url("../assets/kitten/kitten04.jpg");
}

.nav_05 {
  background: url("../assets/kitten/kitten05.jpg");
}

.nav_06 {
  background: url("../assets/kitten/kitten06.jpeg");
}

.header_button {
  font: caption;
  font-size: 14px;
  font-weight: bold;
  clip-path: circle(40%);
  height: 120px;
  width: 120px;
  color: #f37538;
  z-index: 1;
  transition: all 150ms;
  background: #3a3a3a;
}

.header_button:hover {
  height: 130px;
  width: 130px;
}

.header_button_filter {
  height: 100%;
  width: 100%;
  /*background-color: rgba(242, 242, 242, 0.4);*/
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
