<template>
    <fa :icon="GetIcon" class="sns-icon" />
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
                return faLine;
            } else if (this.iconName == 'twitter') {
                return faTwitter;
            } else if (this.iconName == 'facebook') {
                return faFacebookSquare;
            }
        }
    }
})
</script>
<style scoped>
    .sns-icon {
        color: rgb(32, 32, 32);
        font-size: 2.5rem;
    }
</style>