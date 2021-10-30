<template>
    <div class="container">
        <CustomSection>
            <CustomH :level=1 :decorate=true>Introduction</CustomH>
            <section class="story">
                <CustomH :level=2>Story</CustomH>
                <ContentDiv>
                    <p class="catchphrase">
                        蒼の天蓋、灰の淵を越え、世界の果てへ――――
                    </p>
                </ContentDiv>
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
export default({
  layout: 'default',
  components: {
      CustomSection,
      ContentDiv,
      CustomH,
      KeywordTips
    },
    async asyncData({ $axios }) {
        try {
            const { contents } = await $axios.$get('/api/keyword');
            return { items: contents };
        }
        catch(error) {
            console.log(error);
        }
    }
})
</script>
<style scoped>
    .story,
    .keyword {
        margin: 0;
    }
    .catchphrase {
        font-size: 2rem;
    }
    .story p {
        color: #fff;
    }
</style>