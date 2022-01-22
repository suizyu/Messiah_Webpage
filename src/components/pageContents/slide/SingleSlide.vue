<template>
    <div class="single-slide">
        <client-only>
            <Tinybox v-model="imageIndex"
                :images="imageData()"
                :no-thumbs="true">
            </Tinybox>
            <Hooper :settings="singleSlideSettings">
                <Slide v-for="item in imageData()" :key="item.id">
                    <img :key="item.id"
                        :src="item.thumb" 
                        class="open-tinybox thumbnail" 
                        @click="imageIndex = item.id">
                </Slide>
                <HooperPagination slot="hooper-addons"></HooperPagination>
            </Hooper>
        </client-only>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import GarellyImg from '../../atoms/GarellyImg.vue'
import { 
    Hooper, 
    Slide, 
    Pagination as HooperPagination,
} from 'hooper'
import 'hooper/dist/hooper.css'
import Tinybox from "vue-tinybox"
export default Vue.extend({
    props: ['slideItems'],
    data() {
        return {
            singleSlideSettings: {
                itemsToShow: 1,
                wheelControl: false
            },
            imageIndex: null
        }
    },
    components: {
        GarellyImg,
        Tinybox,
        Hooper,
        Slide,
        HooperPagination,
    },
    methods: {
        imageData() {
            let items = [];
            this.slideItems.forEach(i => {
                let item = 
                {
                    src: require(`~/assets/images/contents/${ i.section }/${ i.imgName }`),
                    thumb: require(`~/assets/images/contents/${ i.section }/thumbs/${ i.imgName }`),
                    id: i.id
                };
                items.push(item);
            });
            return items;
        }
    }
})
</script>
<style scoped>
    .thumbnail {
        margin: 0 auto;
    }
    .thumbnail:hover {
        cursor: pointer;
    }
    .single-slide {
        width: 45vw;
        margin: 0 auto;
    }
</style>