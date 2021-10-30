<template>
    <div class="scroll-guide">
        <span>SCROLL</span>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>
<style scoped>
    .scroll-guide span {
        position: absolute;
        left: 2px;
        top: 1px;
        color: white;
        font-size: 0.7rem;
        font-family: kinuta-maruminshinano-stdn, serif;
        font-weight: 400;
        font-style: normal;
        letter-spacing: 0.05rem;
        -ms-writing-mode: tb-rl;
        -webkit-writing-mode: vertical-rl;
        writing-mode: vertical-rl;
    }
    .scroll-guide {
        display: inline-block;
        position: absolute;
        right:5%;
        bottom: 0vh;
        height: 38vh;
        z-index: 3;
    }
    .scroll-guide::before {
        content: '';
        position: absolute;
        width: 1px;
        height: 38vh;
        background: rgba(255, 255, 255, 0.281);
    }
    .scroll-guide::after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 1px;
        height: 38vh;
        background: white;
        animation: pathmove 2s cubic-bezier(1, 0, 0, 1) infinite;
    }
    @keyframes pathmove {
        0% {
            transform: scale(1, 0);
            transform-origin: 0 0;
        }
        35% {
            transform: scale(1, 1);
            transform-origin: 0 0;
        }
        35.1% {
            transform: scale(1, 1);
            transform-origin: 0 100%;
        }
        70%, 100% {
            transform: scale(1, 0);
            transform-origin: 0 100%;
        }
    }
</style>