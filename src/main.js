import './assets/main.css'
import SelectorBar from './components/SelectorBar.vue'
import SingleStateButton from "./components/SingleStateButton.vue"
import TwoStateButton from "./components/TwoStateButton.vue"
import ListSingleSelect from "./components/ListSingleSelect.vue"
import Icon from "./components/Icon.vue"

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.component("selector-bar", SelectorBar)
app.component("single-state-button", SingleStateButton)
app.component("two-state-button", TwoStateButton)
app.component("list-single-select", ListSingleSelect)
app.component("icon", Icon)
app.mount('#app')
