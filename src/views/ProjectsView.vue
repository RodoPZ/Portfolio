<script setup lang="ts">
import CardComponent from "@/components/projectsSection/CardComponent.vue";
import TagsComponent from "@/components/projectsSection/TagsComponent.vue";
import { tagNames } from "@/models/tags.model";
import { projectList } from "@/utils/projectsList";
</script>

<template>
  <div class="projects">
    <div class="selector">
      <TagsComponent
        v-for="(item, index) in tagNames"
        :key="index"
        :text="item"
      />
    </div>
    <CardComponent
      v-for="(item, index) in projectList"
      :key="index"
      :title="item.name.En"
      :text="item.text.En"
      :tags="item.tags"
      :links="item.links"
    />
  </div>
</template>

<style scoped lang="scss">
.projects {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.selector {
  align-items: center;
  color: $background-light;
  border-radius: 8px;
  background-color: $background-black-1;
  width: calc(100vw - 40px - 16px);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 8px 8px;
  gap: 8px;
}
</style>
