<script setup lang="ts"></script>
<template>
  <div class="wrapper">
    <header>header</header>
    <main><router-view /></main>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to bottom, #5d33be 0%, #8f4cd7 100%);
  > header {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 64px;
    color: #d4d4ee;
  }
  > main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
