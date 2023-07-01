import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

const i18n = createI18n({
  globalInjection: true,
  legacy: false, // Usa el modo Composition API
  locale: "en", // Idioma predeterminado
  messages,
});

export default i18n;
