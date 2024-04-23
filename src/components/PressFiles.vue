<template>
  <div class="agenda-event press-file">
    <h2 class="font dark-blue agenda-title">{{ file.title }}</h2>
    <div v-if="file.date">
      <span class="orange date">{{ formatDate(file.date) }}</span>
    </div>
    <p>
      <span>{{ file.type }}</span>
    </p>
    <p><a class="link" :href="file.pdf" target="_blank">Ouvrir PDF</a></p>
  </div>
</template>

<script>
import { DateTime } from "luxon";

export default {
  props: ["file"],
  methods: {
    formatDate(input) {
      return DateTime.fromISO(input)
        .setLocale("fr")
        .toFormat("dd LLL yyyy");
    }
  }
};
</script>

<style>
.press-file {
  width: 100%;
}
</style>
