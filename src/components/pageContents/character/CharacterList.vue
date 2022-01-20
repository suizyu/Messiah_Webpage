<template>
    <div class="list-wrapper">
        <div class="cahacter-list">
            <template v-for="chara in characters">
                <CharacterListItem v-bind="chara" :key="chara.order"/>
            </template>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import CharacterListItem from '../../atoms/CharacterListItem.vue'
import characters from '~/assets/characters.json'
export type Characters = typeof characters
export default Vue.extend({
    components: {
        CharacterListItem
    },
    props: {
        effect: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            characters: characters
        }
    },
    mounted() {
        if (this.effect) {
            this.Animation();
        }
    },
    methods: {
        Animation() {
            console.log("demo");
        }
    }
})
</script>
<style scoped>
    .list-wrapper {
        display: block;
        margin: 0 auto;
    }
    .cahacter-list{
        display: flex;
        justify-content: center;
    }
</style>