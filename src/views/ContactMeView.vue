<script setup lang="ts">
import SocialLinksComponent from "@landing/hero/SocialLinksComponent.vue";

import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="form mb-4" onsubmit="handleClick">
    <h2 class="text-center mb-0">
      {{ t("landing.contact_me.title") }}
    </h2>
    <p class="form__text m-0">
      {{ t("landing.contact_me.description") }}
    </p>
    <SocialLinksComponent :size="40" />
  </div>
</template>

<style scoped lang="scss">
@import "@bootstrap/scss/functions";
@import "@bootstrap/scss/variables";
@import "@bootstrap/scss/mixins";
.form {
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  &__text {
    text-align: justify;
  }
  &__section {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  &__textArea {
    color: $body-color;
    box-sizing: border-box;
    height: 32px;
    background: $background-black-1;
    border: 2px solid $background-light;
    border-radius: 4px;
    height: 100%;
    width: 100%;
    &::placeholder {
      color: $background-light-1;
    }
    &:focus {
      outline: 3px solid $primary-dark;
    }
  }
}

textarea {
  font-family: inherit;
}

@include media-breakpoint-up(sm) {
  .form {
    &__text {
      text-align: center;
    }
  }
}
</style>
