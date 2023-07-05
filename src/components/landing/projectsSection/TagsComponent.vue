<script setup lang="ts">
import type { tagNames } from "@/models/tags.model";
import { tags } from "@/models/tags.model";
defineProps<{
  text: tagNames;
}>();
</script>

<template>
  <div class="tag" :style="{ background: tags[text].backgroundColor }">
    <p class="Ps-M tag__text" :style="{ color: tags[text].color }">
      {{ tags[text].text }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.tag {
  width: fit-content;
  border-radius: 8px;
  padding: 4px;
  //center
  margin: 4px auto;
  width: 100px;
  box-shadow: -2px 2px 0px rgba(0, 0, 0, 0.25);
  &__text {
    width: fit-content;
    margin: 4px auto;
  }
}
</style>
