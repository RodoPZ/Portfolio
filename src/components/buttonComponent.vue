<script setup lang="ts"></script>

<template>
  <div class="btn__container">
    <button class="btn Pr-M" type="submit">Resume</button>
  </div>
</template>

<style scoped lang="scss">
.btn {
  width: fit-content;
  background-color: transparent;
  border: 2px solid $background-light;
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
