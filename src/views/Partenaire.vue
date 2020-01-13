<template>
  <div class="partenaire-fond">
    <div class="partenaire-body">
      <div class="partenaire-icone partenaire-icone1">
        <a href="http://fiiish.com/">
          <img class="partner-icone" src="../assets/partner/fiiish.jpg" />
          <br />
          <div class="link">Fiiish</div>
        </a>
      </div>
      <div class="partenaire-icone partenaire-icone2">
        <a href="http://www.suzukimarine.fr/">
          <img class="partner-icone" src="../assets/partner/suzuki.png" />
          <br />
          <div class="link">Suzuki marine</div>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.partenaire-fond {
  background: #65aee2;
  width: 100%;
}

.partenaire-body {
  max-width: 1000px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.partenaire-icone {
  padding: 5px;
  width: 300px;
  margin: 5px;
}

.partenaire-icone1 {
  background-color: #f2f2f2;
  color: #3a3a3a;
}

.partenaire-icone2 {
  background-color: #3a3a3a;
  color: #f2f2f2;
}
</style>
