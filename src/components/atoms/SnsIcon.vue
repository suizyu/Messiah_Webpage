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
        }
    }
})
</script>
<style scoped>
    .sns-icon {
        color: indianred;
        font-size: 6rem;
    }
</style>