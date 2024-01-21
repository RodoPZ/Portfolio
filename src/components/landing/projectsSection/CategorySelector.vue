<script setup lang="ts">
import { useCategoryStore } from "@/stores/buttons";
import { CATEGORIES } from "@/models/categories.model";
import { Carousel } from "bootstrap";
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const categories = useCategoryStore();
const myCarouselElement = ref<HTMLElement | null>(null);
let carousel: Carousel | null = null;

onMounted(() => {
  myCarouselElement.value = document.querySelector(
    "#projectsCarousel"
  ) as HTMLElement;

  if (myCarouselElement.value) {
    carousel = new Carousel(myCarouselElement.value);
  }
});
//use the function from the store to change the mode of the buttons,
//categorySelector__buttonWeb changes the mode to web and
//categorySelector__buttonVideoGames changes the mode to videogames

function changeModeToWeb() {
  categories.setCategory(CATEGORIES.WEB);
  carousel?.to(0);
}
function changeModeToVideoGames() {
  categories.setCategory(CATEGORIES.VIDEOGAMES);
  carousel?.to(1);
}
</script>

<template>
  <div :class="'categorySelector'">
    <button
      data-bs-target="#projectsCarousel"
      :class="`categorySelector__buttonWeb ${
        categories.category === CATEGORIES.WEB
          ? ' categorySelector__buttonWeb--selected'
          : 'categorySelector__buttonWeb'
      }`"
      @click="changeModeToWeb"
      type="button"
    >
      <h4>{{ `🖥️ ${t("landing.projects.web_apps")}` }}</h4>
    </button>
    <button
      data-bs-target="#projectsCarousel"
      :class="`categorySelector__buttonVideoGames ${
        categories.category === CATEGORIES.VIDEOGAMES
          ? ' categorySelector__buttonVideoGames--selected'
          : 'categorySelector__buttonWeb'
      }`"
      @click="changeModeToVideoGames"
      type="button"
    >
      <h4>{{ `🎮 ${t("landing.projects.videogames")}` }}</h4>
    </button>
  </div>
</template>

<style scoped lang="scss">
.categorySelector {
  display: flex;
  justify-content: center;
  flex-direction: row;
  // round corners
  &__buttonWeb,
  &__buttonVideoGames {
    background-color: transparent;
    color: $body-color;
    width: 100%;
    box-sizing: border-box;
    padding: 12px 8px;
    border: 2px solid $body-color;
    &--selected {
      border: 2px solid $primary;
      color: $primary;
    }
  }
  &__buttonWeb {
    border-radius: 8px 0 0 8px;
  }
  &__buttonVideoGames {
    border-radius: 0 8px 8px 0;
  }
}
</style>
