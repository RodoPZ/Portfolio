<script setup lang="ts">
import ButtonComponent from "@landing/buttons/ButtonComponent.vue";
import { useI18n } from "vue-i18n";
import { useMobileMenuStore } from "@/stores/buttons";
import { useModeStore } from "@/stores/mode";
import i18n from "@/plugins/i18n";
import { LANGUAGES } from "@/models/languages.model";
import { MODES, MODE_ICONS } from "@/models/modes.model";
import { computed } from "vue";
import { downloadResume } from "@/views/utils";

const { t } = useI18n();
const mobileMenu = useMobileMenuStore();
const mode = useModeStore();

let languageText = LANGUAGES.ES;

const handleChangeLanguage = () => {
  i18n.global.locale.value = languageText =
    i18n.global.locale.value === LANGUAGES.EN ? LANGUAGES.ES : LANGUAGES.EN;
};

const handleChangeMode = () => {
  const newMode = mode.mode === MODES.DARK ? MODES.LIGHT : MODES.DARK;
  mode.changeMode(newMode);

  // get html element
  // get html element
  const htmlElement = document.documentElement;

  // change "data-bs-theme" attribute
  htmlElement.setAttribute("data-bs-theme", mode.mode);
};

const modeIcons = computed(() => {
  return mode.mode === MODES.DARK
    ? MODE_ICONS.DARK_MODE
    : MODE_ICONS.LIGHT_MODE;
});
</script>

<template>
  <div v-if="mobileMenu.mobileMenu" class="navlinks__container">
    <ButtonComponent
      :handleClick="handleChangeMode"
      :iconName="modeIcons"
      :style="'border-0'"
    />
    <ButtonComponent
      :handleClick="handleChangeLanguage"
      :title="languageText.toUpperCase()"
      iconName="translate"
    />
  </div>
  <a href="#About"
    ><p>{{ t("landing.navbar.about") }}</p></a
  >
  <a href="#Skills"
    ><p>{{ t("landing.navbar.skills") }}</p></a
  >
  <a href="#Projects"
    ><p>{{ t("landing.navbar.projects") }}</p></a
  >
  <a href="#ContactMe"
    ><p>{{ t("landing.navbar.contact_me") }}</p></a
  >
  <div v-if="!mobileMenu.mobileMenu" class="navlinks__container">
    <ButtonComponent
      :handleClick="handleChangeMode"
      :iconName="modeIcons"
      :style="'border-0'"
    />
    <ButtonComponent
      :handleClick="handleChangeLanguage"
      :title="languageText.toUpperCase()"
      iconName="translate"
    />
  </div>
  <div>
    <ButtonComponent title="Resume" :handleClick="downloadResume" />
  </div>
</template>

<style scoped lang="scss">
@import "@bootstrap/scss/functions";
@import "@bootstrap/scss/variables";
@import "@bootstrap/scss/mixins";

.navlinks {
  &__container {
    display: flex;
    gap: 8px;
    width: 140px;
    height: 36px;
  }
}
</style>
