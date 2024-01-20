<script setup lang="ts">
import ButtonComponent from "@landing/buttons/ButtonComponent.vue";
import { useI18n } from "vue-i18n";
import { useMobileMenuStore } from "@/stores/buttons";
import { useModeStore } from "@/stores/mode";
import i18n from "@/plugins/i18n";
import { LANGUAGES } from "@/models/languages.model";
import { MODES } from "@/models/modes.model";
const { t } = useI18n();
const mobileMenu = useMobileMenuStore();
const mode = useModeStore();

let languageText = LANGUAGES.ES;

const onClick = () => {
  mobileMenu.setChangeMobileMenu();
};

const handleChangeLanguage = () => {
  i18n.global.locale.value = languageText =
    i18n.global.locale.value === LANGUAGES.EN ? LANGUAGES.ES : LANGUAGES.EN;
};

const handleChangeMode = () => {
  mode.mode === MODES.DARK
    ? mode.changeMode(MODES.LIGHT)
    : mode.changeMode(MODES.DARK);

  // get html element
  // get html element
  const htmlElement = document.documentElement;

  // change "data-bs-theme" attribute
  htmlElement.setAttribute("data-bs-theme", mode.mode);
};
</script>

<template>
  <div v-if="mobileMenu.mobileMenu" class="navlinks__container">
    <ButtonComponent
      :handleClick="handleChangeMode"
      iconName="dark_mode"
      :style="'border-0'"
    />
    <ButtonComponent
      :handleClick="handleChangeLanguage"
      :title="languageText.toUpperCase()"
      iconName="translate"
    />
  </div>
  <a @click="onClick" href="#About"
    ><p>{{ t("landing.navbar.about") }}</p></a
  >
  <a @click="onClick" href="#Skills"
    ><p>{{ t("landing.navbar.skills") }}</p></a
  >
  <a @click="onClick" href="#Projects"
    ><p>{{ t("landing.navbar.projects") }}</p></a
  >
  <a @click="onClick" href="#ContactMe"
    ><p>{{ t("landing.navbar.contact_me") }}</p></a
  >
  <div v-if="!mobileMenu.mobileMenu" class="navlinks__container">
    <ButtonComponent
      :handleClick="handleChangeMode"
      iconName="dark_mode"
      :style="'border-0'"
    />
    <ButtonComponent
      :handleClick="handleChangeLanguage"
      :title="languageText.toUpperCase()"
      iconName="translate"
    />
  </div>
  <div>
    <ButtonComponent title="Resume" />
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
