<template>
    <div class="character">
        <img class="character-image" 
            :src="getImagePath()" 
            :alt="this.name"/>
        <div class="quote-box">
            <slot name="quote">
            </slot>
        </div>
        <div class="sp-label-container">
            <CharacterLabel v-bind="this.bindData" class="label" />
            <img v-if="!this.isSP" class="decorate" src="~/assets/images/bg/circle_full.png" />
            <img v-else-if="this.isSP" class="decorate" src="~/assets/images/bg/circle_half.png" />
        </div>
        <div class="discription-box">
            <slot name="discription">
                <p>キャラ説明文</p>
                <p>複数文脈</p>
            </slot>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import CharacterLabel from '../../atoms/CharacterLabel.vue'
export default Vue.extend({
    components: {
        CharacterLabel
    },
    props: {
        name: {
            type: String,
            required: false
        },
        spelling: {
            type: String,
            required: false,
        },
        voiceActor: {
            type: String,
            required: false
        },
        border: {
            type: Boolean,
            required: false,
            default: true
        },
        imgKey: {
            type: String,
            required: false,
            default: "elvis"
        }
    },
    data() {
        return {
            isSP: false,
            bindData: {
                name: "",
                spelling: "",
                voiceActor: "",
                border: true
            }
        }
    },
    mounted() {
        this.bindData = {
            name: this.name,
            spelling: this.spelling,
            voiceActor: this.voiceActor,
            border: this.border
        }

        this.$nextTick(() => {
            window.addEventListener('resize', this.resizeEvent)
            this.resizeEvent()
        })
    },
    methods: {
        resizeEvent() {
            const matchSP = window.matchMedia('(max-width: 960px)').matches
            this.isSP = matchSP
        },
        getImagePath() {
            return require(`~/assets/images/character/${ this.imgKey }/${ this.imgKey }.png`)
        }
    },
    destroyed() {
        window.removeEventListener('resize', this.resizeEvent)
    }
})
</script>
<style scoped>
    .character {
        position: relative;
        overflow: visible;
        margin: 5vh auto;
        width: 90%;
        z-index: 1;
    }
    .label {
        position: absolute;
        left: 0;
        z-index: 1;
    }
    .decorate {
        position: absolute;
        top: 0;
        mix-blend-mode: hard-light;
        z-index: 0;
    }
    .character-image {
        z-index: 2;
    }
    .quote-box {
        z-index: 3;
    }
    .quote-box p {
        font-family: kinuta-maruminshinano-stdn, sans-serif, serif;
        text-shadow: 0 3px 10px #333;
        text-align: left;
    }
    .discription-box p {
        text-align: left;
    }
    @media (max-width: 960px) {
        .label {
            width: 100vw;
            bottom: 37%;
        }
        .decorate {
            height: 30vh;
            min-height: 245px;
            right: 5%;
        }
        .sp-label-container {
            position: relative;
            width: 100vw;
            height: 30vh;
            min-height: 260px;
        }
        .quote-box {
            margin-top: 5vh;
            margin-bottom: -7vh;
        }
        .quote-box p {
            font-size: 1.5rem;
        }
        .discription-box {
            margin-top: -5vh;
        }
        .discription-box p {
            text-align: left;
            font-size: 1.2rem;
            margin-top: -60px;
        }
    }
    @media (min-width: 961px) {
        .character {
            height: 1000px;
            max-width: 1300px;
        }
        .label {
            top: 30%;
        }
        .decorate {
            right: 0;
            opacity: .45;
        }
        .character-image {
            position: absolute;
            right: -10%;
            top: .5%;
            height: 1000px;
            z-index: 2;
        }
        .quote-box {
            display: flex;
            flex-flow: column;
            justify-content: center;
            position: absolute;
            top: 0;
            left: 0;
            width: 65%;
            height: 35vh;
        }
        .quote-box p {
            font-size: 2rem;
        }
        .discription-box {
            position: absolute;
            left: 0;
            top: 45%;
            width: 55%;
            z-index: 5;
        }
        .discription-box p {
            font-size: 1.5rem;
        }
    }
</style>