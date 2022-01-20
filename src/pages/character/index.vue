<template>
    <div class="container">
        <CustomSection>
            <CustomH :level=1 :decorate=true>Character</CustomH>
            <ContentDiv>
                <CharacterList />
            </ContentDiv>
        </CustomSection>
    </div>
</template>
<script lang="ts">
import CustomSection from '../../components/atoms/CustomSection.vue'
import ContentDiv from '../../components/atoms/ContentDiv.vue'
import CustomH from '../../components/atoms/CustomH.vue'
import CharacterList from '../../components/pageContents/character/CharacterList.vue'
export default ({
    layout: 'default',
    components: {
        CustomSection,
        ContentDiv,
        CustomH,
        CharacterList
    }
})
</script>