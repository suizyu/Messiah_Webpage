import ContentDiv from "../../atoms/ContentDiv.vue";

export default {
    title: "atoms/ContentDiv",
}

export const content_div = () => ({
    components: { ContentDiv },
    template: "<ContentDiv>aaa<ContentDiv />"
})