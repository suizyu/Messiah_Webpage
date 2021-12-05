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
                border: null
            }
        }
    },
    mounted() {
        this.bindData = {
            name: this.name,
            spelling: this.spelling,
            vocieActor: this.voiceActor,
            border: this.border
        };

        this.$nextTick(() => {
            window.addEventListener('resize', this.resizeEvent);
            this.resizeEvent();
        });
    },
    methods: {
        resizeEvent() {
            const matchSP = window.matchMedia('(max-width: 960px)').matches;
            this.isSP = matchSP;
        },
        getImagePath() {
            return require(`~/assets/images/character/${ this.imgKey }/${ this.imgKey }.png`);
        }
    },
    destroyed() {
        window.removeEventListener('resize', this.resizeEvent)
    }
})
</script>
<style scoped>
    p {
        color: #FFF;
    }
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
        font-size: 2rem;
        text-shadow: 0 3px 10px #333333;
        text-align: left;
    }
    .discription-box p {
        text-align: left;
        font-size: 1.1rem;
    }
    @media (max-width: 960px) {
        .label {
            width: 100vw;
            bottom: 30%;
        }
        .decorate {
            height: 30vh;
            right: 5%;
        }
        .sp-label-container {
            position: relative;
            width: 100vw;
            height: 30vh;
        }
        .quote-box {
            margin-top: 5vh;
            margin-bottom: -7vh;
        }
        .discription-box {
            margin-top: -5vh;
        }
    }
    @media (min-width: 961px) {
        .character {
            height: 105vh;
            max-width: 1300px;
        }
        .label {
            top: 35vh;
        }
        .decorate {
            right: 0;
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
        .discription-box {
            position: absolute;
            left: 0;
            top: 52vh;
            width: 55%;
            z-index: 5;
        }
    }
</style>