<script setup lang="ts">
import CardLayout from "./CardLayout.vue";
</script>
<template>
  <CardLayout>
    <template #card>
      <SvgIcon class="icon" name="cloud" />
      <h2>云备份<br />再也不怕数据丢失</h2>
    </template>
  </CardLayout>
</template>
<style scoped lang="scss">
.icon{
  width: 100px;
  height: 100px;
}
</style>
