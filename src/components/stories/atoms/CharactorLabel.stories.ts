import CharactorLabel from "../../atoms/CharactorLabel.vue";

export default {
    title: "atoms/CharactorLabel",
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { CharactorLabel },
    template: `<CharactorLabel v-bind="$props" />`
})

export const default_state = Template.bind({})
default_state.args = {
    name: "デフォルトネーム",
    spelling: "Default Name",
    voiceActor: "なし",
    border: true
}

export const ex_reif = Template.bind({})
ex_reif.args = {
    name: "リーフ",
    spelling: "Rih",
    voiceActor: "--",
    border: true
}