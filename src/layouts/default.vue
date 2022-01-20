<template>
  <transition name="page">
    <div class="wrap">
      <HeaderMenu />
      <Nuxt />
      <Footer />
    </div>
  </transition>
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
  .container p,
  .container dd,
  .container dt {
    font-family: serif;
  }
  .container p {
    display: block;
    margin: 0 auto;
    font-family: serif;
  }
  .container {
    overflow: hidden;
  }
  .wrap {
    margin: 0;
    padding: 0;
    background: url(../assets/images/bg/french-stucco.png), 
    linear-gradient(315deg, #1239a5, #2e0158);
    background-repeat: repeat;
    background-attachment: fixed;
    background-blend-mode: color-burn;
  }
  img {
      user-select: none;
  }
 .page-enter {
   opacity: 0;
 }
 .page-enter-active {
   transition: opacity 3.5s;
 }
</style>
