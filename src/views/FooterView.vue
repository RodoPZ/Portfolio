<script setup lang="ts">
import CodepenIcon from "@/assets/icons/CodepenIcon.vue";
import GithubIcon from "@/assets/icons/GithubIcon.vue";
import LinkedInIcon from "@/assets/icons/LinkedInIcon.vue";
import MailIcon from "@/assets/icons/MailIcon.vue";
</script>

<template>
  <div class="footer">
    <h2 class="H2-M">&lt;RodoPZ/></h2>
    <h3 class="H3-M footer__subtitle">Front Developer</h3>
    <div class="footer__divider"></div>
    <p class="Pr-M">Designed and built by RodoPZ</p>
    <div class="footer__links">
      <LinkedInIcon class="footer__link" :color="'#EDF2F4'" />
      <MailIcon class="footer__link" :color="'#EDF2F4'" />
      <GithubIcon class="footer__link" :color="'#EDF2F4'" />
      <CodepenIcon class="footer__link" :color="'#EDF2F4'" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  background-color: $background-black-1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px 0px;
  &__subtitle {
    color: $secondary-dark;
  }
  &__divider {
    background-color: $background-light-1;
    width: 100%;
    height: 2px;
  }
  &__links {
    display: flex;
    gap: 8px;
  }
  &__link {
    width: 20px;
    height: 20px;
  }
}
</style>
