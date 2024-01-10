<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <div class="btn__container">
    <button class="btn Pr-M" type="submit">
      <p class="mb-0">{{ t("landing.buttons.resume") }}</p>
    </button>
  </div>
</template>

<style scoped lang="scss">
.btn {
  width: fit-content;
  background-color: transparent;
  border: 2px solid $background-light;
  border-radius: 4px;
  padding: 4px 8px;
  &__container {
    display: flex;
    justify-content: center;
  }
  &:hover {
    color: $primary-dark;
    border: 2px solid $primary-dark;
  }
}
</style>
