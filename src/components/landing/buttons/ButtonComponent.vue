<script setup lang="ts">
import { defineProps } from "vue";
import type { PropType } from "vue";

defineProps({
  title: String,
  handleClick: {
    type: Function as PropType<(payload: MouseEvent) => void>,
    default: () => {}, // default value
  },
  type: {
    type: String as () => "button" | "submit" | "reset",
    default: "button", // default value
  },
  iconName: String,
  style: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <button
    :class="style + ' d-flex btn w-100 h-100 justify-content-center '"
    :type="type"
    @click="handleClick"
  >
    <span v-if="iconName" class="material-symbols-outlined">
      {{ iconName }}
    </span>
    <p v-if="title" class="mb-0">{{ title }}</p>
  </button>
</template>

<style scoped lang="scss">
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}

.btn {
  width: fit-content;
  max-width: 320px;
  background-color: transparent;
  border: 2px solid $body-bg-dark;
  border-radius: 4px;
  padding: 4px 8px;
  gap: 12px;
  &__container {
    display: flex;
    justify-content: center;
  }
  &:hover,
  &:focus {
    color: $primary;
    border: 2px solid $primary;
  }
}

[data-bs-theme="dark"] {
  .btn {
    border: 2px solid $body-bg;
    &:hover,
    &:focus {
      color: $primary-dark;
      border: 2px solid $primary-dark;
    }
  }
}
</style>
