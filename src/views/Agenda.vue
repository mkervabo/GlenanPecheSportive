<template>
  <main id="agenda">
    <div class="body">
      <AgendaElem event="Grand Pavois" date="29/09/2020 au 04/10/2020">
        <p>
          Venez rencontrer nos partenaires, lors du Grand Pavois à la Rochelle .
          Du mardi 29 septembre au dimanche 4 octobre
        </p>
        <div class="agenda-article">
          <img class="agenda_img" src="../assets/grand_pavois_agenda.png" />
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
