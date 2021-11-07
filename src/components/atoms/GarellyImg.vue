<template>
    <div class="image-box">
        <Tinybox v-model="imageIndex" 
            :images="imageData()"
            :no-thumbs="true">
        </Tinybox>
        <img v-for="img in imageData()" 
            :key="img.id"
            :src="img.thumb" 
            class="open-tinybox thumbnail" 
            @click="imageIndex = img.id">
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Tinybox from "vue-tinybox";
export default Vue.extend({
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
           testImages:[
                {
                    src: 'https://dummyimage.com/600x600/fcc/000.png&text=Uploaded3',
                    thumb: 'https://dummyimage.com/150x150/fcc/000.png&text=thumb1',
                    id: 0
                }
            ],
            imageIndex: null
        }
    },
    components: {
        Tinybox
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
    .image-box {
        cursor: default;
    }
</style>