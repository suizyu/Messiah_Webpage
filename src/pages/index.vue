<template>
    <div class="container">
        <section class="top">
            <TopCover />
        </section>
        <CustomSection class="news">
            <CustomH v-bind="customHParams">News</CustomH>
            <NewsSlider :items="items" />
            <DetailButton :link="'/news/'" />
        </CustomSection>
        <CustomSection class="introduction">
            <CustomH v-bind="customHParams">Introduction</CustomH>
            <Stroy />
            <DetailButton :link="'/introduction/'" />
        </CustomSection>
        <CustomSection class="character">
            <CustomH v-bind="customHParams">Character</CustomH>
            <CharacterAboutSlide />
            <DetailButton :link="'/character/'" />
        </CustomSection>
        <CustomSection class="system">
            <CustomH v-bind="customHParams">System</CustomH>
            <section class="battle">
                <ContentDiv class="buttle-content">
                    <CustomH v-bind="customH2Params" class="battle-h2">
                        Battle
                    </CustomH>
                    <div class="buttle-discription">
                        <h3>砂漠の天候を見極めろ！</h3>
                        <p>
                            砂漠の天候は千変万化！<br>
                            戦闘を有利にも不利にも導きます。<br>
                            <br>
                            天候を支配、あるいは適応するかはあなた次第。<br>
                            敵だけではない対峙と選択で戦略を組もう!<br>
                            <br>
                        </p>
                    </div>
                    <DetailButton :disable=true :color="'#fff'" />
                </ContentDiv>
            </section>
        </CustomSection>
        <CustomSection class="product">
            <CustomH v-bind="customHParams">Product</CustomH>
            <ProdcutDiscription />
        </CustomSection>
    </div>
</template>
<script lang="ts">
import CustomSection from '../components/atoms/CustomSection.vue'
import ContentDiv from '../components/atoms/ContentDiv.vue'
import CustomH from '../components/atoms/CustomH.vue'
import TopCover from '../components/molecules/TopCover.vue'
import DetailButton from '../components/atoms/DetailButton.vue'
import NewsSlider from '../components/pageContents/slide/NewsSlider.vue'
import ProdcutDiscription from '../components/pageContents/product/ProductDiscription.vue'
import Stroy from '../components/pageContents/Introduction/Story.vue'
import CharacterAboutSlide from '../components/pageContents/slide/CharacterAboutSlide.vue'
export default({
    layout: 'default',
    components: {
        CustomSection,
        ContentDiv,
        CustomH,
        TopCover,
        DetailButton,
        NewsSlider,
        ProdcutDiscription,
        Stroy,
        CharacterAboutSlide
    },
    data() {
        return {
            customHParams: {
                level: 1,
                decorate: true
            },
            customH2Params: {
                level: 2,
                decorate: false,
                align: 'left'
            },
            garellyItems: {
                slideItems: [
                    {
                        imgName: "logo_white.png",
                        section: "buttle",
                        id: 0
                    }
                ]
            },
            items: '',
        }
    },
    async asyncData({ $microcms }) {
        const { contents } = await $microcms.get({ endpoint: 'news' })
        return { items: contents }
    }
})
</script>
<style scoped>
    .buttle-content {
        padding: 10px;
        backdrop-filter: blur(3px);
    }
    .battle {
        background: linear-gradient(to right, rgba(198, 255, 221, 0.3), rgb(251, 215, 134, 0.3), rgb(247, 121, 125, 0.3)), url(../assets/images/bg/buttle01.jpg) center center no-repeat;
        background-size: cover;
        margin-top: 2vh;
    }
    .battle h2,
    .battle h3,
    .battle p  {
        text-align: left;
        margin: 2vh auto;
        color: #333;
    }
    .battle h2,
    .battle h3 {
        font-size: 2rem;
    }
    .battle h3 {
        font-family: kinuta-maruminshinano-stdn, sans-serif, serif;
    }
    .battle p {
        font-size: 1.2rem;
    }
</style>