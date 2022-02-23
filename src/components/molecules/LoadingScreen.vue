<template>
    <div class="screen" :class="{ fadeout: !isLoading }">
        <div class="screen-container">
            <LoadingIcon />
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import LoadingIcon from '../atoms/LoadingIcon.vue'
export default Vue.extend({
    components:{
        LoadingIcon
    },
    props: ["isLoading"],
})
</script>
<style scoped>
    .screen,
    .screen-container {
        width: 100%;
        height: 100vh;
        margin: 0;
    }
    .screen {
        position: fixed;
        background: #111;
        overflow: hidden;
        z-index: 20;
    }
    .screen-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .fadeout {
        animation: screenOpacity 2s forwards;
    }
    @keyframes screenOpacity {
        to {
            opacity: 0;
            visibility: hidden;
        }
    }
</style>