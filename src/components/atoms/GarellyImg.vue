<template>
    <div class="image-box">
        <client-only>
            <Tinybox v-model="imageIndex" 
                :images="imageData()"
                :no-thumbs="true">
            </Tinybox>
            <img v-for="img in imageData()" 
                :key="img.id"
                :src="img.thumb" 
                class="open-tinybox thumbnail" 
                @click="imageIndex = img.id">
        </client-only>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Tinybox from "vue-tinybox"
export default Vue.extend({
    components: {
        Tinybox
    },
    props: {
        imgName: {
            type: String,
            required: true,
            default: "logo_white_pc.png"
        },
        section: {
            type: String,
            required: true,
            default: "buttle"
        }
    },
    data() {
        return {
            imageIndex: null
        }
    },
    methods: {
        imageData() {
            return [
                {
                    src: require(`~/assets/images/contents/${ this.section }/${ this.imgName }`),
                    thumb: require(`~/assets/images/contents/${ this.section }/thumbs/${ this.imgName }`),
                    id: 0
                }
            ]
        }
    }
})
</script>
<style scoped>
    .thumbnail:hover {
        cursor: pointer;
    }
</style>