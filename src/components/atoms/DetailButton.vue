<template>
    <component v-if="link"
        class="detail-btn"
        :class="{disabled : disable}"
        :style="buttonColor"
        :is="isInternal(link) ? 'nuxt-link' : 'a'"
        :to="isInternal(link) ? link : ''"
        :href="isInternal(link) ? '' : link">
        <span class="btn-text"> {{ buttonText }} </span>
    </component>
</template>
<script lang="ts">
import Vue from 'vue'
interface BtnProps {
    buttonText: String
}
export default Vue.extend({
    props: {
        link: {
            type: String,
            required: false,
            default: '#'
        },
        disable: {
            type: Boolean,
            required: false,
            default: false
        },
        color: {
            type: String,
            required: false,
            default: "#b0a200"
        }
    },
    data(): BtnProps {
        return {
            buttonText: ""
        }
    },
    computed: {
        buttonColor() {
            return {
                '--main-color' : this.color
            }
        }
    },
    methods: {
        isInternal(link: string) {
            return link ? !/^https?:\/\//.test(link) : false
        }
    },
    mounted() {
        this.buttonText = this.disable ? 'Comming Soon...' : 'More'
    }
})
</script>
<style scoped>
    .detail-btn {
        --main-color: #b0a200;
        position: relative;
        display: flex;
        font-size: 1.5rem;
        text-align: center;
        border: 1px solid var(--main-color);
        margin: 30px auto;
        padding: 10px 0;
        width: 80vw;
        max-width: 328px;
        backdrop-filter: blur(5px);
        line-height: 1;
    }
    a {
        text-decoration: none;
    }
    .btn-text {
        width: 100%;
        height: 100%;
        font-family: classico-urw, sans-serif;
        color: var(--main-color);
        z-index: 2;
    }
    .btn-text:before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        width: 0;
        display: block;
        background: var(--main-color);
        z-index: -1;
        transition: .3s;
    }
    .btn-text:hover {
        color: #fff;
        transition: .2s;
    }
    .btn-text:hover::before {
        width: 100%;
    }
    .disabled {
        pointer-events: none;
    }
</style>