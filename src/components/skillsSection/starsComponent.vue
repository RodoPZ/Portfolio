<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiStar } from "@mdi/js";
import { mdiStarOutline } from "@mdi/js";
const props = defineProps(["stars"]);
const levels = ["Basic", "Intermediate", "Advanced"];
let starsIndex: Array<string> = [];
for (let index = 1; index <= 3; index++) {
  if (index <= props.stars) {
    starsIndex.push(mdiStar);
  } else {
    starsIndex.push(mdiStarOutline);
  }
}
</script>

<template>
  <div class="stars">
    <p class="Ps-M stars__title">{{ levels[stars - 1] }}</p>
    <div class="stars__container">
      <svg-icon
        v-for="i in 3"
        :key="i"
        type="mdi"
        :path="starsIndex[i - 1]"
      ></svg-icon>
    </div>
  </div>
</template>

<style scoped lang="scss">
.stars {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  &__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 5px;
    color: $primary-dark;
  }
  &__title {
    width: 100%;
    text-align: right;
  }
}
</style>
