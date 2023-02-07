<script setup lang="ts">
const props = defineProps(["source", "text"]);
</script>

<template>
  <div class="skillDisplay">
    <img :src="props.source" alt="css logo" />
    <p class="Ps-M skillDisplay__text">{{ props.text }}</p>
  </div>
</template>

<style scoped lang="scss">
.skillDisplay {
  flex-direction: column;
  background-color: $background-black-1;
  align-items: center;
  display: flex;
  width: 85px;
  height: 80px;
  justify-content: center;
  gap: 5px;
}
</style>
