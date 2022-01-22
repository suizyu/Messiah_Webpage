export default function(context) {
    context.$axios.onRequest((config) => {
        config.headers['X-MICROCMS-API-KEY'] = context.$config.apiKey
    })
}