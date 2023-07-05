<script setup lang="ts">
import buttonComponent from "@cl/buttons/ButtonComponent.vue";
import SocialLinksComponent from "@cl/hero/SocialLinksComponent.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <div class="hero">
    <h1 class="H1-M hero__title">{{ t("landing.hero.name") }}</h1>
    <h2 class="H2-M hero__subtitle">{{ t("landing.hero.title") }}</h2>
    <p class="Ps-M hero__text">
      {{ t("landing.hero.description") }}
    </p>
    <SocialLinksComponent :size="'24px'" />
    <buttonComponent />
  </div>
</template>

<style scoped lang="scss">
.hero {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  height: 100vh;
  &__tag {
    color: $html-closing-tag;
    margin: 0;
    /* font-size: 1rem; */
  }
  &__title {
    text-align: center;
    color: $primary-dark;
    font-size: 56px;
    margin: 0;
  }
  &__subtitle {
    text-align: center;
    color: $secondary-dark;
    font-size: 28px;
    margin: 0;
  }
  &__text {
    text-align: center;
    margin: 0;
  }
}
</style>
