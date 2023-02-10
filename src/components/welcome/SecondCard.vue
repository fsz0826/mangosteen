<script setup lang="ts">
import CardLayout from "./CardLayout.vue";
</script>
<template>
  <CardLayout>
    <template #card>
      <svg>
        <use xlink:href="#clock"></use>
      </svg>
      <h2>每日提醒<br />不遗漏每一笔订单</h2>
    </template>
  </CardLayout>
</template>
<style scoped lang="scss"></style>
