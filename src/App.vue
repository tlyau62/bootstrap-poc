<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>

    <p>current theme: {{curTheme.name}}</p>

    <button
      type="button"
      class="btn btn-primary"
      v-for="theme in themes"
      :key="theme.name"
      @click="switchTheme(theme)"
    >{{theme.name}}</button>

    <router-view />
  </div>
</template>

<script>
import defaultTheme from "@/theme/default.theme.scss";
import customTheme from "@/theme/custom.theme.scss";
import ceruleanTheme from "@/theme/cerulean.theme.scss";

export default {
  data() {
    const themes = [
      {
        name: "default",
        theme: defaultTheme
      },
      {
        name: "custom",
        theme: customTheme
      },
      {
        name: "cerulean",
        theme: ceruleanTheme
      }
    ];

    return {
      curTheme: themes[0],
      themes
    };
  },
  methods: {
    switchTheme(newTheme) {
      this.curTheme.theme.unuse();
      newTheme.theme.use();
      this.curTheme = newTheme;
    }
  },
  created() {
    console.log(this.curTheme.theme);
    this.curTheme.theme.use();
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
