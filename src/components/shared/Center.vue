<template>
  <div class="center" :class="extraClass">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
const directionMap = {
  "-": "horizontal",
  horizontal: "horizontal",
  "|": "vertical",
  vertical: "vertical",
};
const props = defineProps({
  direction: {
    type: String as PropType<"-" | "|" | "horizontal" | "vertical">,
    default: "horizontal",
  },
});
const extraClass = directionMap[props.direction];
</script>
<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  &.horizontal{
    flex-direction: row;
  }
  &.vertical{
    flex-direction: column;
  }
}
</style>
