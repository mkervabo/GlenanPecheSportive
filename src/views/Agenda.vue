<template>
  <div class="agenda-fond">
    <div class="agenda-body">
      <AgendaElem />
      <agendaElem />
    </div>
  </div>
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
.agenda-fond {
  width: 100%;
  background: #65aee2;
  font: caption;
  display: flex;
  justify-content: center;
}

.agenda-body {
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
