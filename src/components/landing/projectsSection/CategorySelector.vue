<script setup lang="ts">
import { useCategoryStore } from "@/stores/buttons";
import { Category } from "@/stores/buttons";
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
  categories.setCategory(Category.WEB);
  carousel?.to(0);
}
function changeModeToVideoGames() {
  categories.setCategory(Category.VIDEOGAMES);
  carousel?.to(1);
}
</script>

<template>
  <div :class="'categorySelector'">
    <button
      data-bs-target="#projectsCarousel"
      :class="`categorySelector__buttonWeb ${
        categories.category === Category.WEB
          ? ' categorySelector__buttonWeb--selected'
          : 'categorySelector__buttonWeb'
      }`"
      @click="changeModeToWeb"
      type="button"
    >
      <p>{{ `🖥️ ${t("landing.projects.web_apps")}` }}</p>
    </button>
    <button
      data-bs-target="#projectsCarousel"
      :class="`categorySelector__buttonVideoGames ${
        categories.category === Category.VIDEOGAMES
          ? ' categorySelector__buttonVideoGames--selected'
          : 'categorySelector__buttonWeb'
      }`"
      @click="changeModeToVideoGames"
      type="button"
    >
      <p>{{ `🎮 ${t("landing.projects.videogames")}` }}</p>
    </button>
  </div>
</template>

<style scoped lang="scss">
p {
  font-size: 0.9rem;
}
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
