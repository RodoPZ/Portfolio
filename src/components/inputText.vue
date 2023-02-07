<script setup lang="ts">
import { ref } from "vue";
const text = ref("RodoPZ - Portfolio");
const changeText = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.textContent?.length == 0) {
    target.textContent = "RodoPZ - Portfolio";
  }

  document.title = target.textContent || "RodoPZ - Portfolio";
};
</script>

<template>
  <span
    contenteditable="true"
    class="inputText"
    type="text"
    @input="changeText"
    onpaste="return false;"
    >{{ text }}</span
  >
</template>

<style scoped lang="scss">
.inputText {
  color: $background-light;
  padding: 0px 4px;
  margin: 0px 4px;
  border: 0;
  background-color: $background-black;
}
</style>
