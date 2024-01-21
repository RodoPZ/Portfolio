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
    <nav class="bg-body">
      <NavbarView />
    </nav>
  </header>
  <main>
    <section id="About" ref="About">
      <HeroView />
    </section>
    <section id="Skills" ref="Skills">
      <SkillsView />
    </section>
    <section id="Projects" ref="Projects">
      <ProjectsView />
    </section>
    <section id="ContactMe" ref="ContactMe">
      <ContactMeView />
    </section>
  </main>
  <footer>
    <FooterView />
  </footer>
</template>

<style lang="scss">
@import "@bootstrap/scss/functions";
@import "@bootstrap/scss/variables";
@import "@bootstrap/scss/mixins";

#Projects {
  align-items: flex-start;
}
#About {
  background-color: $background-light-1;
  margin: 0;
  max-width: none;
  display: flex;
  justify-content: center;
}
main {
  margin: auto;
  display: flex;
  flex-direction: column;
}
section {
  min-height: 100vh;
  display: flex;
  /* padding-top: 60px; */
  align-items: center;
  padding: 0px 20px;
  max-width: 1024px;
  margin: auto;
}

nav {
  width: 100vw;
  height: 64px;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 2;
}

[data-bs-theme="dark"] {
  #About {
    background-color: $background-black-1;
  }
}
</style>
