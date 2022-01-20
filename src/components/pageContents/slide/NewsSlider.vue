<template>
    <div class="news-slider">
        <Hooper :settings="hooperSettings" class="slide"> 
            <Slide v-for="item in items" 
                :key="item.id"
                class="news-item">
                <InfoCard  v-bind="GetInfoItem(item)" />
            </Slide>
        </Hooper>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import InfoCard from '../../atoms/InfoCard.vue'
import { 
    Hooper, 
    Slide, 
} from 'hooper'
import 'hooper/dist/hooper.css'
export default Vue.extend({
    props: ['items'],
    data() {
        return {
            hooperSettings: {
                itemsToShow: 3,
                vertical: true,
                wheelControl: false,
                centerMode: true,
                initialSlide: 1,
                breakpoints: {
                    740: {
                        itemsToShow: 1.8,
                        centerMode: true,
                        vertical: false,
                    },
                    800: {
                        itemsToShow: 2,
                        centerMode: true,
                        vertical: false,
                    },
                    1100: {
                        itemsToShow: 2.5,
                        centerMode: true,
                        vertical: false,
                    },
                    1200: {
                        itemsToShow: 3,
                        vertical: false,
                    }
                }
            },
             isSP: true,
        }
    },
    components: {
        InfoCard,
        Hooper,
        Slide,
    },
    methods: {
        GetInfoItem(item) {
            const publishDate = new Date(item.publishedAt);
            const year = publishDate.getFullYear();
            const month = ("00" + (publishDate.getMonth() + 1)).slice(-2);
            const day = ("00" + (publishDate.getDate())).slice(-2);
            const publishDateString = year + "/" + month + "/" + day;
            return {
                imgName: item.thumbnail  || "logo_black_pc.png",
                date: publishDateString,
                title: item.title,
                linkTo: item.url
            }
        }
    },
    destroyed() {
        window.removeEventListener('resize', this.resizeEvent)
    }
})
</script>
<style scoped>
    .news-slider {
        margin: 0 auto;
        width: 80vw;
        max-width: 1600px;
    }
    @media(max-width: 740px) {
        .slide {
            height: 600px;
        }
    }
    @media (min-width: 741px) {
        .slide {
            height: 200px;
        }
    }
</style>