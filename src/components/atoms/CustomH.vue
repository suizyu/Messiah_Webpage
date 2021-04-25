<script lang="ts">
import Vue from 'vue'

export default Vue.component('custom-heading',{
    render: function(createElement) {
        return createElement(
            'h' + this.level,
            [
                this.$slots.default, 
                this.decorate ?
                    createElement(
                        'img', 
                        { 
                            attrs: { src: require('../../assets/images/heading-border-pc.png') },
                            class:  "border-decorate"
                        }
                    ) :
                    ''
            ]
        )
    },
    props:{
        level: {
            type: Number,
            required: true
        },
        decorate: {
            type: Boolean,
            default: false,
            required: false
        }
    },
    data() {
        return {
            imagePath: require("../../assets/images/heading-border-pc.png")
        }
    }
})
</script>
<style>
    .border-decorate {
        display: block;
        position: inherit;
        height: 13vh;
        max-height: 45px;
    }
    h1, h2, h3, h4, h5, h6 {
        color: white;
        text-align: center;
        position: relative;
    }
    img {
        margin: 0 auto;
        position: absolute;
        bottom: 7px;
    }

</style>