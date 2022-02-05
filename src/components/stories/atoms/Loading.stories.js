import LoadingIcon from "../../atoms/LoadingIcon.vue";

export default {
    title: "atoms/LoadingIcon",
}

export const loading_icon = () => ({
    components: { LoadingIcon },
    template: "<LoadingIcon />"
})