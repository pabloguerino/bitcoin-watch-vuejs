<template>
  <div id="app">
    <h1>Bitcoin Watcher</h1>

    <lastPrice></lastPrice>
    <history></history>

    <div class="disclamer">
      This data was produced from the CoinDesk Bitcoin Price Index (USD).
      <br>
      <a href="https://github.com/pabloguerino/bitcoin-watch-vuejs">Vue.js test project by Pablo Guerino</a>
      <br>
      MIT License
    </div>
  </div>
</template>

<script>
  import lastPrice from './components/lastPrice.vue';
  import history from './components/history.vue';

  export default {
    name: 'app',

    components: {
      lastPrice,
      history
    },
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Indie+Flower|Montserrat');

  $font-italic: 'Indie Flower', cursive;
  $gray: #ddd;
  $black: #111;

  html {
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  body {
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    background: $black;
    color: $gray;
  }

  h1 {
    text-decoration: underline;
    font-size: 2rem;
  }

  .disclamer {
    font-family: $font-italic;
    font-style: italic;
    color: $gray;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: 2vh;
    font-size: 1.2rem;

    a {
      color: $gray;
      text-decoration: none;
    }
  }
</style>
