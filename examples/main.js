import { createApp } from "vue";
import App from "./App.vue";
import rtyUiPlus from 'rty-ui-plus'
import 'rty-ui-plus/es/style.css'

const app = createApp(App);

app.use(rtyUiPlus).mount("#app");