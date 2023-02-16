<script setup lang="ts">
import { reactive, type StyleValue } from "vue";
const props = defineProps(["stars"]);
const levels = ["Basic", "Intermediate", "Advanced"];
let styleObject: Array<StyleValue> = reactive([]);
for (let index = 1; index <= 3; index++) {
  if (index <= props.stars) {
    styleObject.push({
      ["font-variation-settings"]: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48',
    });
  } else {
    styleObject.push({
      ["font-variation-settings"]: '"FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48',
    });
  }
}
</script>

<template>
  <div class="stars">
    <p class="Ps-M stars__title">{{ levels[stars - 1] }}</p>
    <div class="stars__container">
      <span
        v-for="i in 3"
        :key="i"
        :style="styleObject[i - 1]"
        class="material-symbols-outlined"
      >
        star
      </span>
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
