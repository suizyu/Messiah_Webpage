import SingleSlide from "../../pageContents/slide/SingleSlide.vue";

export default {
    title: "pageContents/slide/SingleSlide",
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { SingleSlide },
    template: `<SingleSlide v-bind="$props" />`
})

export const single_slide = Template.bind({})
single_slide.args = {
    slideItems: [
        {
            imgName: "logo_white_pc.png",
            section: "buttle",
            id: 0
        }
    ]
}