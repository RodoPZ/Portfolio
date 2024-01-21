<script setup lang="ts">
import CardComponent from "@landing/projectsSection/CardComponent.vue";
import { ref, watch } from "vue";
import { ALL_CATEGORIES } from "./constants";
import { useI18n } from "vue-i18n";
import { useCategoryStore } from "@/stores/buttons";
import { CATEGORIES } from "@/models/categories.model";
import { useModeStore } from "@/stores/mode";
import { MODES } from "@/models/modes.model";
const categories = useCategoryStore();
const { t } = useI18n();

const WebAnimation = ref("");
const VideoGamesAnimation = ref("animate__animated animate__slideOutRight");
const containerHeight = ref("100%");

const mode = useModeStore();

watch(
  () => categories.category,
  (newValue) => {
    if (newValue === CATEGORIES.WEB) {
      containerHeight.value = "100%";
      WebAnimation.value = "animate__animated animate__slideInLeft";
      VideoGamesAnimation.value = "animate__animated animate__slideOutRight";
    } else if (newValue === CATEGORIES.VIDEOGAMES) {
      containerHeight.value = "1286px";
      WebAnimation.value = "animate__animated animate__slideOutLeft";
      VideoGamesAnimation.value = "animate__animated animate__slideInRight";
    }
  }
);
</script>

<template>
  <div class="projects">
    <h2 class="text-center mb-3">
      {{ t("landing.projects.title") }}
    </h2>
    <p class="projects__description mb-3">
      {{ t("landing.projects.description") }}
    </p>
    <!-- <CategorySelector /> -->
    <div class="projects__card">
      <CardComponent
        v-for="(item, index) in [...ALL_CATEGORIES[0], ...ALL_CATEGORIES[1]]"
        :key="index"
        :title="item.title"
        :emoji="item.emoji"
        :text="item.description"
        :tags="item.tags"
        :links="item.links"
        :titleColor="mode.mode == MODES.DARK ? item.color : item.darkColor"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@bootstrap/scss/functions";
@import "@bootstrap/scss/variables";
@import "@bootstrap/scss/mixins";
.projects {
  padding-top: 70px;
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;
  &__description {
    text-align: justify;
  }
  &__card {
    gap: 16px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}

@include media-breakpoint-up(sm) {
  .projects {
    &__description {
      text-align: center;
    }
  }
}
</style>
