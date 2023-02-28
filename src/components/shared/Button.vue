<script lang="ts" setup>
// import { defineComponent } from "vue";
// interface Props {
//   onClick?: (e: MouseEvent) => void;
// }
// export default defineComponent<Props>({});
interface Props {
  onClick?: (e: MouseEvent) => void;
}
defineProps<Props>();
</script>

<template>
  <button class="button"><slot /></button>
</template>

<style lang="scss" scoped>
.button {
  height: var(--button-height);
  border: 1px solid var(--button-bg);
  padding: 8px 16px;
  background: var(--button-bg);
  color: var(--button-text);
  font-size: var(--button-font-size);
  border-radius: var(--button-radius);
}
</style>
