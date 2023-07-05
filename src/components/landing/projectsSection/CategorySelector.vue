<script setup lang="ts">
import { useCategoryStore } from "@/stores/buttons";
import { Category } from "@/stores/buttons";
const categories = useCategoryStore();

//use the function from the store to change the mode of the buttons,
//categorySelector__buttonWeb changes the mode to web and
//categorySelector__buttonVideoGames changes the mode to videogames
function changeModeToWeb() {
  categories.setCategory(Category.WEB);
}
function changeModeToVideoGames() {
  categories.setCategory(Category.VIDEOGAMES);
}
</script>

<template>
  <div :class="'categorySelector'">
    <button
      :class="`categorySelector__buttonWeb ${
        categories.category === Category.WEB
          ? ' categorySelector__buttonWeb--selected animate__animated animate__flash animate__fast'
          : ''
      }`"
      @click="changeModeToWeb"
      type="button"
    >
      🌐 Web apps 🖥️
    </button>
    <button
      :class="`categorySelector__buttonVideoGames ${
        categories.category === Category.VIDEOGAMES
          ? ' categorySelector__buttonVideoGames--selected animate__animated animate__flash animate__fast'
          : ''
      }`"
      @click="changeModeToVideoGames"
      type="button"
    >
      🎮 Videogames 🕹️
    </button>
  </div>
</template>

<style scoped lang="scss">
.categorySelector {
  display: flex;
  justify-content: center;
  flex-direction: row;
  &__buttonWeb {
    background-color: transparent;
    color: $background-light;
    width: 100%;
    box-sizing: border-box;
    padding: 12px 8px;
    border: 2px solid $background-light;
    border-right: 0px;
    &:focus {
      border: 2px solid $primary-dark;
      background-color: $background-black-1;
      color: $primary-dark;
    }
    &--selected {
      border: 2px solid $primary-dark;
      background-color: $background-black-1;
      color: $primary-dark;
    }
  }
  &__buttonVideoGames {
    background-color: transparent;
    color: $background-light;
    width: 100%;
    box-sizing: border-box;
    padding: 12px 8px;
    border: 2px solid $background-light;
    border-left: 0px;
    &:focus {
      border: 2px solid $primary-dark;
      background-color: $background-black-1;
      color: $primary-dark;
    }
    &--selected {
      border: 2px solid $primary-dark;
      background-color: $background-black-1;
      color: $primary-dark;
    }
  }
}
</style>
