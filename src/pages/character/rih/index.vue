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
                    <p>
                        品の良さと芯の強さを併せ持つ少女。<br>
                        砂漠の彼方にあるという≪最果て≫を目指し旅をしている。<br>
                        <br>
                        謎の仮面の集団から幾度となく襲撃を受けており、ある夜の襲撃から逃れた先でエルヴィスと出会うこととなる。<br>
                    </p>
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
                name: "リーフ",
                spelling: "Rih",
                imgKey: "rih"
            }
        }
    }
})
</script>