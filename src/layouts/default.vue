<template>
  <transition name="page">
    <div class="wrap">
      <LoadingScreen :isLoading="isLoading" />
      <HeaderMenu />
      <Nuxt class="contents" />
      <Footer />
    </div>
  </transition>
</template>
<script lang="ts">
import HeaderMenu from '../components/organisms/HeaderMenu.vue'
import Footer from '../components/organisms/Footer.vue'
import LoadingScreen from '../components/molecules/LoadingScreen.vue'
import Vue from 'vue'
export default Vue.extend({
  name: 'default',
  components: {
    HeaderMenu,
    Footer,
    LoadingScreen
  },
  data() {
    return {
      isLoading: true
    }
  },
  mounted() {
    let self = this
    Vue.nextTick(() => {
        setTimeout(() =>  {
            self.isLoading = false
        }, 1000)
    })
  },
})
</script>
<style>
  * {
    text-decoration: none;
    font-family: serif;
    font-style: normal;
    text-decoration: none;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
  html,
  body {
    min-height: 100%;
    height: auto !important;
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
  .wrap{
    margin: 0;
    padding: 0;
  }
  .wrap::before {
    content: "";
    display: block;
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background: url(../assets/images/bg/french-stucco.png), linear-gradient(315deg, #1239a5, #2e0158);
    background-blend-mode: color-burn;
    z-index: -1;
  }
  img {
      user-select: none;
  }
  .contents {
    color: #ededec;
  }
  .page-enter {
   opacity: 0;
  }
  .page-enter-active {
    transition: opacity 3.5s;
  }
</style>
