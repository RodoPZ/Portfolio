<script setup lang="ts">
import IconButtonComponent from "@/components/IconButtonComponent.vue";
import TagsComponent from "./TagsComponent.vue";

defineProps([
  "title",
  "text",
  "tags",
  "links",
  "titleColor",
  "backgroud_image",
  "emoji",
]);
</script>

<template>
  <div class="card" :style="{ backgroundImage: `url(${backgroud_image})` }">
    <div class="card__background">
      <div class="card__title">
        <h3 class="H3-M" :style="{ color: titleColor }">
          {{ title }}
        </h3>
        <h3 class="H3-M">
          {{ emoji }}
        </h3>
      </div>
      <div class="card__divider" :style="{ backgroundColor: titleColor }"></div>
      <p class="Ps-M card__text">
        {{ text }}
      </p>
      <div class="card__tagsContainer">
        <TagsComponent
          v-for="(item, index) in tags"
          :key="index"
          :text="item"
        />
      </div>
      <!-- <div class="card__divider"></div> -->
      <div class="card__linksContainer">
        <IconButtonComponent
          v-for="(value, index) in links"
          :key="index"
          :text="value.name"
          :link="value.link"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  //make background image darker
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  //make a line in the border
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  background-color: $background-black-1;

  &__background {
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: 2px solid $background-light-1;
    padding: 16px;
    border-radius: 8px;
    background-color: rgba(31, 38, 51, 0.95);
  }
  &__title {
    display: flex;
    //center everything in the middle
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  &__text {
    white-space: pre-line;
    // text-align: justify;
    margin: 0;
    height: 250px;
    overflow: scroll;
    white-space: pre-line;
  }
  &__divider {
    // margin: 4px 0px;
    height: 2px;
    width: 100%;
  }
  &__tagsContainer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 4px;
  }
  &__linksContainer {
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    gap: 4px;
    width: 100%;
    align-items: stretch;
  }
}
</style>
