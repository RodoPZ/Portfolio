<script setup lang="ts">
import SkillDisplay from "@/components/skillDisplay.vue";
</script>

<template>
  <div class="skillList">
    <H2 class="skillList__title H2-M">Frontend</H2>
    <div class="skillList__container">
      <SkillDisplay :source="'src/assets/icons/CSS.svg'" :text="'CSS'" />
      <SkillDisplay :source="'src/assets/icons/HTML.svg'" :text="'HTML'" />
      <SkillDisplay
        :source="'src/assets/icons/Javascript.svg'"
        :text="'JavaScript'"
      />
      <SkillDisplay
        :source="'src/assets/icons/Typescript.svg'"
        :text="'Typescript'"
      />
      <SkillDisplay :source="'src/assets/icons/CSS.svg'" :text="'CSS'" />
      <SkillDisplay :source="'src/assets/icons/Sass.svg'" :text="'Sass'" />
      <SkillDisplay
        :source="'src/assets/icons/Bootstrap.svg'"
        :text="'Bootstrap'"
      />
      <SkillDisplay :source="'src/assets/icons/React.svg'" :text="'React'" />
      <SkillDisplay :source="'src/assets/icons/Redux.svg'" :text="'Redux'" />
      <SkillDisplay :source="'src/assets/icons/Vue.svg'" :text="'Vue'" />
      <SkillDisplay :source="'src/assets/icons/Vite.svg'" :text="'Vite'" />
      <SkillDisplay
        :source="'src/assets/icons/Webpack.svg'"
        :text="'Webpack'"
      />
    </div>
    <H2 class="skillList__title H2-M">Backend</H2>
    <div class="skillList__container">
      <SkillDisplay :source="'src/assets/icons/MySQL.svg'" :text="'MySQL'" />
      <SkillDisplay :source="'src/assets/icons/Python.svg'" :text="'Python'" />
      <SkillDisplay
        :source="'src/assets/icons/Firebase.svg'"
        :text="'Firebase'"
      />
    </div>
    <H2 class="skillList__title H2-M">Mobile</H2>
    <div class="skillList__container">
      <SkillDisplay :source="'src/assets/icons/Dart.svg'" :text="'Dart'" />
      <SkillDisplay
        :source="'src/assets/icons/Flutter.svg'"
        :text="'Flutter'"
      />
    </div>
    <H2 class="skillList__title H2-M">Testing</H2>
    <div class="skillList__container">
      <SkillDisplay
        :source="'src/assets/icons/Puppeteer.svg'"
        :text="'Puppeteer'"
      />
      <SkillDisplay
        :source="'src/assets/icons/Selenium.svg'"
        :text="'Selenium'"
      />
      <SkillDisplay
        :source="'src/assets/icons/Cypress.svg'"
        :text="'Cypress'"
      />
      <SkillDisplay :source="'src/assets/icons/Jest.svg'" :text="'Jest'" />
    </div>
    <H2 class="skillList__title H2-M">Other</H2>
    <div class="skillList__container">
      <SkillDisplay :source="'src/assets/icons/Figma.svg'" :text="'Figma'" />
      <SkillDisplay :source="'src/assets/icons/Git.svg'" :text="'Git/Github'" />
      <SkillDisplay :source="'src/assets/icons/Linux.svg'" :text="'Linux'" />
      <SkillDisplay :source="'src/assets/icons/Godot.svg'" :text="'Godot'" />
      <SkillDisplay :source="'src/assets/icons/Trello.svg'" :text="'Trello'" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.skillList {
  margin: 12px;
  &__title {
    text-align: center;
  }
  &__container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }
}
</style>
