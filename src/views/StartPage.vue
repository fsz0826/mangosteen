<template>
  <div class="button_wrapper">
    <Button @click="onClick" class="button">测试</Button>
  </div>
</template>
<script lang="ts" setup>
import Button from "../components/shared/Button.vue";
const onClick = () => {
  console.log("click");
};
</script>
<style lang="scss" scoped>
.button {
  width: 100%;
  &_wrapper {
    padding: 16px 16px;
  }
}
</style>
