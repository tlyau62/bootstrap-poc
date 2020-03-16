<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>

    <button type="button" :class="[theme.btn, theme['btn-red']]" @click="switchDefault">Primary</button>
    <button type="button" :class="[theme.btn, theme['btn-red']]" @click="switchTheme2">Theme 2</button>

    <router-view />
  </div>
</template>

<script>
import appStyles from "./app.module.scss";
import theme2Styles from "./theme2.module.scss";

export default {
  data() {
    return {
      theme: appStyles
    };
  },
  methods: {
    switchDefault() {
      this.theme = appStyles;
    },
    switchTheme2() {
      this.theme = theme2Styles;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
