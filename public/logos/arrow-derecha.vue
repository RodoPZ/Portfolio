<script setup lang="ts">
defineProps(["color"]);
</script>

<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 12 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_152_3630)">
      <path
        d="M0.225494 18.33L1.96079 20.0653L11.7647 10.2613L1.96079 0.457428L0.225494 2.19272L8.29412 10.2613L0.225494 18.33Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_152_3630">
        <rect
          width="11.7647"
          height="20"
          fill="white"
          transform="translate(0 0.261353)"
        />
      </clipPath>
    </defs>
  </svg>
</template>
