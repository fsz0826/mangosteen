<script setup lang="ts">
import CardLayout from "./CardLayout.vue";
</script>
<template>
  <CardLayout>
    <template #card>
      <SvgIcon class="icon" name="pig" />
      <h2>会挣钱<br />还要会省钱</h2>
    </template>
  </CardLayout>
</template>
<style scoped lang="scss">
.icon{
  width: 100px;
  height: 100px;
}
</style>
