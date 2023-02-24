<script setup lang="ts">
import CardLayout from "./CardLayout.vue";
</script>
<template>
  <CardLayout>
    <template #card>
      <SvgIcon class="icon" name="clock" />
      <h2>每日提醒<br />不遗漏每一笔订单</h2>
    </template>
  </CardLayout>
</template>
<style scoped lang="scss">
.icon{
  width: 100px;
  height: 100px;
}
</style>
