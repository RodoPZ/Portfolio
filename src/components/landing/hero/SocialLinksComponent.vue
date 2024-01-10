<script setup lang="ts">
import CodepenIcon from "@/assets/icons/CodepenIcon.vue";
import GithubIcon from "@/assets/icons/GithubIcon.vue";
import LinkedInIcon from "@/assets/icons/LinkedInIcon.vue";
import MailIcon from "@/assets/icons/MailIcon.vue";
defineProps(["size"]);
</script>

<template>
  <div class="Medialinks">
    <a href=""> <LinkedInIcon class="Medialinks__link" :size="size" /> </a>
    <a href=""> <MailIcon class="Medialinks__link" :size="size" /> </a>
    <a href=""> <GithubIcon class="Medialinks__link" :size="size" /></a>
    <a href=""> <CodepenIcon class="Medialinks__link" :size="size" /></a>
  </div>
</template>

<style scoped lang="scss">
.Medialinks {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  &__link {
    padding: 0px 8px;
    fill: $body-color;
    // on hover change color to primary
    &:hover {
      fill: $primary;
    }
  }
}
</style>
