<template>
    <div class="container">
        <CustomSection>
            <CustomH :level=1 :decorate=true>Product</CustomH>
            <ProductDiscription />
        </CustomSection>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import CustomSection from '../../components/atoms/CustomSection.vue'
import CustomH from '../../components/atoms/CustomH.vue'
import ProductDiscription from '../../components/pageContents/product/ProductDiscription.vue'
export default Vue.extend({
    components: {
        CustomSection,
        CustomH,
        ProductDiscription
    }
})
</script>