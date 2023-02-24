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
.navbar{}
.icon_wrapper {
}
.title_wrapper {
}
</style>
