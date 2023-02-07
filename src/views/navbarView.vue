<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMenu } from "@mdi/js";
</script>

<template>
  <div class="navbar">
    <p class="navbar__title Pr-M">&lt;RodoPZ/></p>
    <svg-icon type="mdi" :path="mdiMenu"></svg-icon>
  </div>
</template>

<style scoped lang="scss">
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
