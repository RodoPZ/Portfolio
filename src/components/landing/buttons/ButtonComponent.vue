<script setup lang="ts">
defineProps(["title", "handleClick", "type"]);
</script>

<template>
  <button class="btn w-100 h-100" :type="type" @click="handleClick">
    <p class="mb-0">{{ title }}</p>
  </button>
</template>

<style scoped lang="scss">
.btn {
  width: fit-content;
  max-width: 320px;
  background-color: transparent;
  border: 2px solid $background-light;
  border-radius: 4px;
  padding: 4px 8px;
  &__container {
    display: flex;
    justify-content: center;
  }
  &:hover,
  &:focus {
    color: $primary-dark;
    border: 2px solid $primary-dark;
  }
}
</style>
