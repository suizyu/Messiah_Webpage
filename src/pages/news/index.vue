<template>
    <div class="container">
        <CustomSection>
            <CustomH :level=1 :decorate=true>News</CustomH>
            <div class="all-news">
                <div v-for="item in items" :key="item.id">
                    <InfoCard v-bind="GetInfoItem(item)" class="news" />
                </div>
            </div>
        </CustomSection>
    </div>
</template>
<script lang="ts">
import gsap from 'gsap'
import CustomSection from '../../components/atoms/CustomSection.vue'
import CustomH from '../../components/atoms/CustomH.vue'
import InfoCard from '../../components/atoms/InfoCard.vue'
export default ({
    layout: 'default',
    components: {
        CustomSection,
        CustomH,
        InfoCard
    },
    mounted() {
        this.$nextTick(() => {
            setTimeout(() => {
                this.showInfoCard()
            }, 800)
        })
    },
    methods: {
        GetInfoItem(item) {
            const publishDate = new Date(item.publishedAt)
            const year = publishDate.getFullYear()
            const month = ("00" + (publishDate.getMonth() + 1)).slice(-2)
            const day = ("00" + (publishDate.getDate())).slice(-2)
            const publishDateString = year + "/" + month + "/" + day
            return {
                imgName: item.thumbnail  || "logo_black.png",
                date: publishDateString,
                title: item.title,
                linkTo: item.url
            }
        },
        showInfoCard() {
            let timeLine = gsap.timeline({})
            timeLine.to(".news", {
                delay: 0.5,
                duration: 1.25,
                opacity: 1,
                ease: "Power0.easeNone",
                stagger: {
                    from: "start",
                    amount: 0.8
                }
            })
        }
    },
    async asyncData({ $microcms }) {
        const { contents } = await $microcms.get({ endpoint: 'news'})
        return { items: contents }
    }
})
</script>
<style scoped>
    .all-news a {
        display: block;
        margin: 25px;
    }
    .news {
        text-align: left;
        opacity: 0;
    }
    @media (max-width: 960px) {
        .all-news a {
            margin : 30px auto;
        }
    }
    @media (min-width: 961px) {
        .all-news {
            max-width: 1100px;
            margin: 20px auto;
            display: flex;
            flex-wrap: wrap;
            justify-content:space-between;
        }
        .all-news::after {
            content: "";
            display: block;
            width: 350px;
        }
        .neews {
            width: 30%;
        }
    }
</style>