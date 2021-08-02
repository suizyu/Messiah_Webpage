<template>
    <section class="custom-section">
        <slot />
    </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>
<style scoped>
    .custom-section {
        margin: 10vh 0;
        width: 100%;
    }
</style>