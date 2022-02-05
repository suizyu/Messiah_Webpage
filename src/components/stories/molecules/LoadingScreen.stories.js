import LoadingScreen from "../../molecules/LoadingScreen.vue";

export default {
    title: "molecules/LoadingScreen",
}

export const loading_screen = () => ({
    components: { LoadingScreen },
    template: "<LoadingScreen />"
})