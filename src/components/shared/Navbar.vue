<template>
  <div class="navbar">
    <span class="icon_wrapper">
      <slot name="icon" />
    </span>
    <span class="title_wrapper">
      <slot name="title" />
    </span>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.navbar {
  background: linear-gradient(
    to bottom,
    var(--navbar-bg-start),
    var(--navbar-bg-end)
  );
  color: var(--navbar-text);
  fill: var(--navbar-text);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding:40px 16px 12px;
}
.icon_wrapper {
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  > * {
    width: 100%;
    height: 100%;
  }
}
.title_wrapper {
  font-size: 24px;
  margin-left: 12px;
}
</style>
