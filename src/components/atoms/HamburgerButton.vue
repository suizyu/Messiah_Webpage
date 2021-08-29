<template>
    <div class="hmg-btn" @click="btnClick" :class='{active: isOpen}'>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data () {
        return {
            isOpen: false,
        }
    },
    mounted() {
        this.$emit('child-data', this.isOpen)
    },
    methods: {
        btnStateChange() {
            const isBtnOpen = this.isOpen;
            this.$emit('btnStateChange', isBtnOpen);
        },
        btnClick() {
            this.isOpen = !this.isOpen;
        }
    },
    watch: {
        isOpen: function(val, oldVal) {
            this.btnStateChange();
        }
    }
})
</script>
<style scoped>
    .hmg-btn {
        position: relative;
        width: 50px;
        height: 44px;
        cursor: pointer;
    }
    .hmg-btn span {
        position: absolute;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: #fff;
        border-radius: 4px;
    }
    .hmg-btn, .hmg-btn span {
        display: inline-block;
        transition: all .5s;
        box-sizing: border-box;
    }
    .hmg-btn span:nth-of-type(1) {
        top: 0;
    }
    .hmg-btn span:nth-of-type(2) {
        top: 20px;
    }
    .hmg-btn span:nth-of-type(3) {
        bottom: 0;
    }
    /* 変化アニメーション */
    .hmg-btn.active span:nth-of-type(1) {
        transform: translateY(20px) rotate(45deg);
    }
    .hmg-btn.active span:nth-of-type(2) {
        opacity: 0;
    }
    .hmg-btn.active span:nth-of-type(3) {
        transform: translateY(-20px) rotate(-45deg);
    }
</style>