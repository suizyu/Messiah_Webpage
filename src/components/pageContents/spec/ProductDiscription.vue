<template>
    <div class="discriptions">
        <div class="logo-container">
            <img src="../../../assets/images/logo_white_pc.png" 
                alt="最果てのメサイア(ロゴ)"
                class="logo">
        </div>
        <dl class="product-discriptions">
            <div>
                <dt>タイトル</dt>
                <dd>最果てのメサイア</dd>
            </div>
            <div>
                <dt>ジャンル</dt>
                <dd>ストーリーRPG</dd>
            </div>
            <div>
                <dt>プレイ人数</dt>
                <dd>1人</dd>
            </div>
            <div>
                <dt>プラットフォーム</dt>
                <dd>未定</dd>
            </div>
            <div>
                <dt>希望小売価格</dt>
                <dd>未定</dd>
            </div>
            <div>
                <dt>CERO</dt>
                <dd>審査予定</dd>
            </div>
        </dl>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import ContentDiv from '../../atoms/ContentDiv.vue'
export default Vue.extend({
    components: {
        ContentDiv
    }
})
</script>
<style scoped>
    .discriptions {
        margin: 10px auto;
        width: 50vw;
        font-size: 1.75rem;
        background: transparent;
        color: #fff;
    }
    .discriptions > div {
        margin: 0 20px;
    }
    .logo-container {
        display: flex;
        align-items: center;
    }
    .logo {
        width: 30vw;
        max-width: 350px;
        min-width: 200px;
    }
    .product-discriptions {
        display: flex;
        flex-wrap: wrap;
        text-align: left;
        min-width: 250px;
        max-width: 300px;
    }
    .product-discriptions div {
        margin: 5px 10px;
        flex-grow: 1;
    }
    .product-discriptions dt {
        font-size: 1rem;
    }
    @media (min-width: 961px) {
        .discriptions {
            display: flex;
            justify-content: center;
            align-content: center;
        }
    }
</style>