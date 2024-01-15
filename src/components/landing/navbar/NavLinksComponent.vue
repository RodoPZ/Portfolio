<script setup lang="ts">
import ButtonComponent from "@landing/buttons/ButtonComponent.vue";
import { useI18n } from "vue-i18n";
import { useMobileMenuStore } from "@/stores/buttons";

const mobileMenu = useMobileMenuStore();
const { t } = useI18n();

const onClick = () => {
  mobileMenu.setChangeMobileMenu();
};
</script>

<template>
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
  <div>
    <ButtonComponent title="Resume" />
  </div>
</template>
