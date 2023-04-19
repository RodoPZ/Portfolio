<script setup lang="ts">
import LanguageSkillComponent from "@/components/skillsSection/LanguageSkillComponent.vue";
import SkillDisplay from "@/components/skillsSection/SkillDisplay.vue";
import BannerComponent from "@/components/BannerComponent.vue";
const languageList = [
  { name: "JavaScript", stars: 2 },
  { name: "Python", stars: 2 },
  { name: "Dart", stars: 1 },
];
const TechList = [
  "CSS",
  "HTML",
  "TypeScript",
  "Sass",
  "Bootstrap",
  "React",
  "Redux",
  "Vue",
  "Vite",
  "Webpack",
  "MySQL",
  "Firebase",
  "Flutter",
  "Puppeteer",
  "Selenium",
  "Cypress",
  "Jest",
  "Figma",
  "Git",
  "Linux",
  "Godot",
];
</script>

<template>
  <div class="skillSection">
    <BannerComponent :text="'Skills'" />
    <LanguageSkillComponent :list="languageList" :title="'Languages'" />
    <SkillDisplay :list="TechList" :title="'Tech'" />
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
  gap: 16px;
}
</style>
