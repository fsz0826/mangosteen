<template>
  <svg>
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>
<script setup lang="ts">
// import { defineProps } from "vue";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
<style scoped lang="scss">
// svg {
//   width: 100%;
//   height: 100%;
//   display: block;
// }
</style>
