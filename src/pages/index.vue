<template>
    <div class="container">
        <section class="top">
            <TopCover />
        </section>
        <CustomSection class="news">
            <CustomH v-bind="customHParams">News</CustomH>
            <NewsSlider  :items="items" />
            <DetailButton />
        </CustomSection>
        <CustomSection class="introduction">
            <CustomH v-bind="customHParams">Introduction</CustomH>
            <ContentDiv>
                <p>
                    なんかテキスト。
                </p>
                <div v-for="item in items" :key="item.id">
                    {{item.title}}
                    {{item.id}}
                </div>
                <p>なんかテキスト。</p>
                <div v-for="tips in tipss" :key="tips.id">
                    {{tips.title}} / {{tips.id}}
                </div>
            </ContentDiv>
            <DetailButton :link="'/introduction/'" />
        </CustomSection>
        <CustomSection class="character">
            <CustomH v-bind="customHParams">Character</CustomH>
        </CustomSection>
        <CustomSection class="system">
            <CustomH v-bind="customHParams">System</CustomH>
            <section class="battle">
                <ContentDiv>
                    <CustomH v-bind="customH2Params" class="battle-h2">
                        Battle
                    </CustomH>
                    <div class="buttle-discription">
                        <h3>砂漠の天候を見極めろ！</h3>
                        <p>
                            砂漠の天候は千変万化！<br />
                        </p>
                        <NewsSlider  :items="items" />
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
import CustomSection from '../components/atoms/CustomSection.vue';
import ContentDiv from '../components/atoms/ContentDiv.vue';
import CustomH from '../components/atoms/CustomH.vue';
import DetailButton from '../components/atoms/DetailButton.vue';
import NewsSlider from '../components/pageContents/slide/NewsSlider.vue';
import TopCover from '../components/molecules/TopCover.vue';
import ProdcutDiscription from '../components/pageContents/product/ProductDiscription.vue'
export default({
    layout: 'default',
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
        items: '',
        tipss: ''
        }
    },
    components: {
        CustomSection,
        ContentDiv,
        CustomH,
        DetailButton,
        TopCover,
        NewsSlider,
        ProdcutDiscription,
    },
    async asyncData({ $axios }) {
        try {
            const topNews = await $axios.get( '/api/news');
            const tipss = await $axios.get('/api/keyword');
            return {
                items: topNews.data.contents,
                tipss: tipss.data.contents
            }
        }
        catch(error) {
            console.log(error);
        }
    }
})
</script>
<style scoped>
    .battle {
        background: url(../assets/images/bg/buttle01.png) center center no-repeat;
        margin-top: 2vh;
    }
    .battle h2,
    .battle h3 {
        text-align: left;
        font-size: 2rem;
        margin: 2vh auto;
        color: #000;
    }
    .battle p {
        text-align: left;
        color: #000;
    }
</style>