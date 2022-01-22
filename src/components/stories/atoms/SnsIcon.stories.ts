import SnsIcon from "../../atoms/SnsIcon.vue";

export default {
    title: "atoms/SnsIcon",
    component: SnsIcon
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { SnsIcon },
    template: `<SnsIcon v-bind="$props" />`
  })

export const Line = Template.bind({})
Line.args = {
    iconName: "line"
}