<script setup lang="ts">
import StarsComponent from "./StarsComponent.vue";

defineProps(["list", "title"]);
</script>

<template>
  <h2 class="languageSkill__title H2-M">{{ title }}</h2>
  <div v-for="(item, index) in list" :key="index" class="languageSkill">
    <img
      :src="'src/assets/logos/' + item.name + '.svg'"
      :alt="item.name + ' logo'"
    />
    <p class="Pr-M">{{ item.name }}</p>
    <div>
      <StarsComponent :stars="item.stars" />
    </div>
  </div>
</template>

<style lang="scss">
.languageSkill {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  background-color: #3e4754;
  &__title {
    text-align: center;
  }
}
</style>
