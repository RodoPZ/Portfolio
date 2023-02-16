<script setup lang="ts">
import LanguageSkillComponent from "@/components/skillsSection/LanguageSkillComponent.vue";
import SkillDisplay from "@/components/skillsSection/SkillDisplay.vue";
const languageList = [
  { name: "JavaScript", stars: 2 },
  { name: "Python", stars: 2 },
  { name: "Dart", stars: 1 },
];
const FrontendList = [
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
];
const BackendList = ["MySQL", "Firebase"];
const MobileList = ["Flutter"];
const TestingList = ["Puppeteer", "Selenium", "Cypress", "Jest"];
const OtherList = ["Figma", "Git", "Linux", "Godot", "Trello"];
</script>

<template>
  <div class="skillSection">
    <LanguageSkillComponent :list="languageList" :title="'Languages'" />
    <SkillDisplay :list="FrontendList" :title="'Frontend'" />
    <SkillDisplay :list="BackendList" :title="'Backend'" />
    <SkillDisplay :list="MobileList" :title="'Mobile'" />
    <SkillDisplay :list="TestingList" :title="'Testing'" />
    <SkillDisplay :list="OtherList" :title="'Other'" />
  </div>
</template>

<style scoped lang="scss">
.skillSection {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
