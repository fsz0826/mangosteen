<template>
  <div class="wrapper">
    <SvgIcon class="icon" :name="props.iconName" />
  </div>
</template>
<script lang="ts" setup>
import { PropType } from "vue";

const props = defineProps({
  iconName: {
    type: String as PropType<String>,
    required: true,
  },
});
</script>
<style lang="scss" scoped>
.wrapper {
  background: var(--float-button-bg);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 16px;
  right: 16px;
  .icon {
    width: 24px;
    height: 24px;
    fill: var(--float-button-text);
  }
}
</style>
