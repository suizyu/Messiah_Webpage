<template>
    <div class="character-label">
        <div class="info">
            <div class="name-block">
                <span class="name">{{ name }}</span>
                <span class="voice" v-if="voiceActor">CV：{{ voiceActor }}</span>
            </div>
            <hr v-if="border" />
            <span class="spelling" >{{ spelling }}</span>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        name: {
            type: String,
            required: false,
            default: "デフォルトネーム"
        },
        spelling: {
            type: String,
            required: false,
            default: "Default Name"
        },
        voiceActor: {
            type: String,
            required: false,
            default: ""
        },
        border: {
            type: Boolean,
            required: false,
            default: true
        }
    }
})
</script>
<style scoped>
    .character-label {
        position: relative;
        width: 100%;
        text-align: left;
        overflow: hidden;
    }
    .character-label hr {
        border: none;
        height: 1px;
        background: linear-gradient(90deg, hsl(0, 0%, 100%), hsla(0, 0%, 100%, 0));
        margin: 0;
    }
    .name-block {
        display: flex;
        align-items: baseline;
    }
    .name-block span {
        margin-right: 30px;
    }
    .name {
        font-size: 2.5rem;
        font-family: kinuta-maruminshinano-stdn, sans-serif, serif;
        font-feature-settings: "palt";
    }
    .spelling {
        font-family: classico-urw, sans-serif;
        font-size: 1.4rem;
    }
</style>