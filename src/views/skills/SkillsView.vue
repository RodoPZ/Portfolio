<script setup lang="ts">
import LanguageSkillComponent from "@landing/skillsSection/LanguageSkillComponent.vue";
import SkillDisplay from "@landing/skillsSection/SkillDisplay.vue";
import { languageList, techList } from "./constants";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <div class="skillSection">
    <h2 class="text-center mb-0">
      {{ t("landing.skills.title") }}
    </h2>
    <LanguageSkillComponent
      :list="languageList"
      :title="t('landing.skills.languages')"
    />
    <SkillDisplay :list="techList" :title="t('landing.skills.technologies')" />
  </div>
</template>

<style scoped lang="scss">
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
}
</style>
