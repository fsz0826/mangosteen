<template>
  <svg class="icon">
    <use :xlink:href="`#${props.name}`"></use>
  </svg>
</template>
<script setup lang="ts">
import { PropType } from "vue";
const props = defineProps({
  name: {
    type: String as PropType<string>,
    required: true,
  },
});
</script>
<style lang="scss">
// svg {
//   width: 100%;
//   height: 100%;
//   display: block;
// }
.icon {
  width: 1.2em;
  height: 1.2em;
}
</style>
