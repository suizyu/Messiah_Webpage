import AccordionButton from "../../atoms/AccordionButton.vue";

export default {
    title: "atoms/AccordionButton",
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { AccordionButton },
    template: `<AccordionButton v-bind="$props" />`
})

export const detail_buttons = Template.bind({})
detail_buttons.args = {
    state: true
}