<template>
    <div class="container">
        <CustomSection>
            <CustomH :level=1 :decorate=true>Introduction</CustomH>
            <section>
                <CustomH :level=2>Story</CustomH>
                <Story />
            </section>
            <client-only>
                <section class="keyword">
                    <CustomH :level=2>Keyword</CustomH>
                    <KeywordTips :items="items" />
                </section>
            </client-only>
        </CustomSection>
    </div>
</template>
<script lang="ts">
import CustomSection from '../../components/atoms/CustomSection.vue'
import ContentDiv from '../../components/atoms/ContentDiv.vue'
import CustomH from '../../components/atoms/CustomH.vue'
import KeywordTips from '../../components/organisms/KeywordTips.vue'
import Story from '../../components/pageContents/Introduction/Story.vue'
export default({
  layout: 'default',
  components: {
      CustomSection,
      ContentDiv,
      CustomH,
      KeywordTips,
      Story
    },
    async asyncData({ $microcms }) {
        const { contents } = await $microcms.get({ endpoint: 'keyword' })
        return { items: contents }
    }
})
</script>