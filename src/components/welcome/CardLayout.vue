<script setup lang="ts"></script>
<template>
  <div class="card">
    <slot name="card"></slot>
  </div>
</template>
<style scoped lang="scss">
.card {
  flex-grow: 1;
  flex-direction: column;
  background: var(--welcome-card-bg);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  > :deep(h2) {
    margin-top: 40px;
  }
  // > :deep(.icon) {
  //   width: 100px;
  //   height: 100px;
  // }
}
</style>
