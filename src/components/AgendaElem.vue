<template>
  <div class="agenda-event">
    <div class="font dark-blue">{{ event }}</div>
    <div class="orange date">{{ date }}</div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: String,
    date: String,
    description: String
  }
};
</script>

<style>
.agenda-event {
  background: #f2f2f2;
  max-width: 500px;
  min-height: 60px;
  margin: 10px;
  padding: 10px;
  text-align: justify;
  font-size: 15px;
}
</style>
