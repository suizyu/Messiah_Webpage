import CharacterListItem from "../../atoms/CharacterListItem.vue";

export default {
    title: "atoms/CharacterListItem",
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { CharacterListItem },
    template: `<CharacterListItem v-bind="$props" />`
})

export const elvis = Template.bind({})
elvis.args = {
    imgKey: "elvis",
    name: "エルヴィス"
}

export const rih = Template.bind({})
rih.args = {
    imgKey: "rih",
    name: "リーフ"
}