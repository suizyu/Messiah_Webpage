export default function(context) {
    context.$axios.onRequest((config) => {
        config.headers.common =  {'X-API-KEY': context.$config.apiKey }
    })
}