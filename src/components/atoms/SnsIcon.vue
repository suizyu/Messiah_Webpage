<template>
    <fa :icon="GetIcon"
        :style="iconColor"
        class="sns-icon" />
</template>
<script lang="ts">
import Vue from 'vue'
import { faLine, faTwitter, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
export default Vue.extend({
    props: {
        iconName: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: false
        }
    },
    computed: {
        GetIcon() {
            if (this.iconName == 'line') {
                return faLine
            } else if (this.iconName == 'twitter') {
                return faTwitter
            } else if (this.iconName == 'facebook') {
                return faFacebookSquare
            }
        },
        iconColor() {
            let colorCode = "rgba(32, 32, 32)";
            if (this.iconName == 'line') {
                colorCode = "#06c755"
            } else if (this.iconName == 'twitter') {
                colorCode = "#1DA1F2"
            } else if (this.iconName == 'facebook') {
                colorCode = "#1877f2"
            }
            return { '--icolor' : colorCode }
        }
    }
})
</script>
<style scoped>
    .sns-icon {
        --icolor: rgba(32, 32, 32);
        color:  var(--icolor);
        font-size: 2.5rem;
        transition: .3s;
    }
    .sns-icon:hover {
        opacity: 0.5;
    }
</style>