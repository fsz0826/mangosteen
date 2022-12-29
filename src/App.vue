<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
const onClick = function () {
  count.value += 1;
};
</script>
<template>
  <router-link to="/">first</router-link>
  <router-link to="/about">about</router-link>
  <router-view></router-view>
  <div>{{ count }}</div>
  <div>
    <button @click="onClick">+1</button>
  </div>
</template>
<style></style>
