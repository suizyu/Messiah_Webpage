<template>
    <a :href="linkTo" class="card" target="_blank">
        <div class="thumbnail">
            <img :src="imgPath(imgName)" class="thumbnailImg">
        </div>
        <div class="info">
            <span class="date">2021/04/21</span>
            <p>公式サイトオープン。</p>
        </div>
    </a>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:{
        imgName: String,
        linkTo: {
            type: String,
            default: "https://github.com/suizyu",
            required: false
        }

    },
    methods: {
        imgPath(name: string) {
            return require("../../assets/images/" + name);
        }
    }
})
</script>
<style scoped>
    .info  {
        background-color: white;
        padding: 5px 10px;
        height: 55px;
    }
    a.card {
        display: block;
        text-decoration: none;
    }
    .card {
        width: 300px;
        transition:0.5s all;
    }
    .card p, .date {
        color: #3C3F4D;
        text-align: left;
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
        transform: scale(1.5, 1.5);
        transition: 0.5s all;
    }
</style>