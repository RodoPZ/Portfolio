<script setup lang="ts">
import LanguageSkillComponent from "@cl/skillsSection/LanguageSkillComponent.vue";
import SkillDisplay from "@cl/skillsSection/SkillDisplay.vue";
import BannerComponent from "@/components/BannerComponent.vue";
import { languageList, techList } from "./constants";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <div class="skillSection">
    <BannerComponent :text="t('landing.banner.skills')" />
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
  padding-top: 70px;
  gap: 16px;
}
</style>
