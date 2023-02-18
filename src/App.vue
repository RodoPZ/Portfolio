<script setup lang="ts">
import NavbarView from "./views/NavbarView.vue";
import HeroView from "./views/HeroView.vue";
import BannerComponent from "./components/BannerComponent.vue";
import SkillsView from "./views/SkillsView.vue";
import ProjectsView from "./views/ProjectsView.vue";
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
    <section>
      <HeroView />
    </section>
    <section>
      <BannerComponent :text="'Skills'" />
      <SkillsView />
    </section>
    <section>
      <BannerComponent :text="'Projects'" />
      <ProjectsView />
    </section>
    <section>
      <BannerComponent :text="'Contact me!'" />
      <ContactMeView />
    </section>
  </main>
  <footer>
    <FooterView />
  </footer>
</template>

<style>
main {
  margin: 0 20px;
}
</style>
