<template>
    <section class="sns-share">
        <CustomH :level="1">Share</CustomH>
        <div class="iconbox">
            <template v-for="s in snsInfos">
                <SnsIcon :iconName="s.name" :key="s.id"  class="icon"/>
            </template>
        </div>
    </section>
</template>
<script lang="ts">
import Vue from 'vue'
import snsItems from '~/assets/snsShare.json'
import CustomH from '../atoms/CustomH.vue'
import SnsIcon from '../atoms/SnsIcon.vue'
export type SnsItems = typeof snsItems
export default Vue.extend({
    components: {
        CustomH,
        SnsIcon
    },
    data () {
        return {
            snsInfos: snsItems
        }
    }
})
</script>
<style scoped>
    .sns-share {
        margin: 15px 0;
    }
    .sns-share > h1 {
        color: #3c3f4d;
    }
    .iconbox {
        display: flex;
        justify-content: space-evenly;
        margin: 10px auto;
        width: 250px;
    }
    h1.custom-h {
        font-size: 1.5rem;
    }
    .icon:hover {
        cursor: pointer;
    }
</style>