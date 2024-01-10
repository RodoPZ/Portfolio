<script setup lang="ts">
import StarsComponent from "./StarsComponent.vue";

defineProps(["list", "title"]);
</script>

<template>
  <h4 class="languageSkill__title">{{ title }}</h4>
  <div v-for="(item, index) in list" :key="index" class="languageSkill">
    <img
      :src="'src/assets/logos/' + item.name + '.svg'"
      :alt="item.name + ' logo'"
    />
    <p class="languageSkill__text">{{ item.name }}</p>
    <div>
      <StarsComponent :stars="item.stars" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.languageSkill {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  background-color: #3e4754;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  &__title {
    text-align: center;
  }
  &__text {
    margin: auto;
  }
}
</style>
