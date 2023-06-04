<template>
  <nav>
    <label class="phone_nav_button" for="phone_nav_trigger">
      <fa-icon :icon="['fas', 'bars']" class="blue"></fa-icon>
    </label>
    <input id="phone_nav_trigger" type="checkbox" style="display: none;" />
    <ul>
      <li
        v-for="route in $router.options.routes.filter(route => route.meta)"
        :key="route.path"
        :style="`background-image: url('${route.meta.image}')`"
        class="header_button"
      >
        <router-link class="orange" :to="route.path">
          {{ route.meta.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

export default {
  mounted() {
    window.lol = this;
  }
};
</script>

<style>
nav {
  position: absolute;
  bottom: 0;
  background: rgba(101, 174, 226, 0.4);
  width: 100%;
}

nav > ul {
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;
}
nav > li {
  display: flex;
  flex-wrap: wrap;
}

.header_button {
  font: caption;
  font-size: 14px;
  font-weight: bold;
  height: 100px;
  width: 100px;
  /* line-height: 100px; */
  margin: 0 10px;
  color: #f37538;
  z-index: 1;
  transition: all 150ms;
  background-size: contain;
  background-repeat: no-repeat;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header_button:hover {
  transform: scale(1.1);
}

.phone_nav_button {
  display: none;
}

@media screen and (max-width: 600px) {
  .header_button {
    background-image: none !important;
    margin: 0;
    line-height: 45px;
    width: 100%;
    background: #f2f2f2;
    height: 45px;
    display: block;
  }

  .header_button:hover {
    background: #3a3a3a;
    transform: inherit;
  }

  .phone_nav_button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f2f2f2;
    height: 45px;
    width: 100%;
    border-radius: 0;
    margin: 0;
    padding: 0;
    border: 0;
  }

  .phone_nav_button > svg {
    height: 25px;
    width: 25px !important;
  }

  nav > ul {
    flex-direction: column;
    width: 100%;
    height: auto;
    display: none;
    position: absolute;
  }

  #phone_nav_trigger:checked + ul {
    display: flex;
  }
}
</style>
