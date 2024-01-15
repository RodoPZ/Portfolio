<script setup lang="ts">
defineProps(["list", "title"]);
</script>

<template>
  <h3 class="skillList__title">{{ title }}</h3>
  <div class="skillList">
    <div v-for="(item, index) in list" :key="index" class="skillDisplay">
      <img
        class="skillDisplay__img"
        :src="'src/assets/logos/' + item + '.svg'"
        :alt="item + ' logo'"
      />
      <p class="skillDisplay__text">{{ item }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@bootstrap/scss/functions";
@import "@bootstrap/scss/variables";
@import "@bootstrap/scss/mixins";
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
    font-size: 0.8rem;
  }
}

@include media-breakpoint-up(sm) {
  .skillDisplay {
    width: 120px;
    height: 120px;
    &__img {
      width: 55px;
      height: 55px;
    }
    &__text {
      font-size: 1rem;
    }
  }
}

@include media-breakpoint-up(md) {
  .skillDisplay {
    width: 150px;
    height: 150px;
    &__img {
      width: 75px;
      height: 75px;
    }
  }
}
</style>
