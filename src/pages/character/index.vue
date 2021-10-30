<template>
    <div class="container">
        <CustomSection>
            <CustomH :level=1 :decorate=true>Character</CustomH>
            <ContentDiv>
                <p>キャラクター一覧</p>
            </ContentDiv>
        </CustomSection>
    </div>
</template>
<script lang="ts">
import CustomSection from '../../components/atoms/CustomSection.vue'
import ContentDiv from '../../components/atoms/ContentDiv.vue'
import CustomH from '../../components/atoms/CustomH.vue'

export default ({
    layout: 'default',
  components: {
      CustomSection,
      ContentDiv,
      CustomH
  }
})
</script>