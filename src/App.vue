<script setup lang="ts">
import NavbarView from "./views/NavbarView.vue";
import HeroView from "./views/HeroView.vue";
import SkillsView from "./views/skills/SkillsView.vue";
import ProjectsView from "./views/projects/ProjectsView.vue";
import ContactMeView from "./views/ContactMeView.vue";
import FooterView from "./views/FooterView.vue";
</script>

<template>
  <header>
    <nav>
      <NavbarView />
    </nav>
  </header>
  <main>
    <section id="About">
      <HeroView />
    </section>
    <section id="Skills">
      <SkillsView />
    </section>
    <section id="Projects">
      <ProjectsView />
    </section>
    <section id="ContactMe">
      <ContactMeView />
    </section>
  </main>
  <footer>
    <FooterView />
  </footer>
</template>

<style>
main {
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1024px;
  padding: 0px 20px;
}
section {
  min-height: 100vh;
  display: flex;
  /* padding-top: 60px; */
  align-items: center;
}
</style>
