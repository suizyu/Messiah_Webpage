<template>
    <nuxt-link :to="toPath()" class="character-img">
        <img :src="imagePath()" 
            :alt="this.name" />
    </nuxt-link>
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
        }
    },
    methods: {
        imagePath() {
            return require(`~/assets/images/character/_list/${ this.imgKey }.png`)
        },
        toPath() {
            return "/character/" + this.imgKey
        }
    }
})
</script>
<style scope>
    .character-img {
         max-width: 300px;
         margin: 10px;
         transition: .5s;
    }
    .character-img:hover {
        opacity: .7;
        mix-blend-mode: hard-light;
    }
</style>