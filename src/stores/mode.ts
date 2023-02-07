import { ref } from "vue";
import { defineStore } from "pinia";

export const useMode = defineStore("mode", () => {
  const mode = ref("dark");
  function changeMode(payload: "light" | "dark") {
    mode.value = payload;
  }

  return { mode, changeMode };
});
