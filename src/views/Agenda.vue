<template>
  <main id="agenda">
    <div class="body">
      <AgendaElem event="Open des Glénan">
        <p>
          En cette année 2020 nous vous convions au 10eme anniversaire de l'Open
          des Glénan. C'est une compétition de pêche au bar No Kill.
        </p>
        <p>
          Qui se déroule sur 2 jours. La base à terre se trouve à Concarneau(29)
          et le compétition se déroule sur l'archipel des Glénan.
        </p>
        <p>
          Carte de la zone
          <a class="link" href="/contest/Carte-zone-de-pêche.git">ici</a>, c'est
          la même zone que les précédentes éditions. Pour une description plus
          complete c'est
          <router-link to="/contest" class="link">ici</router-link>. La liste
          des inscrits est
          <router-link to="/annonce" class="link">par là</router-link>.
        </p>
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
</style>
