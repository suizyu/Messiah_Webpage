<template>
    <div class="container">
        <CustomSection>
            <CustomH :level=1 :decorate=true>Character</CustomH>
            <CharacterDetail v-bind="this.charaProps">
                <template #quote>
                    <p> 砂漠を出るまでじゃない。</p>
                    <p>≪最果て≫も、その先にだって、君を連れて行くよ</p>
                </template>
                <template #discription>
                    <p>
                        駆け出し運び屋の少年。<br>
                        基本的に明るく社交的だが、時折陰りをみせる。<br>
                        <br>
                        かつて、義姉と共に商船≪蔦の階≫に保護されたことがある。<br>
                        その縁から現在の船長代理と交流が続き、仕事の斡旋や乗船許可を貰うことも多い。<br>
                        <br>
                        仮面の集団に襲撃されているリーフの事情を聞き、旅のガイドを買って出る。<br>
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
                name: "エルヴィス",
                spelling: "Elvis",
                imgKey: "elvis"
            }
        }
    }
})
</script>