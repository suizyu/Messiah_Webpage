<template>
    <div class="character-about-slide">
        <Hooper class="slide-list" :settings="hooperSettings">
            <Slide v-for="chara in characters" 
                :key="chara.order"
                class="slide-item">
                <CharacterAbout v-bind="chara" />
            </Slide>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </Hooper>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { 
    Hooper, 
    Slide, 
    Pagination as HooperPagination,
    Navigation as HooperNavigation
} from 'hooper'
import 'hooper/dist/hooper.css'
import characters from '~/assets/characters.json'
export type Characters = typeof characters
import CharacterAbout from '../../atoms/CharacterAbout.vue'
export default Vue.extend({
    data() {
        return {
            characters: characters,
            hooperSettings: {
                itemsToShow: 1,
                wheelControl: false,
                infiniteScroll: true,
            }
        }
    },
    components: {
        Hooper,
        Slide,
        HooperPagination,
        HooperNavigation,
        CharacterAbout
    },
})
</script>
<style scoped>
    .character-about-slide{
        height: 60vh;
        margin: 5vh auto;
        overflow: visible;
        -webkit-tap-highlight-color:rgba(0,0,0,0);
        cursor:pointer;
    }
    .character-about-slide:focus {
        outline: none;
    }
    .slide-list {
        height: 100%;
        width: 100vw;
    }
    .slide-item {
        width: 100vw;
    }
    .slide-list >>> .hooper-navigation {
        fill: #fff;
    }
    .slide-list >>> .hooper-prev {
        left: 20%;
    }
    .slide-list >>> .hooper-next {
        right: 20%;
    }
    .slide-list >>> button.hooper-prev,
    .slide-list >>> button.hooper-next {
        top: 45%;
        transform: scale(3);
        mix-blend-mode: overlay;
        transition: .5s;
        visibility: hidden;
    }
    .slide-list >>> button.hooper-prev:hover,
    .slide-list >>> button.hooper-next:hover {
        mix-blend-mode: normal;
    }
    .slide-list >>> button.hooper-prev.is-disabled,
    .slide-list >>> button.hooper-next.is-disabled,
    .slide-list >>> button.hooper-prev.is-disabled:hover,
    .slide-list >>> button.hooper-next.is-disabled:hover {
        mix-blend-mode: normal;
    }
    .slide-list >>> .hooper-indicator {
        width: 70px; 
        height: 5px;
        margin: 0 8px;
        opacity: .5;
        transition: .3s ease;
    }
    .slide-list >>> .hooper-indicator:hover, 
    .slide-list >>> .hooper-indicator.is-active{
        background-color: #fff;
        opacity: 1;
    }
    @media (min-width: 961px) {
        .slide-list >>> button.hooper-prev,
        .slide-list >>> button.hooper-next{
            visibility: visible;
        }
    }
</style>