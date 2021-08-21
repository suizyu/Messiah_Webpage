import DetailButton from "../../atoms/DetailButton.vue";

export default {
    title: "atoms/DetailButton",
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { DetailButton },
    template: '<DetailButton v-bind="$props" />'
})

export const nuxt_link = Template.bind({})
nuxt_link.args = {
    link: "/introduction/",
    color: "",
    disable: false
}

export const anchor_link = Template.bind({})
anchor_link.args = {
    link: "https://twitter.com/home",
    color: "",
    disable: false
}

export const disable = Template.bind({})
disable.args = {
    link: "https://twitter.com/home",
    disable: true
}
