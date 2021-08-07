<template>
    <footer>
        <ContentDiv>
            <p class="footer-text">
                <small>※掲載されている画像はすべて開発中のものです。</small>
            </p>
            <SnsShare />
            <img src="../../assets/images/logo_black_pc.png" 
                alt="最果てのメサイア(ロゴ)" 
                class="corporate-logo" />
            <p class="footer-text">
                <small>©2021 Fluere stars All rights reserved.</small>
            </p>
        </ContentDiv>
    </footer>
</template>
<script lang="ts">
import Vue from 'vue'
import ContentDiv from '../atoms/ContentDiv.vue'
import SnsShare from '../molecules/SnsShare.vue'
export default Vue.extend({
    components: {
        ContentDiv,
        SnsShare
    }
})
</script>
<style scoped>
    footer {
        color: #3c3f4d;
        background: white;
    }
    .footer-text {
        text-align: center;
        margin: 5px auto;
    }
    .corporate-logo {
        height: 20vh;
        max-height: 50px;
        display: block;
        margin: 20px auto 10px;
    }
</style>