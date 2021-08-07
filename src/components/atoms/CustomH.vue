<script lang="ts">
import Vue from 'vue'
export default Vue.component('custom-heading',{
    render: function(createElement) {
        return createElement(
            'h' + this.level,
            { class: "custom-h"  },
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
    }
})
</script>
<style scoped>
    .border-decorate {
        display: block;
        position: inherit;
        height: 13vh;
        max-height: 45px;
    }
    .custom-h {
        color: white;
        font-family: classico-urw, sans-serif;
        text-align: center;
        font-size: 2rem;
        position: relative;
        margin: 10px 0;
    }
    img {
        margin: 3px auto;
        position: absolute;
        bottom: 7px;
    }
</style>