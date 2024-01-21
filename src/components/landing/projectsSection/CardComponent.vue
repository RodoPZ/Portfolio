<script setup lang="ts">
import IconButtonComponent from "@/components/IconButtonComponent.vue";
import TagsComponent from "./TagsComponent.vue";

defineProps(["title", "text", "tags", "links", "titleColor", "emoji"]);
</script>

<template>
  <div class="card">
    <div class="card__background">
      <div class="card__foreground">
        <div class="d-flex align-items-center justify-content-between w-100">
          <h3 :style="{ color: titleColor }">
            {{ title }}
          </h3>
          <h3>
            {{ emoji }}
          </h3>
        </div>
        <div
          class="card__divider"
          :style="{ backgroundColor: titleColor }"
        ></div>
        <p class="card__text">
          {{ text }}
        </p>
        <div class="card__tagsContainer mb-1">
          <TagsComponent
            v-for="(item, index) in tags"
            :key="index"
            :text="item"
          />
        </div>
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
  </div>
</template>

<style scoped lang="scss">
@import "@bootstrap/scss/functions";
@import "@bootstrap/scss/variables";
@import "@bootstrap/scss/mixins";
.card {
  //make background image darker
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  //make a line in the border
  display: flex;
  align-items: flex-start;
  border-radius: 8px;
  height: 500px;
  &__background {
    border: 2px solid $background-black-1;
    padding: 8px;
    height: inherit;
    border-radius: 8px;
    backdrop-filter: blur(4px);
  }
  &__foreground {
    background-color: $background-light-1;
    border-radius: 8px;
    padding: 8px;
    height: calc(500px - 16px);
    gap: 4px;
    display: flex;
    flex-direction: column;
    // difuse border
  }
  &__text {
    white-space: pre-line;
    margin: 0;
    height: 100%;
    overflow: scroll;
    white-space: pre-line;
    // remove scrollbar
    scrollbar-width: none;
    text-align: justify;
    // Firefox
    &::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* make scrollbar transparent */
    }
  }
  &__divider {
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

@include media-breakpoint-up(md) {
  .card {
    width: calc(50% - 12px);
  }
}

@include media-breakpoint-up(lg) {
  .card {
    width: calc(33.33% - 12px);
  }
}

[data-bs-theme="dark"] {
  .card {
    &__background {
      border: 2px solid $background-light-1;
    }
    &__foreground {
      background-color: $background-black-1;
    }
  }
}
</style>
