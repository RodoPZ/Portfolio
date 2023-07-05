<script setup lang="ts">
import NavLinksComponent from "@cl/navbar/NavLinksComponent.vue";
import MobileMenuView from "@cl/navbar/MobileMenuView.vue";
</script>

<template>
  <div class="navbar">
    <a href="/" class="navbar__title Pr-M">&lt;RodoPZ/></a>
    <div class="desktopMenu">
      <NavLinksComponent />
    </div>
    <MobileMenuView class="mobileMenu" />
  </div>
</template>

<style scoped lang="scss">
.mobileMenu {
  display: none;
}
.desktopMenu {
  display: flex;
  align-items: center;
  gap: 12px;
}

.navbar {
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 0px 20px;
  background-color: $background-black;
  height: 64px;
  color: $background-light;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &__title {
    text-decoration: none;
    font-weight: bold;
  }
}

@media (max-width: 768px) {
  .mobileMenu {
    display: block;
  }
  .desktopMenu {
    display: none;
  }
}
</style>
