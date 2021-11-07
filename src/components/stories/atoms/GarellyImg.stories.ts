import GarellyImg from "../../atoms/GarellyImg.vue";

export default {
    title: "atoms/GarellyImg",
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { GarellyImg },
    template: `<GarellyImg v-bind="$props" />`
})

export const garelly_img = Template.bind({})
garelly_img.args = {
    imgName: "logo_white_pc.png",
    contentSection: "buttle"
}