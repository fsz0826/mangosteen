<script setup lang="ts">
import WelcomeLayout from "./WelcomeLayout.vue";
</script>
<template>
  <WelcomeLayout>
    <template #card>
      <img class="icon" src="" alt="" />
      <h2>云备份<br />再也不怕数据丢失</h2>
    </template>
    <template #actions>
      <router-link class="fake" to="">跳过</router-link>
      <router-link to="/start">开启使用</router-link>
      <router-link class="fake" to="">跳过</router-link>
    </template>
  </WelcomeLayout>
</template>
<style scoped lang="scss"></style>
