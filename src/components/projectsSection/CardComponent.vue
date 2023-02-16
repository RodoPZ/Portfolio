<script setup lang="ts">
import { IconButtons } from "@/models/IconButton.model";
import IconButtonComponent from "../IconButtonComponent.vue";
import TagsComponent from "./TagsComponent.vue";

defineProps(["title", "text", "tags", "links"]);
</script>

<template>
  <div class="card">
    <h3 class="H3-M card__title">{{ title }}</h3>
    <p class="Ps-M card__text">
      {{ text }}
    </p>
    <div class="card__tagsContainer">
      <TagsComponent v-for="(item, index) in tags" :key="index" :text="item" />
    </div>
    <div class="card__divider"></div>
    <div class="card__linksContainer">
      <IconButtonComponent
        v-for="(value, index) in links"
        :key="index"
        :text="value.name"
        :link="value.link"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: $background-black-1;
  padding: 16px;
  gap: 4px;
  border-radius: 8px;
  &__title {
    margin-bottom: 12px;
  }
  &__text {
    text-align: justify;
    margin-bottom: 4px;
    height: 150px;
    overflow: scroll;
    white-space: pre-line;
  }
  &__divider {
    margin: 4px 0px;
    height: 2px;
    width: 100%;
    background-color: $background-light-1;
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
    gap: 8px;
    width: 100%;
    align-items: stretch;
  }
}
</style>
