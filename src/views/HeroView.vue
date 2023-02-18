<script setup lang="ts">
import buttonComponent from "@/components/ButtonComponent.vue";
import SocialLinksComponent from "@/components/SocialLinksComponent.vue";
</script>

<template>
  <div class="hero">
    <h1 class="H1-M hero__title">Rodolfo Pinedo</h1>
    <h2 class="H2-M hero__subtitle">Frontend Developer</h2>
    <p class="Ps-M hero__text">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius harum
      doloribus explicabo ratione incidunt expedita veniam, modi voluptates
      fugit nemo nihil et sunt, sit pariatur dolores qui eveniet blanditiis
      voluptas.
    </p>
    <SocialLinksComponent :size="'24px'" />
    <buttonComponent />
  </div>
</template>

<style scoped lang="scss">
.hero {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  height: 100vh;
  &__tag {
    color: $html-closing-tag;
    margin: 0;
    /* font-size: 1rem; */
  }
  &__title {
    text-align: center;
    color: $primary-dark;
    font-size: 56px;
    margin: 0;
  }
  &__subtitle {
    text-align: center;
    color: $secondary-dark;
    font-size: 28px;
    margin: 0;
  }
  &__text {
    text-align: center;
    margin: 0;
  }
}
</style>
