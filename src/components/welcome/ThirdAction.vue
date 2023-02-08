<script setup lang="ts">
import ActionLayout from "./ActionLayout.vue";
</script>
<template>
  <ActionLayout>
    <template #actions>
      <router-link class="fake" to="/start">跳过</router-link>
      <router-link to="/welcome/4">下一页</router-link>
      <router-link to="/start">跳过</router-link>
    </template>
  </ActionLayout>
</template>
<style scoped lang="scss"></style>
