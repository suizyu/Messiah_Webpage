<template>
    <div class="caractor-label">
        <div class="name-block">
            <span class="name">{{ name }}</span>
            <span class="voice">CV：{{ voiceActor }}</span>
        </div>
        <hr />
        <span class="spelling">{{ spelling }}</span>
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
            default: "なし"
        }
    }
})
</script>
<style scoped>
    .caractor-label {
        color: #fff;
        text-align: left;
        width: 45%;
    }
    .caractor-label hr {
        border-width: 1px;
        border-style: solid;
        border-color: #fff;
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
        font-family: kinuta-maruminshinano-stdn, serif;
        font-feature-settings: "palt";
    }
    .spelling {
        font-family: classico-urw, sans-serif;
        font-size: 1.2rem;
    }
</style>