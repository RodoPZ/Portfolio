<script setup lang="ts">
import LanguageSkillComponent from "@landing/skillsSection/LanguageSkillComponent.vue";
import SkillDisplay from "@landing/skillsSection/SkillDisplay.vue";
import { languageList, techList } from "./constants";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <div class="skillSection mt-5">
    <h2 class="text-center mb-0">
      {{ t("landing.skills.title") }}
    </h2>
    <p class="skillSection__description mb-3">
      {{ t("landing.skills.description") }}
    </p>
    <LanguageSkillComponent
      :list="languageList"
      :title="t('landing.skills.languages')"
    />
    <SkillDisplay :list="techList" :title="t('landing.skills.technologies')" />
  </div>
</template>

<style scoped lang="scss">
@import "@bootstrap/scss/functions";
@import "@bootstrap/scss/variables";
@import "@bootstrap/scss/mixins";
.container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.skillSection {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 16px;
  &__description {
    text-align: justify;
  }
}

@include media-breakpoint-up(sm) {
  .skillSection {
    gap: 24px;
  }
}
</style>
