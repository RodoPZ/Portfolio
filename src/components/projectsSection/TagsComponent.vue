<script setup lang="ts">
import type { tagNames } from "@/models/tags.model";
import { tags } from "@/models/tags.model";
defineProps<{
  text: tagNames;
}>();
</script>

<template>
  <div class="tag" :style="{ background: tags[text].backgroundColor }">
    <p class="Ps-M" :style="{ color: tags[text].color }">
      {{ tags[text].text }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.tag {
  width: fit-content;
  border-radius: 8px;
  padding: 8px;
  box-shadow: -2px 2px 0px rgba(0, 0, 0, 0.25);
}
</style>
