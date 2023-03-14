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

//导出插槽的内容

// onMounted(() => {
//   const slots = useSlots();
//   console.log(slots);
// });
</script>

<style scoped lang="scss"></style>
