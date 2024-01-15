<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <div class="footer">
    <h2 class="text-primary">&lt;RodoPZ/></h2>
    <h3 class="footer__subtitle">{{ t("landing.footer.job_title") }}</h3>
    <div class="footer__divider"></div>
    <p class="text-center">{{ t("landing.footer.subtitle") }}</p>
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
  &__text {
    text-align: center;
  }
}
</style>
