<template>
    <nuxt-link :class="linkClass" :to="link" target="_self">
        <span class="text-block">
            {{ name }}
        </span>
    </nuxt-link>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: ['name', 'link'],
    computed: {
        linkClass() {
            return this.link ? 'menu-link' : 'disable-link'
        }
    }
})
</script>
<style scoped>
    .menu-link,
    .disable-link {
        text-decoration: none;
        position: relative;
        color: white;
        font-size: 1.5rem;
        width: 100%;
    }
    .disable-link {
        color: rgba(255, 255, 255, 0.459);
        pointer-events: none;
    }
    .menu-link:hover {
        cursor: pointer;
        cursor: hand;
    }
    .menu-link::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: white;
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
    }
    .menu-link:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    .text-block {
        font-family: classico-urw, sans-serif;
        font-weight: bold;
    }
     @media (max-width: 960px) {
        .menu-link,
        .disable-link  {
            font-size: 2rem;
        }
    }
</style>