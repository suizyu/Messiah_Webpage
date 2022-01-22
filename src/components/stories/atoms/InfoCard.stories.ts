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
    date: "2021/08/32",
    title: "demo",
    linkTo: "https://github.com/suizyu"
}