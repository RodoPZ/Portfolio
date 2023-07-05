<script setup lang="ts">
import CardComponent from "@cl/projectsSection/CardComponent.vue";
import TagsComponent from "@cl/projectsSection/TagsComponent.vue";
import { tagNames } from "@/models/tags.model";
import BannerComponent from "@/components/BannerComponent.vue";
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
    <BannerComponent :text="t('landing.projects.title')" />
    <!-- <div class="selector">
      <TagsComponent
        v-for="(item, index) in tagNames"
        :key="index"
        :text="item"
      />
    </div> -->
    <CategorySelector />
    <div class="projects__sections" :style="{ height: containerHeight }">
      <div
        v-for="(category, index) in ALL_CATEGORIES"
        :key="index"
        :class="
          index === 0
            ? `projects__card--left ${WebAnimation}`
            : `projects__card--rigth ${VideoGamesAnimation}`
        "
      >
        <CardComponent
          v-for="(item, index) in category"
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
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    //use the keyframes
  }
  &__card--left {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
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

//modify the animation to use the keyframes
.animate__slideInLeft,
.animate__slideInRight,
.animate__slideOutLeft,
.animate__slideOutRight {
  animation-timing-function: linear;
  animation-duration: 0.3s;
}

.animate__slideInRight,
.animate__slideInLeft {
  animation-delay: 0.03s;
}
</style>
