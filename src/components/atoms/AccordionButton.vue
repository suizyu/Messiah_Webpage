<template>
    <div class="accordion-btn">
        <svg class="open-btn" width="25" height="21" viewBox="0 0 25 21" ref="open">
            <path class="open" d="M12.5,0,25,21H0Z" transform="translate(25 21) rotate(180)" fill="#2a0909c7"/>
        </svg>
        <div class="close-btn" ref="close">
            <span class="closeParts"></span>
            <span class="closeParts"></span>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import gsap from 'gsap'
export type DataType = {
    openBtn: Element | null,
    closeBtn: Element | null
}
export default Vue.extend({
    props: {
        state: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    data(): DataType {
        return {
            openBtn: null,
            closeBtn: null
        }
    },
    mounted() {
        this.openBtn = this.$refs.open as Element;
        this.closeBtn = this.$refs.close as Element;
        const target = this.state ? this.closeBtn : this.openBtn;
        gsap.to(target, { opacity: 1 });
    },
    watch: {
        state: function (val, oldVal) {
            const timeline = gsap.timeline();
            this.openBtn = this.$refs.open as Element;
            this.closeBtn = this.$refs.close as Element;
            const fromTarget = val ? this.openBtn : this.closeBtn;
            const toTarget = val ? this.closeBtn : this.openBtn;
            timeline.to(fromTarget, { opacity: 0, rotationX: 90, duration: 0.5}, "hidden")
                .to(toTarget, { opacity: 1, rotationX: 0, duration: 0.5 }, "show");
        }
    }
})
</script>
<style scoped>
    .accordion-btn {
        position: relative;
        margin: 5px;
        width: 30px;
        height: 44px;
    }
    .open-btn, .close-btn {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
    }
    .close-btn span {
        position: absolute;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: #2a0909c7;
        border-radius: 4px;
    }
    .close-btn,  .close-btn span {
        display: inline-block;
        box-sizing: border-box;
    }
    .close-btn span:nth-of-type(1) {
        top: 0;
        transform: translateY(20px) rotate(45deg);
    }
    .close-btn span:nth-of-type(2) {
        bottom: 0;
        transform: translateY(-20px) rotate(-45deg);
    }
</style>