import CustomH from "../../atoms/CustomH.vue";

export default {
    title: "atoms/CustomH",
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { CustomH },
    template: `<CustomH v-bind="$props"> Title </CustomH>`
})

export const h1 = Template.bind({})
h1.args = {
    level: 1,
    decorate: false
}

export const h1_decorate = Template.bind({})
h1_decorate.args = {
    level: 1,
    decorate: true
}

export const h2 = Template.bind({})
h2.args = {
    level: 2,
    decorate: false
}

export const h3 = Template.bind({})
h3.args = {
    level: 3,
    decorate: false
}
