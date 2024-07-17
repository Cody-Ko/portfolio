<template>
  <MainCard/>
</template>

<script>
import MainCard from './components/MainCard.vue'

export default {
  name: 'App',
  components: {
    MainCard,
  }
}
</script>

<style>

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  width: 100%;
  height: 100vh;
}

</style>
