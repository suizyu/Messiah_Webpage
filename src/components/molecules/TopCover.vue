<template>
    <div class="top-cover">
      <div class="top-info">
        <img src="../../assets/images/logo_black_pc.png" alt="最果てのメサイア(ロゴ)" />
      </div>
      <ScrollGuide />
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import ScrollGuide from '../atoms/ScrollGuide.vue'
export default Vue.extend({
    components: {
        ScrollGuide
    },
})
</script>
<style scoped>
  .top-cover {
      margin: 0;
      height: 100vh;
      background: url(../../assets/images/bg/sky01.png) center center no-repeat;
      background-size: cover;
      z-index: 1;
  }
  .top-info {
      display: flex;
      margin: 0;
      align-items: flex-end;
      height: 95vh;
  }
  .top-info img {
    display: block;
    margin: 0 auto;
    padding: 0 15px;
    width: 35vw;
    min-width: 360px;
  }
</style>