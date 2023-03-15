<template>
  <slot />
</template>

<script lang="ts" setup>
import { PropType } from "vue";

defineProps({
  name: {
    type: String as PropType<string>,
  },
});
</script>

<style scoped lang="scss"></style>
