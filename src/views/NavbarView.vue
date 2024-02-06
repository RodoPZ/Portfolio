<script setup lang="ts">
import NavLinksComponent from "@landing/navbar/NavLinksComponent.vue";
import MobileMenuView from "@landing/navbar/MobileMenuView.vue";
import BannerComponent from "@/components/BannerComponent.vue";
import { ref } from "vue";
import ButtonComponent from "@/components/landing/buttons/ButtonComponent.vue";
import { useI18n } from "vue-i18n";

const alertState = ref(true);
const { t } = useI18n();

const handleClick = () => {
  alertState.value = false;
};
</script>

<template>
  <div
    class="navbar d-flex flex-row justify-content-between align-items-center bg-body text-body"
  >
    <a href="/Portfolio"><BannerComponent :text="'<RodoPZ/>'" /></a>
    <div class="desktopMenu">
      <NavLinksComponent />
    </div>
    <MobileMenuView class="mobileMenu" />
  </div>
  <div v-if="alertState" class="alert alert-warning w-100" role="alert">
    <h6 class="alert__text m-0">⚠️{{ t("messages.in_progress") }}🚧</h6>
    <div>
      <ButtonComponent
        :iconName="'close'"
        @click="handleClick"
        :style="'text-body border-0'"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@bootstrap/scss/functions";
@import "@bootstrap/scss/variables";
@import "@bootstrap/scss/mixins";

.mobileMenu {
  display: none;
}
.alert {
  display: flex;
  z-index: 2;
  position: fixed;
  align-items: center;
  padding: 4px;
  top: 64px;
  &__text {
    text-align: center;
    width: 100%;
  }
}
.desktopMenu {
  display: flex;
  align-items: center;
  gap: 18px;
}

.navbar {
  z-index: 3;
  padding: 0px 20px;
  height: 64px;
  color: $background-light;
  width: 100%;
}

@include media-breakpoint-down(lg) {
  .mobileMenu {
    display: flex;
  }
  .desktopMenu {
    display: none;
  }
}

@include media-breakpoint-up(md) {
  .navbar {
    max-width: 1400px;
  }
}
</style>
