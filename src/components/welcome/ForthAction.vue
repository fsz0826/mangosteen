<script setup lang="ts">
import ActionLayout from "./ActionLayout.vue";
</script>
<template>
  <ActionLayout>
    <template #actions>
      <router-link class="fake" to="">跳过</router-link>
      <router-link to="/start">开启使用</router-link>
      <router-link class="fake" to="">跳过</router-link>
    </template>
  </ActionLayout>
</template>
<style scoped lang="scss"></style>
