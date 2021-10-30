<template>
    <div class="container">
        <CustomSection>
            <CustomH :level=1 :decorate=true>Character</CustomH>
            <CharacterDetail v-bind="this.charaProps">
                <template #quote>
                    <p>誰もかれもが、そうであるとしか語らない……</p>
                    <p>―――――なら、自分の目で確認するだけよ</p>
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
                name: "リーフ",
                spelling: "Rih",
                imgKey: "rih"
            }
        }
    }
})
</script>