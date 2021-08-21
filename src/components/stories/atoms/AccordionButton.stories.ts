import AccordionButton from "../../atoms/AccordionButton.vue";

export default {
    title: "atoms/AccordionButton",
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { AccordionButton },
    template: `<AccordionButton v-bind="$props" />`
})

export const accordion_button = Template.bind({})
accordion_button.args = {
    state: true
}