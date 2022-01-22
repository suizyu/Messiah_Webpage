import CharacterAbout from "../../atoms/CharacterAbout.vue";

export default {
    title: "atoms/CharacterAbout",
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { CharacterAbout },
    template: `<CharacterAbout v-bind="$props" />`
})

export const elvis = Template.bind({})
elvis.args = {
    imgKey: "elvis",
    name: "エルヴィス",
    about: "駆け出し運び屋の少年。<br>仮面の集団に襲撃されているリーフの事情を聞き、旅のガイドを買って出る。"
}

export const rih = Template.bind({})
rih.args = {
    imgKey: "rih",
    name: "リーフ"
}