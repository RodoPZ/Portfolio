import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

const i18n = createI18n({
  globalInjection: true,
  legacy: false, // Usa el modo Composition API
  locale: "es", // Idioma predeterminado
  messages,
});

console.log(i18n.global.locale.value);

export default i18n;
