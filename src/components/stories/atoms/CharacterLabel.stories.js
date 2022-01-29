import CharacterLabel from "../../atoms/CharacterLabel.vue";

export default {
    title: "atoms/CharacterLabel",
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { CharacterLabel },
    template: `<CharacterLabel v-bind="$props" />`
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