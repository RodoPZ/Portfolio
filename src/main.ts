import { createApp } from "vue";
import { createPinia } from "pinia";
import i18n from "./plugins/i18n";

import App from "./App.vue";
import "@/assets/styles/main.scss";

const app = createApp(App);
app.use(i18n);
app.use(createPinia());
app.mount("#app");
