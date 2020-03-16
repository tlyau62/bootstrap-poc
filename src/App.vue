<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>

    <button type="button" class="btn btn-red" @click="switchDefault">Primary</button>
    <button type="button" class="btn btn-red" @click="switchTheme2">Theme 2</button>

    <router-view />
  </div>
</template>

<script>
import appStyle from './app.useable.scss';
import theme2 from './theme2.useable.scss';

export default {
  methods: {
    switchDefault() {
      theme2.unuse();
      appStyle.use();
    },
    switchTheme2() {
      appStyle.unuse();
      theme2.use();
    }
  },
  created() {
    this.switchDefault();
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
