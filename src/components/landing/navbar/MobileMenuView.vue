<script setup lang="ts">
import NavLinksComponent from "@landing/navbar/NavLinksComponent.vue";
import { ref, watchEffect } from "vue";
import "animate.css";
import { useMobileMenuStore } from "@/stores/buttons";

const mobileMenu = useMobileMenuStore();
const animation = ref("animate__animated animate__fadeOutRight");

const onClick = () => {
  mobileMenu.setChangeMobileMenu();
};

watchEffect(() => {
  animation.value = mobileMenu.mobileMenu
    ? "animate__animated animate__fadeInRight"
    : "animate__animated animate__fadeOutRight";
});
</script>

<template>
  <div class="mobileMenu">
    <span @click="onClick" class="material-symbols-outlined"> menu </span>
    <div
      v-if="mobileMenu.mobileMenu"
      @click="onClick"
      class="mobileMenu__filter"
    ></div>
    <aside :class="`mobileMenu__menu ${animation}`">
      <span
        @click="onClick"
        class="material-symbols-outlined mobileMenu__close"
      >
        close
      </span>
      <NavLinksComponent v-if="mobileMenu.mobileMenu" />
    </aside>
  </div>
</template>

<style scoped lang="scss">
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
  // on hover change color to primary and point
  &:hover {
    color: $primary;
    cursor: pointer;
  }
}
.mobileMenu {
  &__menu {
    opacity: 0;
    display: flex;
    position: absolute;
    background-color: $background-black-1;
    height: 100vh;
    width: 65vw;
    top: 0px;
    right: 0px;
    gap: 32px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__filter {
    position: absolute;
    z-index: -1;
    left: 0;
    width: 100vw;
    height: 200vh;
    backdrop-filter: blur(5px);
  }
  &__close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;
    font-size: 32px;
  }
}
.animate__animated.animate__fadeInRight,
.animate__animated.animate__fadeOutRight {
  --animate-duration: 0.3s;
}
</style>
