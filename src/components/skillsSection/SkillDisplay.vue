<script setup lang="ts">
const props = defineProps(["list", "title"]);
</script>

<template>
  <h2 class="skillList__title H2-M">{{ title }}</h2>
  <div class="skillList">
    <div v-for="(item, index) in list" :key="index" class="skillDisplay">
      <img
        class="skillDisplay__img"
        :src="'src/assets/logos/' + item + '.svg'"
        :alt="item + ' logo'"
      />
      <p class="Ps-M skillDisplay__text">{{ item }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.skillList {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;

  &__title {
    text-align: center;
  }
}
.skillDisplay {
  flex-direction: column;
  background-color: $background-black-1;
  align-items: center;
  display: flex;
  width: 85px;
  height: 80px;
  justify-content: center;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  &__img {
    width: 35px;
    height: 40px;
  }
  &__text {
    margin: 0;
  }
}
</style>
