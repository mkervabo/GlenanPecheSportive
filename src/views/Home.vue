<template>
  <main>
    <div class="fond">
      <div class="articles">
        <div class="next-event">
          <i class="fas fa-exclamation-circle article-icon orange"></i>
          <div class="orange event-name ">Salon de Nantes</div>
          <div class="blue date">00/00/00 - 00/00/00</div>
          <div class="event-description">
            Venez nous rencontrer lors du salon de Nantes. Ce sera l'occasion de
            discuter pêches et de s'inscrire à l'Open. N'oubliez pas de venir
            munie de votre
            <a href="/subscription" class="link">dossier d'inscription</a>.
          </div>
          <a href="/agenda" class="other-event event-description link"
            >Pour les autres evenements à venir c'est ici !</a
          >
          <div class="event-description">
            Et pour avoir les infos en direct suivez nous sur notre page
            <a class="link" href="https://www.facebook.com/glenanpechesportive/"
              >facebook</a
            >.
          </div>
        </div>
        <div class="contest">
          <i class="fas fa-fish article-icon white"></i>
          <div class="contest-title white">Open des Glénan</div>
          <div class="white date">00/00/00 - 00/00/00</div>
          <div class="contest-description">
            En cette année 2020 nous vous convions au 10eme anniversaire de
            l'Open des Glenan. Blablabla c'est un concour de peche, blabla il y
            a un repas.
          </div>
          <div class="contest-description">
            Pour une description plus complete c'est
            <a href="/contest" class="link">ici</a>.
          </div>
          <div class="contest-description">
            Pour vous inscrire c'est
            <a href="/subcription" class="link">par là</a>.
          </div>
        </div>
        <a href="gallery" class="gallery">
          <div class="gallery-filter">
            <a class="gallery-title orange">Galerie</a>
          </div>
        </a>
        <div class="meteo">
          <i class="fas fa-cloud article-icon blue"></i>
          <div class="meteo-title blue">Météo des Glénan</div>
          <div class="meteo-info">
            Pour avoir plus d'infos sur les horaires de marées rendez-vous
            <a
              class="link"
              href="https://mareespeche.com/fr/bretagne-atlantique/concarneau"
              >ici</a
            >.
          </div>
          <div class="meteo-info">
            Pour avoir une vision en direct de la météo sur l'archipel ce sera
            <a class="link" href="https://data.diabox.com/?id=106&view=webcam"
              >par là</a
            >.
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style>
.fond {
  background: #65aee2;
  width: 100%;
  display: flex;
  justify-content: center;
}

.articles {
  width: 1500px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.article {
  margin: 10px;
}

.article-icon {
  font-size: 40px;
  margin: 10px;
}

.next-event {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  background: #3a3a3a;
  color: #f2f2f2;
  width: 350px;
}

.event-name {
  font: caption;
  font-weight: bold;
  font-size: 30px;
  margin: 10px;
}

.event-description {
  font: caption;
  margin: 10px;
  text-align: justify;
}

.meteo {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  background: #f2f2f2;
  color: #3a3a3a;
  width: 350px;
}

.meteo-title {
  font: caption;
  font-weight: bold;
  font-size: 30px;
  margin: 10px;
}

.meteo-info {
  font: caption;
  margin: 10px;
  text-align: justify;
}

.gallery {
  width: 370px;
  height: 370px;
  background: url(../assets/banner/banner00.jpg);
  background-size: cover;
}

.gallery-filter {
  width: 100%;
  height: 100%;
  background: rgba(242, 242, 242, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.gallery-filter:hover {
  background: rgba(242, 242, 242, 0.5);
}

.gallery-title {
  padding: 10px;
  background: rgba(58, 58, 58, 0.8);
  font: caption;
  font-weight: bold;
  font-size: 50px;
}

.contest {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  background: #0185c6;
  color: #3a3a3a;
  width: 350px;
}

.contest-title {
  font: caption;
  font-weight: bold;
  font-size: 30px;
  margin: 10px;
}

.contest-description {
  font: caption;
  margin: 10px;
  text-align: justify;
}

.link {
  color: #65aee2;
}

footer {
  background: rgb(53, 53, 53);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.partner-icone {
  height: 120px;
}

.date {
  padding-left: 80px;
  font: caption;
  font-weight: bold;
}
</style>
