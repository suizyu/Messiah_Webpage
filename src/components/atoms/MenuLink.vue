<template>
    <a class="menu-link" :href="link" target="_blank">
        {{ name }}
    </a>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            linkName: ''
        }
    },
    props: ['name', 'link'],
    mounted() {
        this.linkName = this.name;
        console.log(this.linkName);
        console.log(this.name);
    }
})
</script>
<style>
    .menu-link {
        display: block;
        padding:10px 30px;
        text-decoration: none;
        position: relative;
    }
    .menu-link,
    .menu-link:hover {
        color:#0481A2;
    }
    .menu-link::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 5%;
        width: 80%;
        height: 2px;
        background:#0481A2;
        transition: all .3s;
        transform: scale(0, 1);
        transform-origin: left top;
    }
    .menu-link:hover::after {
        transform: scale(1, 1);
    }

</style>