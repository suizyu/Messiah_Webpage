<template>
  <div>
    <HeaderMenu />
    <Nuxt />
    <Footer />
  </div>
</template>
<script lang="ts">
import HeaderMenu from '../components/organisms/HeaderMenu.vue';
import Footer from '../components/organisms/Footer.vue';
export default ({
  name: 'default',
  components: {
    HeaderMenu,
    Footer
  }
})
</script>
<style>
  * {
    text-decoration: none;
    font-family:
      kinuta-maruminshinano-stdn,
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    font-style: normal;
    text-decoration: none;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
  .container section {
    width: 100%;
    margin-bottom: 5vh;
  }
  .container {
    background: linear-gradient(#0c2294 0%, #1f0358 100%);
    overflow: hidden;
  }
  .container p {
    display: block;
    margin: 0 auto;
    color: white;
    font-family: kinuta-maruminshinano-stdn, serif;
  }
</style>
