<template>
    <figure class="character-about">
            <img :src="imagePath()"
                :alt="this.name"
                class="character" />
            <figcaption>
                <span class="name">{{ name }}</span>
                <p class="description" v-html="about"></p>
            </figcaption>
    </figure>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        imgKey: {
            type: String,
            required: false,
            default: "elvis"
        },
        name: {
            type: String,
            required: false,
            default: "エルヴィス"
        },
        about: {
            type: String,
            required: false,
            default: "キャラ説明"
        }
    },
    methods: {
        imagePath() {
            return require(`~/assets/images/character/_top/${ this.imgKey }.png`)
        },
        toPath() {
            return "/character/" + this.imgKey
        }
    },
})
</script>
<style scoped>
    .character-about {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .character-about figcaption {
        position: absolute;
        width: 85vw;
        max-width: 750px;
        left: 50%;
        transform: translateX(-50%);
        text-shadow: 3px 2px 3px #333;
    }
    .character {
        margin: 0 auto;
    }
    .character img {
        display: block;
        height: 60vh;
        object-fit: cover;
    }
    .name {
        font-family: kinuta-maruminshinano-stdn, sans-serif, serif;
        font-feature-settings: "palt";
        z-index: 1;
    }
    @media (max-width: 400px) {
        .name {
            font-size: 2.5rem;
        }
        .character-about figcaption {
            top:45%;
        }
    }
    @media (min-width: 401px) and (max-width: 960px) {
        .name {
            font-size: 3rem;
        }
        .character-about figcaption {
            top: 50%;
        }
        .description {
            font-size: 1.2rem;
        }
    }
    @media (min-width: 961px) {
        .name {
            font-size: 3.25rem;
        }
        .character-about figcaption {
            top: 50%;
        }
        .description {
            font-size: 1.2rem;
        }
    }
</style>