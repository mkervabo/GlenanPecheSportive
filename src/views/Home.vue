<template>
  <main>
    <div class="fond">
      <div class="articles">
        <div
          v-for="article in articles"
          :key="article.title"
          :class="article.color"
        >
          <fa-icon
            v-if="article.icon"
            :icon="['fas', article.icon]"
            class="article-icon"
          ></fa-icon>
          <h2>{{ article.title }}</h2>
          <div v-if="article.startDate">
            <span class="date">{{ formatDate(article.startDate) }}</span>
            <span class="date" v-if="article.endDate">
              au {{ formatDate(article.endDate) }}</span
            >
          </div>
          <img
            v-if="article.thumbnail && article.body"
            class="article-img"
            :src="article.thumbnail"
          />
          <img
            v-if="article.thumbnail && !article.body"
            class="article-illustration"
            :src="article.thumbnail"
          />
          <div
            v-if="article.body"
            v-html="markdown(article.body)"
            class="body"
          ></div>
        </div>
        <router-link to="gallery" class="gallery">
          <div class="gallery-filter">
            <h2>
              <a class="gallery-title orange">Galerie</a>
            </h2>
          </div>
        </router-link>
      </div>
    </div>
  </main>
</template>
<script>
import marked from "marked";
import { DateTime } from "luxon";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFish,
  faExclamationCircle,
  faCloud
} from "@fortawesome/free-solid-svg-icons";

library.add(faFish);
library.add(faExclamationCircle);
library.add(faCloud);

const r = require.context("../text", true, /\.json$/);
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
      return DateTime.fromISO(input).toFormat("dd LLL yyyy");
    }
  }
};
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

.article-img {
  width: 100%;
  height: 80px;
  margin: auto;
  object-fit: contain;
}

.article-illustration {
  width: 100%;
  max-height: 300px;
  margin: auto;
  object-fit: contain;
}

.theme-black {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  background: #3a3a3a;
  color: #f2f2f2;
  width: 350px;
}

.theme-black > .article-icon {
  font-size: 40px;
  margin: 10px;
  color: #f37538;
}

.theme-black > h2 {
  font: caption;
  font-weight: bold;
  font-size: 30px;
  margin: 10px;
  color: #f37538;
}

.theme-black > div > .date {
  font: caption;
  font-weight: bold;
  color: #0185c6;
}

.theme-black > div > .date:first-child {
  padding-left: 80px;
}

.theme-black > .body {
  font: caption;
  font-size: 15px;
  margin: 10px;
  text-align: justify;
}

.theme-black > .body > p > a {
  color: #f37538;
}

.theme-white {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  background: #f2f2f2;
  color: #3a3a3a;
  width: 350px;
}

.theme-white > .article-icon {
  font-size: 40px;
  margin: 10px;
  color: #0185c6;
}

.theme-white > h2 {
  font: caption;
  font-weight: bold;
  font-size: 30px;
  margin: 10px;
  color: #0185c6;
}

.theme-white > div > .date {
  font: caption;
  font-weight: bold;
  color: #f37538;
}

.theme-white > div > .date:first-child {
  padding-left: 80px;
}

.theme-white > .body {
  font: caption;
  margin: 10px;
  text-align: justify;
  font-size: 15px;
}

.theme-white > .body > p > a {
  color: #65aee2;
}

.gallery {
  width: 370px;
  min-height: 370px;
  background: url(../assets/gallery/gallery15.jpg);
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

.theme-dark-blue {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  background: #0185c6;
  color: #3a3a3a;
  width: 350px;
}

.theme-dark-blue > .article-icon {
  font-size: 40px;
  margin: 10px;
  color: #f2f2f2;
}

.theme-dark-blue > h2 {
  font: caption;
  font-weight: bold;
  font-size: 30px;
  margin: 10px;
  color: #f2f2f2;
}

.theme-dark-blue > div > .date {
  font: caption;
  font-weight: bold;
  color: #3a3a3a;
}

.theme-dark-blue > div > .date:first-child {
  padding-left: 80px;
}

.theme-dark-blue > .body {
  font: caption;
  font-size: 15px;
  margin: 10px;
  text-align: justify;
}

.theme-dark-blue > .body > p > a {
  color: #f37538;
}
</style>
