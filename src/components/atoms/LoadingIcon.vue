<template>
    <div class="loading-container">
        <div class="loading"></div>
        <div class="loading-text">Loading...</div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>
<style scoped>
    .loading-container,
    .loading {
        height: 200px;
        position: relative;
        width: 200px;
        border-radius: 100%;
    }
    .loading-container { 
        margin: 40px auto; 
    }
    .loading {
        border: 2px solid transparent;
        border-color: transparent  #fff transparent #FFF ;
        animation: circleRptate 1.5s linear 0s infinite normal;
        transform-origin: 50% 50%;
    }
    .loading-text {
        width: 100%;
        position: absolute;
        top: 0;
        margin-top: 95px;
        text-align: center;
        font-weight: bold;
        color: #ffffff;
        opacity: 0;
        text-transform: uppercase;
        animation: textOpacity 2s linear 0s infinite normal;
    }

    @keyframes circleRptate {
        0%  { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    @keyframes textOpacity {
        0%  { opacity: 0 }
        20% { opacity: 0 }
        50% { opacity: 1 }
        100% { opacity: 0 }
    }
</style>