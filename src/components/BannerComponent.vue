<script setup lang="ts">
defineProps(["text"]);
</script>

<template>
  <div class="crt">
    <p class="crt__item crt__arrow">></p>
    <p class="crt__item crt__text">{{ text }}</p>
    <p class="crt__item crt__line">_</p>
  </div>
</template>

<style scoped lang="scss">
@import "@bootstrap/scss/functions";
@import "@bootstrap/scss/variables";
@import "@bootstrap/scss/mixins";
.crt {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &__line {
    animation: blink 1s infinite, textShadow 1.6s infinite;
    color: $body-bg-dark;
    text-shadow: 0 0 6px white;
  }
  &__arrow {
    color: #00fd55;
    animation: textShadow 1.6s infinite;
    text-shadow: 0 0 6px #00fd55;
  }
  &__item {
    display: inline-block;
    font: 1.5rem "Inconsolata", monospace;
    margin: 0;
    width: auto;

    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: repeating-linear-gradient(
        0deg,
        rgba($body-bg, 0.5),
        rgba($body-bg, 0.5) 1px,
        transparent 1px,
        transparent 2px
      );
      animation: flicker 0.5s infinite;
      pointer-events: none;
    }
  }
  &__text {
    color: $body-bg-dark;
    text-shadow: 0 0 6px rgb(0, 0, 0);
  }
}

[data-bs-theme="dark"] {
  .crt {
    &__text {
      color: $body-bg;
    }
    &__line {
      color: $body-bg;
    }
    &__item {
      &::after {
        background: repeating-linear-gradient(
          0deg,
          rgba($body-color, 0.5),
          rgba($body-color, 0.5) 1px,
          transparent 1px,
          transparent 2px
        );
      }
    }
  }
}

::selection {
  background: #0080ff;
  text-shadow: none;
}

@keyframes flicker {
  0% {
    opacity: 0.27861;
  }
  5% {
    opacity: 0.34769;
  }
  10% {
    opacity: 0.23604;
  }
  15% {
    opacity: 0.90626;
  }
  20% {
    opacity: 0.18128;
  }
  25% {
    opacity: 0.83891;
  }
  30% {
    opacity: 0.65583;
  }
  35% {
    opacity: 0.67807;
  }
  40% {
    opacity: 0.26559;
  }
  45% {
    opacity: 0.84693;
  }
  50% {
    opacity: 0.96019;
  }
  55% {
    opacity: 0.08594;
  }
  60% {
    opacity: 0.20313;
  }
  65% {
    opacity: 0.71988;
  }
  70% {
    opacity: 0.53455;
  }
  75% {
    opacity: 0.37288;
  }
  80% {
    opacity: 0.71428;
  }
  85% {
    opacity: 0.70419;
  }
  90% {
    opacity: 0.7003;
  }
  95% {
    opacity: 0.36108;
  }
  100% {
    opacity: 0.24387;
  }
}

@keyframes blink {
  0%,
  49% {
    opacity: 1;
  }
  50%,
  99% {
    opacity: 0;
  }
}

@include media-breakpoint-up(md) {
  .crt__item {
    font: 2rem "Inconsolata", monospace;
  }
}
</style>
