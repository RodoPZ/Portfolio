<script setup lang="ts">
import SocialLinksComponent from "@cl/hero/SocialLinksComponent.vue";
</script>

<template>
  <div class="footer">
    <h2 class="H2-M">&lt;RodoPZ/></h2>
    <h3 class="H3-M footer__subtitle">Front Developer</h3>
    <div class="footer__divider"></div>
    <p class="Pr-M">Designed and built by RodoPZ</p>
    <SocialLinksComponent :size="'24px'" />
  </div>
</template>

<style scoped lang="scss">
.footer {
  background-color: $background-black-1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px 0px;
  &__subtitle {
    color: $secondary-dark;
  }
  &__divider {
    background-color: $background-light-1;
    width: 100%;
    height: 2px;
  }
}
</style>
