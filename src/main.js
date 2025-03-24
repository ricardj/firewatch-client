import {createApp} from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import {VFileUpload} from 'vuetify/labs/VFileUpload'


const vuetify = createVuetify({
    components: {
        ...components,
        VFileUpload
    },
    directives,
})


createApp(App).use(vuetify).mount('#app')
