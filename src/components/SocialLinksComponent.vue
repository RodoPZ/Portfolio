<script setup lang="ts">
import CodepenIcon from "@/assets/icons/CodepenIcon.vue";
import GithubIcon from "@/assets/icons/GithubIcon.vue";
import LinkedInIcon from "@/assets/icons/LinkedInIcon.vue";
import MailIcon from "@/assets/icons/MailIcon.vue";
defineProps(["size"]);
</script>

<template>
  <div class="Medialinks">
    <LinkedInIcon class="Medialinks__link" :color="'#EDF2F4'" :size="size" />
    <MailIcon class="Medialinks__link" :color="'#EDF2F4'" :size="size" />
    <GithubIcon class="Medialinks__link" :color="'#EDF2F4'" :size="size" />
    <CodepenIcon class="Medialinks__link" :color="'#EDF2F4'" :size="size" />
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
  }
}
</style>
