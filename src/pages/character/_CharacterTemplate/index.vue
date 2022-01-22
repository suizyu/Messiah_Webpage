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
            </CharacterDetail>
        </CustomSection>
        <ContentDiv>
            <CharacterList />
        </ContentDiv>
    </div>
</template>
<script lang="ts">
import CustomSection from '../../../components/atoms/CustomSection.vue'
import ContentDiv from '../../../components/atoms/ContentDiv.vue'
import CustomH from '../../../components/atoms/CustomH.vue'
import CharacterDetail from '../../../components/pageContents/character/CharacterDetail.vue'
import CharacterList from '../../../components/pageContents/character/CharacterList.vue'
export default ({
    layout: 'default',
    components: {
        CustomSection,
        ContentDiv,
        CustomH,
        CharacterDetail,
        CharacterList
    },
    data() {
        return {
            charaProps: {
                name: "",
                spelling: "",
                imgKey: ""
            }
        }
    }
})
</script>