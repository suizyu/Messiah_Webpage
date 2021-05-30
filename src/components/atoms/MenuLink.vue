<template>
    <a class="menu-link" :href="link" target="_blank">
        <span class="text-block">
            {{ name }}
        </span>
    </a>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: ['name', 'link']
})
</script>
<style scoped>
    .menu-link {
        text-decoration: none;
        position: relative;
        color: white;
        font-size: 1.5rem;
        width: 100%;
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
        display: block;
    }
</style>