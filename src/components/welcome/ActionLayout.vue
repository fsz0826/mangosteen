<script setup lang="ts"></script>
<template>
  <div class="actions">
    <slot name="actions"></slot>
  </div>
</template>
<style scoped lang="scss">
.actions {
  position: fixed;
  z-index: var(--z-index-bottom-nav);
  background: var(--welcome-bg-end);
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  color: var(--welcome-text);
  height: var(--welcome-nav-height);
  padding: 0 16px;
  padding-bottom: var(--welcome-nav-gap);

  > :deep(.fake) {
    visibility: hidden;
  }
}
</style>
