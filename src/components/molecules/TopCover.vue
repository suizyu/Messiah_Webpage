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
      height: 110vh; background: linear-gradient(rgb(93, 134, 26) 0%, rgba(73, 180, 130, 0.84) 61.91%, rgba(161, 217, 255, 0.46) 75.31%, rgba(255, 255, 255, 0) 99.22%, rgba(0, 128, 128, 0) 100%);
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
    width: 35vw;
    min-width: 400px;
  }
</style>