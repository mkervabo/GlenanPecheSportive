<template>
  <main id="agenda">
    <div class="body">
      <AgendaElem event="Pas d'évenement prévut pour le moment">
        <p>
          Pour plus d'info suivez nous sur
          <a class="link" href="https://www.facebook.com/glenanpechesportive/"
            >facebook</a
          >
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
