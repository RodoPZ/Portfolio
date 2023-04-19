import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import "@/assets/styles/main.scss";

const i18n = createI18n({});
const app = createApp(App);

app.use(createPinia());

app.use(i18n);
app.mount("#app");
