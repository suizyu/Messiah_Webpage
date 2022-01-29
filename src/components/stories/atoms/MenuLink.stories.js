import MenuLink from "../../atoms/MenuLink.vue";

export default {
    title: "atoms/MenuLink",
    component: MenuLink
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MenuLink },
    template: `<MenuLink v-bind="$props" />`
  })

export const Primary = Template.bind({})
Primary.args = {
    name: "top",
    link: "https://t.co/rU7CADXhgD?amp=1"
}
