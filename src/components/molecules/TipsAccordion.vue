<template>
    <div class="tips" ref="tips">
        <div class="summary-row" @click="stateChange">
             <slot name="summary"> SampleSummary </slot>
             <div class="toggle-button">
                 <AccordionButton :state="isOpen" ref="btn"/>
             </div>
        </div>
        <div class="discription" ref="discription">
            <slot name="detailText">
                sampletext.sampletext.<br/>
                サンプルテキスト。サンプルテキスト。
            </slot>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import gsap from 'gsap'
import AccordionButton from '../atoms/AccordionButton.vue'
export default Vue.extend({
    components: {
        AccordionButton
    },
    props:{
        subTitle: {
            type: String,
            required: false,
            default: "default Sub Title"
        }
    },
    data() {
        return {
            isOpen: false
        }
    },
    mounted() {
        const root = this.$el
        root.setAttribute('sub-title', this.subTitle)
    },
    methods: {
        refs(): any{
            return this.$refs
        },
        stateChange() {
            this.isOpen = !this.isOpen
            const target = this.refs().tips
            if (this.isOpen) {
                gsap.to(target, { height: 'auto', duration: 0.5 })
            } else {
                gsap.to(target, { height: '95px', duration: 0.5 })
            }
        }
    }
})
</script>
<style scoped>
    .tips {
        position: relative;
        background-image: url(../../assets/images/bg/old_paper.jpg);
        height: 95px;
        width: 100%;
        margin: 20px 0;
        padding: 5px;
        overflow: hidden;
        z-index: 1;
    }
    .tips::after {
        content: attr(sub-title);
        font-family: classico-urw, sans-serif;
        line-height: 100%;
        position: absolute;
        top: -10px;
        left: 5px;
        color: transparent;
        -webkit-text-stroke: 3px rgba(97, 40, 7, 0.205);
        font-size: 8rem;
        pointer-events: none;
        white-space: nowrap;
        z-index: -1;
    }
    .summary-row {
        position: relative;
        width: 100%;
        height: 95px;
        line-height: 95px;
        margin: 0 auto;
        color: #000;
        font-size: 2.5rem;
        text-align: center;
        font-family: kinuta-maruminshinano-stdn, sans-serif, serif;
    }
    .summary-row:hover {
        cursor: pointer;
    }
    .toggle-button{
        position: absolute;
        top: 30%;
        right: 3%;
        padding: auto;
    }
    .discription {
        position: relative;
        margin: 0 auto;
        padding: 15px 0;
        width: 85vw;
        max-width: 750px;
        color: #000;
        font-size: 1.2rem;
        z-index: 2;
    }
    @media (min-width: 961px){
        .tips {
            background-size: cover;
            background-clip: padding-box;
        }
    }
</style>