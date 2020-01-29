<template>
  <main id="agenda">
    <div class="body">
      <AgendaElem event="Salon de Nantes" date="14/02/20 - 16/02/20"
        >Venez nous rencontrer lors du salon de Nantes. Ce sera l'occasion de
        discuter pêches et de s'inscrire à l'Open. N'oubliez pas de venir munie
        de votre
        <router-link to="/subscription" class="link"
          >dossier d'inscription</router-link
        >.</AgendaElem
      >
      <AgendaElem event="Open des Glénan" date="20/06/20 - 21/06/20"
        >En cette année 2020 nous vous convions au 10eme anniversaire de l'Open
        des Glénan.C'est un concour de peche, au bars No Kill. Qui se déroule
        sur 2 jours. La base se trouve à Concarneau(29) et le concours se
        déroule sur l'archipel des Glénan. Plus d'info
        <router-link to="/contest" class="link">ici</router-link></AgendaElem
      >
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
