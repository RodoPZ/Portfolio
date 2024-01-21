<script setup lang="ts">
import type { TAG_NAMES } from "@/models/tags.model";
import { tags } from "@/models/tags.model";
defineProps<{
  text: TAG_NAMES;
}>();
</script>

<template>
  <div class="tag" :style="{ background: tags[text].backgroundColor }">
    <h4 class="tag__text" :style="{ color: tags[text].color }">
      {{ tags[text].text }}
    </h4>
  </div>
</template>

<style scoped lang="scss">
.tag {
  // fill the space that is left on the container
  flex-grow: 1;
  // round corners
  border-radius: 8px;
  margin: 0px 2px 2px;
  padding: 0px 2px;
  box-shadow: -2px 2px 0px rgba(0, 0, 0, 0.25);
  &__text {
    width: fit-content;
    margin: 4px auto;
  }
}
</style>
