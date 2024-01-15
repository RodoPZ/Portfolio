<script setup lang="ts">
import CardComponent from "@landing/projectsSection/CardComponent.vue";
import { ref, watch } from "vue";
import { ALL_CATEGORIES } from "./constants";
import { useI18n } from "vue-i18n";
import CategorySelector from "@/components/landing/projectsSection/CategorySelector.vue";
import { Category, useCategoryStore } from "@/stores/buttons";
const categories = useCategoryStore();
const { t } = useI18n();

const WebAnimation = ref("");
const VideoGamesAnimation = ref("animate__animated animate__slideOutRight");
const containerHeight = ref("100%");

watch(
  () => categories.category,
  (newValue) => {
    if (newValue === Category.WEB) {
      containerHeight.value = "100%";
      WebAnimation.value = "animate__animated animate__slideInLeft";
      VideoGamesAnimation.value = "animate__animated animate__slideOutRight";
    } else if (newValue === Category.VIDEOGAMES) {
      containerHeight.value = "1286px";
      WebAnimation.value = "animate__animated animate__slideOutLeft";
      VideoGamesAnimation.value = "animate__animated animate__slideInRight";
    }
  }
);
</script>

<template>
  <div class="projects">
    <h2 class="text-center mb-0">
      {{ t("landing.projects.title") }}
    </h2>
    <CategorySelector />
    <div id="projectsCarousel" class="slide h-100">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="projects__card--left">
            <CardComponent
              v-for="(item, index) in ALL_CATEGORIES[0]"
              :key="index"
              :title="item.title"
              :emoji="item.emoji"
              :text="item.description"
              :tags="item.tags"
              :links="item.links"
              :backgroud_image="item.backgroud_image"
              :titleColor="item.color"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div class="projects__card--left">
            <CardComponent
              v-for="(item, index) in ALL_CATEGORIES[1]"
              :key="index"
              :title="item.title"
              :emoji="item.emoji"
              :text="item.description"
              :tags="item.tags"
              :links="item.links"
              :backgroud_image="item.backgroud_image"
              :titleColor="item.color"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.projects {
  padding-top: 70px;
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;
  &__sections {
    display: flex;
    overflow: hidden;
    //cut the overflow
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
  &__card--rigth {
    //move card to the left
    position: absolute;
    right: 0;
    top: 0;
    //use the keyframes
  }
  &__card--left,
  &__card--rigth {
    gap: 16px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}
.selector {
  align-items: center;
  color: $background-light;
  border-radius: 8px;
  background-color: $background-black-1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 8px 8px;
  gap: 8px;
}
</style>
