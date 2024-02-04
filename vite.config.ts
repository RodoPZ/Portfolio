import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: [path.resolve(__dirname, "public/locales/**.yml")],
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@landing",
        replacement: fileURLToPath(
          new URL("./src/components/landing", import.meta.url)
        ),
      },
      {
        find: "@bootstrap",
        replacement: fileURLToPath(
          new URL("./node_modules/bootstrap", import.meta.url)
        ),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "src/assets/styles/variables.scss";
          @import "src/assets/styles/animations.scss";
          `,
      },
    },
  },
});
