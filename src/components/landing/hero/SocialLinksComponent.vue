<script setup lang="ts">
// import CodepenIcon from "@/assets/icons/CodepenIcon.vue";
import GithubIcon from "@/assets/icons/GithubIcon.vue";
import LinkedInIcon from "@/assets/icons/LinkedInIcon.vue";
import MailIcon from "@/assets/icons/MailIcon.vue";
defineProps(["size"]);

const handleClick = () => {
  window.location.href = `mailto:mail@example.org`;
};
</script>

<template>
  <div class="medialinks">
    <a href="https://www.linkedin.com/in/rodopz/">
      <LinkedInIcon class="medialinks__link" :size="size" />
    </a>
    <button class="bg-transparent border-0">
      <MailIcon class="medialinks__link" :size="size" @click="handleClick" />
    </button>
    <a href="https://github.com/RodoPZ">
      <GithubIcon class="medialinks__link" :size="size"
    /></a>
  </div>
</template>

<style scoped lang="scss">
.medialinks {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  &__link {
    padding: 0px 8px;
    fill: $body-color;
    // on hover change color to primary
    :hover {
      fill: $primary;
    }
  }
}

[data-bs-theme="dark"] {
  .medialinks {
    &__link {
      fill: $body-color-dark;
      :hover {
        fill: $primary-dark;
      }
    }
  }
}
</style>
