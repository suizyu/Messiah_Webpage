import { template } from "@babel/core";
import Card from "../../atoms/InfoCard.vue";

export default {
    title: "atoms/Card",
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { Card },
    template: `<Card v-bind="$props" />`
})

export const LogoCard = Template.bind({})
LogoCard.args = {
    imgName: "logo_black_pc.png",
    linkTo: "https://github.com/suizyu"
}