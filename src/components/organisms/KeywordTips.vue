<template>
    <div class="tips">
        <TipsAccordion v-for="item in items" 
            :key="item.id"
            :subTitle="item.subtitle">
            <template #summary>{{ item.title }}</template>
            <template #detailText><div v-html="item.detail"></div></template>
        </TipsAccordion>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import TipsAccordion from '../molecules/TipsAccordion.vue'
export default Vue.extend({
    components: {
        TipsAccordion
    },
    props: ['items'],
})
</script>
<style scoped>
    .tips {
        width: 100%;
        margin: 10px auto;
    }
</style>