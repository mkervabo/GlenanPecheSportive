<template>
  <main>
    <div class="rules">
      <div class="subscription-title dark-blue">Title</div>
      <div class="rules-content dark-olive">blablabla c'est important</div>
    </div>
    <div>
      <div class="form">
        <div class="subscription-title orange">Patron</div>
        <IdForm class="form" />
      </div>
      <div class="form">
        <div class="subscription-title orange">Mousse</div>
        <IdForm class="form" />
      </div>
    </div>
  </main>
</template>

<script>
import IdForm from "../components/IdForm";

export default {
  components: {
    IdForm
  }
};
</script>

<style>
main {
  height: 100%;
  background: #65aee2;
  font: caption;
  display: flex;
  justify-content: center;
}

.subscription-title {
  font: caption;
  font-weight: bold;
  font-size: 20px;
  margin: 10px;
}

.form {
  background: #3a3a3a;
}

.rules {
  background: #f2f2f2;
  max-width: 80vw;
}

.rules-content {
  font: caption;
  margin: 10px;
  text-align: justify;
}
</style>
