import { template } from "@babel/core";
import TipsAccordion from "../../molecules/TipsAccordion.vue";

export default {
    title: "molecules/TipsAccordion"
}

export const Empty = () => ({
    components: { TipsAccordion },
    template: "<TipsAccordion />"
})

const Sample = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { TipsAccordion },
    template: `<TipsAccordion  v-bind="$props"> <template #summary>最果て</template> <template #detailText>砂漠に住む人云々。</template><TipsAccordion />`
})

export const EndSample = Sample.bind({})
EndSample.args = {
    subTitle: "The End"
}