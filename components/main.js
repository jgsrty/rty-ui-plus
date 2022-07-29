import { createApp } from "vue";
import App from "./App.vue";
import rtyUiPlus from "./index";

const app = createApp(App);

app.use(rtyUiPlus).mount("#app");
// app.mount("#app");
