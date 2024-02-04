<script setup lang="ts">
defineProps(["color"]);
</script>

<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 14 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_152_3631)">
      <path
        d="M12.6373 2.29077L10.8922 0.555481L1.19608 10.2614L10.902 19.9672L12.6373 18.2319L4.66666 10.2614L12.6373 2.29077Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_152_3631">
        <rect
          width="12.3529"
          height="20"
          fill="white"
          transform="translate(0.764709 0.261353)"
        />
      </clipPath>
    </defs>
  </svg>
</template>
