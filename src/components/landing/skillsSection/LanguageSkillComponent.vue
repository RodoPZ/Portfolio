<script setup lang="ts">
import StarsComponent from "./StarsComponent.vue";

defineProps(["list", "title"]);
</script>

<template>
  <h3 class="languageSkill__title">{{ title }}</h3>
  <div class="languageSkill__container">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="languageSkill d-flex"
    >
      <img
        :src="'./src/assets/logos/' + item.name + '.svg'"
        :alt="item.name + ' logo'"
      />
      <p class="languageSkill__text">{{ item.name }}</p>
      <div class="d-flex">
        <StarsComponent :stars="item.stars" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@bootstrap/scss/functions";
@import "@bootstrap/scss/variables";
@import "@bootstrap/scss/mixins";
.languageSkill {
  grid-template-columns: 1fr 1fr 1fr;
  padding: 8px;
  border-radius: 8px;
  background-color: $background-light-1;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  min-width: 280px;
  &__container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
  }
  &__title {
    text-align: center;
  }
  &__text {
    margin: auto;
  }
}

@include media-breakpoint-up(md) {
  .languageSkill {
    max-width: calc((100% / 2) - 12px);
    min-width: 280px;
    height: 75px;
  }
}

[data-bs-theme="dark"] {
  .languageSkill {
    background-color: $background-black-1;
  }
}
</style>
