<template>
    <ContentDiv class="story">
        <h3 class="catchphrase">
            蒼の天蓋、灰の淵を越え、世界の果てへ
        </h3>
        <section class="story-main">
            <p>
                観測によって天候が左右される砂漠に囲まれた国、ミフターフ。<br>
                王立観測院による都市の天候安定と、砂漠の部族・砂漠の外の平定を邁進する王国は繁栄の道を辿っていた。<br>
                <br>
                王都から王国の新領土たる灰の街を行き来する運び屋の少年エルヴィスはある夜、王都近郊に停泊中の馴染みの商船で過ごす中騒ぎの音を耳にする。<br>
                音の元へ駆けつけた先にいたのは、かつて義姉を殺した者と同じ仮面を身につけた者達。<br>
                そしてそれに追われる少女、リーフだった。<br>
                <br>
                仮面の集団の正体。<br>
                ≪最果て≫とは何を指すのか。<br>
                <br>
                互いの求める真実へと至るための旅が始まる。
            </p>
        </section>
    </ContentDiv>
</template>
<script lang="ts">
import Vue from 'vue'
import ContentDiv from '../../atoms/ContentDiv.vue'
export default Vue.extend({
    components:{
        ContentDiv
    },
})
</script>
<style scoped>
    .keyword {
        margin: 0;
    }
    .catchphrase {
        font-size: 2rem;
        font-family: kinuta-maruminshinano-stdn, sans-serif, serif;
    }
    .story p,
    .story h3 {
        margin: 5vh auto;
    }
    .story-main p {
        font-size: 1.2rem;
    }
    @media (max-width: 960px) {
        .story-main p {
            text-align: left;
        }
    }
    @media (min-width: 961px) {
        .story-main p {
            text-align: center;
        }
    }
</style>