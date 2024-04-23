<template>
  <main id="agenda">
    <div class="body">
      <div v-for="event in articles" :key="event.title" class="agenda-event">
        <h2 class="font dark-blue agenda-title">{{ event.title }}</h2>
        <div v-if="event.startDate">
          <span class="orange date">{{ formatDate(event.startDate) }}</span>
          <span class="orange date" v-if="event.endDate">
            au {{ formatDate(event.endDate) }}</span
          >
        </div>
        <div v-if="event.body" v-html="markdown(event.body)"></div>
        <img v-if="event.thumbnail" class="agenda_img" :src="event.thumbnail" />
      </div>
    </div>
  </main>
</template>

<script>
import marked from "marked";
import { DateTime } from "luxon";

const r = require.context("../agenda", true, /\.json$/);
const articles = r.keys().map(file => r(file));

export default {
  computed: {
    articles() {
      return articles;
    }
  },
  methods: {
    markdown(input) {
      return marked(input, { sanitize: true });
    },
    formatDate(input) {
      return DateTime.fromISO(input)
        .setLocale("fr")
        .toFormat("dd LLL yyyy");
    }
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

.agenda-event {
  background: #f2f2f2;
  max-width: 500px;
  min-height: 60px;
  margin: 10px;
  padding: 10px;
  text-align: justify;
  font-size: 15px;
}

.agenda-title {
  font-size: 18px;
}

.date {
  font: caption;
  font-weight: bold;
}
</style>
