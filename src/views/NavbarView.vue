<script setup lang="ts"></script>

<template>
  <div class="navbar">
    <p class="navbar__title Pr-M">&lt;RodoPZ/></p>
    <span class="material-symbols-outlined"> menu </span>
  </div>
</template>

<style scoped lang="scss">
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}
.navbar {
  position: sticky;
  z-index: 3;
  background-color: $background-black;
  height: 64px;
  color: $background-light;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  &__title {
    font-weight: bold;
  }
}
</style>
