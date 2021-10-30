<template>
    <a :href="linkTo" class="card" target="_blank">
        <div class="thumbnail">
            <img :src="imgPath(imgName)" class="thumbnailImg">
        </div>
        <div class="info">
            <span class="date">{{ date }}</span>
            <p>{{ title }}</p>
        </div>
    </a>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:{
        date: String,
        title: String,
        imgName: {
            type: String,
            required: false,
            default: 'logo_black_pc.png'
        },
        linkTo: {
            type: String,
            required: false,
            default: "https://github.com/suizyu"
        }

    },
    methods: {
        imgPath(name: string) {
            return require("~/assets/images/" + name);
        }
    }
})
</script>
<style scoped>
    .info  {
        background-color: white;
        padding: 5px 10px;
        height: 55px;
        text-align: left;
    }
    a.card {
        display: block;
        text-decoration: none;
        margin: 0 auto;
    }
    .card {
        width: 300px;
        transition:0.5s all;
    }
    .card p, .date {
        color: #3C3F4D;
        margin: 0 auto;
    }
    .date  {
        font-size: 0.8rem;
    }
    .thumbnail {
        height: 125px;
        position: relative;
        overflow: hidden;
        background-color: grey;
    }
    .thumbnailImg {
        position: absolute;
        height: 100%;
        bottom: 0;
        transition: all 0.5s;
    }
    .card:hover .thumbnailImg {
        transform: scale(1.25, 1.25);
        transition: 0.5s all;
    }
</style>