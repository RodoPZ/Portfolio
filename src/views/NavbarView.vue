<script setup lang="ts">
import NavLinksComponent from "@landing/navbar/NavLinksComponent.vue";
import MobileMenuView from "@landing/navbar/MobileMenuView.vue";
import BannerComponent from "@/components/BannerComponent.vue";
</script>

<template>
  <div
    class="navbar d-flex flex-row justify-content-between align-items-center bg-body text-body"
  >
    <a href="/"><BannerComponent :text="'<RodoPZ/>'" /></a>
    <div class="desktopMenu">
      <NavLinksComponent />
    </div>
    <MobileMenuView class="mobileMenu" />
  </div>
</template>

<style scoped lang="scss">
@import "@bootstrap/scss/functions";
@import "@bootstrap/scss/variables";
@import "@bootstrap/scss/mixins";

.mobileMenu {
  display: none;
}
.desktopMenu {
  display: flex;
  align-items: center;
  gap: 18px;
}

.navbar {
  z-index: 3;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 0px 20px;
  height: 64px;
  color: $background-light;
}

@include media-breakpoint-down(md) {
  .mobileMenu {
    display: flex;
  }
  .desktopMenu {
    display: none;
  }
}
</style>
