import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faLine, faTwitter, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false;
const snsIcons = [faLine, faTwitter, faFacebookSquare];
snsIcons.forEach((icon) => library.add(icon));

Vue.component('fa', FontAwesomeIcon);