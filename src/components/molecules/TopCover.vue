<template>
    <div class="top-cover" 
      :style="{ '--innerHeight' : this.innerHeight }">
      <div class="top-info">
        <img src="../../assets/images/logo_black.png" alt="最果てのメサイア(ロゴ)" />
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
    data() {
      return {
        innerHeight: "",
        lastInnerHeight: 0
      }
    },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener('resize', this.resizeEvent)
        this.resizeEvent()
      })
    },
    methods: {
      resizeEvent(): void {
        if (this.lastInnerHeight != window.innerHeight) {
          this.lastInnerHeight = window.innerHeight
          this.innerHeight = window.innerHeight + "px"
        }
      }
    },
    destroyed() {
      window.removeEventListener('resize', this.resizeEvent)
    }
})
</script>
<style scoped>
  .top-cover {
      --innerHeight: 100vh;
      margin: 0;
      height: var(--innerHeight);
      background: url(../../assets/images/bg/sky01.png) center center no-repeat;
      background-size: cover;
      z-index: 1;
  }
  .top-info {
      display: flex;
      margin: 0;
      align-items: flex-end;
      height: 95%;
  }
  .top-info img {
    display: block;
    margin: 0 auto;
    padding: 0 15px;
    width: 35vw;
    min-width: 360px;
  }
</style>