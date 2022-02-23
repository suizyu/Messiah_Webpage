<template>
    <div class="news-slider">
        <Hooper :settings="hooperSettings" class="slide">
            <Slide v-for="item in items"
                :key="item.id"
                class="news-item">
                <InfoCard  v-bind="GetInfoItem(item)" />
            </Slide>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </Hooper>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import InfoCard from '../../atoms/InfoCard.vue'
import {
    Hooper,
    Slide,
    Pagination as HooperPagination,
    Navigation as HooperNavigation
} from 'hooper'
import 'hooper/dist/hooper.css'
interface PropItem {
    id: String
    title: String
    thumbnail: String
    url: String
    publishedAt: Date
}
export default Vue.extend({
    props: ['items'],
    data() {
        return {
            hooperSettings: {
                itemsToShow: 1,
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
        HooperPagination,
        HooperNavigation,
    },
    methods: {
        GetInfoItem(item: PropItem) {
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
        }
    }
})
</script>
<style scoped>
    .news-slider {
        margin: 0 auto;
        width: 80vw;
        max-width: 1600px;
        -webkit-tap-highlight-color:rgba(0,0,0,0);
        cursor:pointer;
    }
    .news-slider:focus {
        outline: none;
    }
    .slide {
        height: 200px;
    }
    .slide >>> .hooper-navigation {
        fill: #fff;
    }
    .slide >>> .hooper-pagination {
        margin-bottom: -20px;
    }
    .slide >>> button.hooper-prev,
    .slide >>> button.hooper-next {
        top: 35%;
        transform: scale(2.5);
        mix-blend-mode: overlay;
        transition: .5s;
    }
    .slide >>> button.hooper-prev:hover,
    .slide >>> button.hooper-next:hover {
        mix-blend-mode: normal;
    }
    .slide >>> button.hooper-prev.is-disabled,
    .slide >>> button.hooper-next.is-disabled,
    .slide >>> button.hooper-prev.is-disabled:hover,
    .slide >>> button.hooper-next.is-disabled:hover {
        mix-blend-mode: normal;
    }
    .slide >>> .hooper-indicator {
        width: 30px;
        height: 5px;
        margin: 0 3px;
        opacity: .5;
        transition: .3s ease;
    }
    .slide >>> .hooper-indicator:hover,
    .slide >>> .hooper-indicator.is-active{
        background-color: #fff;
        opacity: 1;
    }
    @media (max-width: 550px) {
        .slide >>> .hooper-prev {
            left: -10%;
        }
        .slide >>> .hooper-next {
            right: -10%;
        }
    }
    @media (min-width: 551px) {
        .slide >>> .hooper-prev {
            left: 0;
        }
        .slide >>> .hooper-next {
            right: 0;
        }
    }
</style>