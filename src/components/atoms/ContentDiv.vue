<template>
    <div class="content">
        <slot />
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>
<style scoped>
    .content {
        margin: 0 auto;
        width: 80vw;
        max-width: 900px;
        background: transparent;
        padding: 10px 0;
    }
</style>