<template>
    <div class="container">
        <CustomSection>
            <CustomH :level=1 :decorate=true>Character</CustomH>
            <CharacterDetail v-bind="this.charaProps">
                <template #quote>
                    <p></p>
                </template>
                <template #discription>
                    <p></p>
                </template>
            </CharacterDetail>/>
        </CustomSection>
    </div>
</template>
<script lang="ts">
import CustomSection from '../../../components/atoms/CustomSection.vue'
import ContentDiv from '../../../components/atoms/ContentDiv.vue'
import CustomH from '../../../components/atoms/CustomH.vue'
import CharacterDetail from '../../../components/pageContents/character/CharacterDetail.vue'
export default ({
    layout: 'default',
    components: {
        CustomSection,
        ContentDiv,
        CustomH,
        CharacterDetail
    },
    data() {
        return {
            charaProps: {
                name: "エルヴィス・ターナー",
                spelling: "Elvis",
                imgKey: "elvis"
            }
        }
    }
})
</script>