<script setup lang="ts">
import FigmaIcon from "@/assets/icons/FigmaIcon.vue";
import GithubIcon from "@/assets/icons/GithubIcon.vue";
import LinkIcon from "@/assets/icons/LinkIcon.vue";
import WebIcon from "@/assets/icons/WebIcon.vue";
import type { ICON_BUTTONS } from "@/models/IconButton.model";
defineProps<{
  text: ICON_BUTTONS;
  link: string | null;
}>();
</script>

<template>
  <a v-if="link != null" :href="link" class="logoIcon">
    <FigmaIcon v-if="text == 'Figma'" />
    <GithubIcon v-else-if="text == 'Github'" :size="'18px'" />
    <WebIcon v-else-if="text == 'Web'" />
    <LinkIcon v-else-if="text == 'Link'" />
    <p class="logoIcon__text">{{ text }}</p>
  </a>
</template>

<style scoped lang="scss">
.logoIcon {
  text-decoration: none;
  border: 2px solid $body-bg-dark;
  background-color: $background-light;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 4px;
  gap: 4px;
  width: 100%;
  &__text {
    margin: 0;
  }
}

[data-bs-theme="dark"] {
  .logoIcon {
    border: 2px solid $body-bg;
    background-color: $background-black;
  }
}
</style>
