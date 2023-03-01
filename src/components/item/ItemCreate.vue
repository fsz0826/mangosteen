<template>
  <MainLayout>
    <template #icon>
      <SvgIcon name="back" class="nav_icon"/>
    </template>
    <template #title>
      记一笔
    </template>
    <template #default>
      <div>main</div>
    </template>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "../layouts/MainLayout.vue";
</script>

<style scoped lang="scss">

</style>