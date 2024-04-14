<template>
  <div>
    <div v-for="event in articles" :key="event.title" class="agenda-event">
      <h2 class="font dark-blue agenda-title">{{ file.title }}</h2>
      <div v-if="file.date">
        <span class="orange date">{{ formatDate(file.date) }}</span>
      </div>
      <span>download</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["file"]
};
</script>

<style></style>
