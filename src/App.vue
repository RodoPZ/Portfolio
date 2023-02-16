<script setup lang="ts">
import NavbarView from "./views/NavbarView.vue";
import HeroView from "./views/HeroView.vue";
import BannerComponent from "./components/BannerComponent.vue";
import SkillsView from "./views/SkillsView.vue";
import ProjectsView from "./views/ProjectsView.vue";
</script>

<template>
  <nav>
    <NavbarView />
  </nav>
  <main>
    <HeroView />
    <BannerComponent :text="'Skills'" />
    <SkillsView />
    <BannerComponent :text="'Projects'" />
    <ProjectsView />
  </main>
</template>

<style>
main {
  margin: 0 20px;
}
</style>
