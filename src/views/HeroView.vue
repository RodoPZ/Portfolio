<script setup lang="ts">
import type { Ref } from "vue";
import { ref, onMounted } from "vue";
import buttonComponent from "@landing/buttons/ButtonComponent.vue";
import SocialLinksComponent from "@landing/hero/SocialLinksComponent.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const Skills: Ref<HTMLElement | null> = ref(null);

const scrollToSkills = () => {
  if (Skills.value) {
    const top = Skills.value.getBoundingClientRect().top + window.scrollY - 50; // Subtract 100 pixels
    window.scrollTo({ top, behavior: "smooth" });
  }
};

onMounted(() => {
  Skills.value = document.getElementById("Skills") as HTMLElement;
});
</script>

<template>
  <div class="hero d-flex flex-column justify-content-center">
    <div class="hero__main d-flex flex-column">
      <h1 class="hero__title text-center text-primary m-0">
        {{ t("landing.hero.name") }}
      </h1>
      <h2 class="hero__subtitle text-center text-secondary m-0">
        {{ t("landing.hero.title") }}
      </h2>
      <p class="text-center m-0">
        {{ t("landing.hero.description") }}
      </p>
      <SocialLinksComponent :size="'48px'" />
      <buttonComponent />
    </div>
    <span
      @click="scrollToSkills"
      class="material-symbols-outlined text-primary slideInDown"
    >
      arrow_downward
    </span>
  </div>
</template>

<style scoped lang="scss">
.material-symbols-outlined {
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24;
  bottom: 20px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  // add pointer
  cursor: pointer;
}

.hero {
  height: 100vh;
  &__main {
    gap: 12px;
  }
  &__title {
    font-size: 30px;
  }
  &__subtitle {
    font-size: 28px;
  }
}
</style>
