import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from "./router";
import CanvasJSChart from '@canvasjs/vue-charts';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
app.use(app);
app.use(router);
app.use(pinia);
app.use(CanvasJSChart);
app.mount("#app");