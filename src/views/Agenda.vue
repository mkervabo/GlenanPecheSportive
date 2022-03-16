<template>
  <main id="agenda">
    <div class="body">
      <AgendaElem event="Open des Glénan" date="25/06/2022 au 26/06/2022">
        <p>
          La compétition se déroulera sur deux jours du Samedi 25 Juin au
          dimanche 26 Juin 2021.
        </p>
        <div class="agenda-article">
          <img class="agenda_img" src="../assets/contest/annonce2021.png" />
        </div>
      </AgendaElem>
    </div>
  </main>
</template>

<script>
import AgendaElem from "../components/AgendaElem";

export default {
  components: {
    AgendaElem
  }
};
</script>

<style>
#agenda {
  width: 100%;
  background: #65aee2;
  font: caption;
  display: flex;
  justify-content: center;
}

#agenda > .body {
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: auto;
}

.agenda_img {
  max-width: 100%;
  max-height: 300px;
  margin: auto;
  object-fit: contain;
}

.agenda-article {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
