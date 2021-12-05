<template>
    <div class="news-slider">
        <Hooper :settings="hooperSettings" :style="heigthSetting">
            <Slide v-for="item in items" :key="item.id">
                <InfoCard  v-bind="GetInfoItem(item)" />
            </Slide>
            <HooperPagination slot="hooper-addons" v-show="!this.isSP"></HooperPagination>
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
} from 'hooper';
import 'hooper/dist/hooper.css';
export default Vue.extend({
    props: ['items'],
    data() {
        return {
            hooperSettings: {
                itemsToShow: 3,
                vertical: true,
                wheelControl: false,
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
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.resizeEvent);
            this.resizeEvent();
        });
    },
    methods: {
        resizeEvent() {
                const matchSP = window.matchMedia('(max-width: 620px)').matches;
                this.isSP = matchSP;
        },
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
                linkTo: "https://github.com/suizyu"
            }
        }
    },
    computed: {
        heigthSetting() {
            return {
                "height": this.isSP ? "600px" : "200px"
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
        margin: 20px auto;
        width: 80vw;
    }
    .hooper-pagination {
        bottom: -20px;
    }
</style>