import { ref } from "vue";
import { defineStore } from "pinia";
import { MODES } from "@/models/modes.model";

export const useModeStore = defineStore("mode", () => {
  const mode = ref(MODES.DARK);
  function changeMode(payload: MODES) {
    mode.value = payload;
  }

  return { mode, changeMode };
});
