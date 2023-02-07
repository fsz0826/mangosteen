<script setup lang="ts">
import WelcomeLayout from "./WelcomeLayout.vue";
</script>
<template>
  <WelcomeLayout>
    <template #card>
      <img class="icon" src="" alt="" />
      <h2>会挣钱<br />还要会省钱</h2>
    </template>
    <template #actions>
      <router-link class="fake" to="/start">跳过</router-link>
      <router-link to="/welcome/2">下一页</router-link>
      <router-link to="/start">跳过</router-link>
    </template>
  </WelcomeLayout>
</template>
<style scoped lang="scss"></style>
