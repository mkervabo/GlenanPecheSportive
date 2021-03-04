<template>
  <main id="agenda">
    <div class="body">
      <AgendaElem event="Open des Glénan" date="12/06/2021">
        <p>
          La compétition se déroulera sur une seule journée le Samedi 12 Juin
          2021.
        </p>
        <div class="agenda-article">
          <img class="agenda_img" src="../assets/contest/annonce2021.png" />
        </div>
      </AgendaElem>
      <AgendaElem event="Grand Pavois" date="28/09/2021 au 03/10/2021">
        <p>
          Venez rencontrer nos partenaires, lors du Grand Pavois à la Rochelle .
          Du mardi 28 septembre au dimanche 3 octobre 2021
        </p>
        <div class="agenda-article">
          <img class="agenda_img" src="../assets/partner/grand_pavois.png" />
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
