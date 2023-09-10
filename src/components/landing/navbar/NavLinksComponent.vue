<script setup lang="ts">
import ButtonComponent from "@cl/buttons/ButtonComponent.vue";
import { useI18n } from "vue-i18n";
import { useMobileMenuStore } from "@/stores/buttons";

const mobileMenu = useMobileMenuStore();
const { t } = useI18n();

const onClick = () => {
  mobileMenu.setChangeMobileMenu();
};
</script>

<template>
  <a @click="onClick" class="Pr-M link" href="#About">{{
    t("landing.navbar.about")
  }}</a>
  <a @click="onClick" class="Pr-M link" href="#Skills">{{
    t("landing.navbar.skills")
  }}</a>
  <a @click="onClick" class="Pr-M link" href="#Projects">{{
    t("landing.navbar.projects")
  }}</a>
  <a @click="onClick" class="Pr-M link" href="#ContactMe">{{
    t("landing.navbar.contact_me")
  }}</a>
  <ButtonComponent />
</template>

<style scoped lang="scss">
.link {
  text-decoration: none;
}
</style>
