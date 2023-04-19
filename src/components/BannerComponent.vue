<script setup lang="ts">
defineProps(["text"]);
</script>

<template>
  <div class="crt">
    <p class="crt__item crt__Arrow">></p>
    <p class="crt__item crt__Text">{{ text }}</p>
    <p class="crt__item crt__Line">_</p>
  </div>
</template>

<style scoped lang="scss">
.crt {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.crt__Arrow {
  color: #00fd55;
  animation: textShadow 1.6s infinite;
  text-shadow: 0 0 6px #00fd55;
}

.crt__Line {
  animation: blink 1s infinite, textShadow 1.6s infinite;
  color: #edf2f4;
  text-shadow: 0 0 6px white;
}

.crt__Text {
  color: #edf2f4;
  text-shadow: 0 0 6px white;
}

.crt__item {
  display: inline-block;
  font: 3rem "Inconsolata", monospace;
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
      rgba(#293241, 0.5),
      rgba(#293241, 0.5) 1px,
      transparent 1px,
      transparent 2px
    );
    animation: flicker 0.5s infinite;
    pointer-events: none;
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
</style>
