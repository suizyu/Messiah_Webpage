<template>
    <fa :icon="['fab',iconName]" class="sns-icon" />
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        iconName: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: false
        }
    }
})
</script>
<style scoped>
    .sns-icon {
        color: rgb(32, 32, 32);
        font-size: 2.5rem;
    }
</style>