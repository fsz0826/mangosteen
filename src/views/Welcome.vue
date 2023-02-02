<script setup lang="ts"></script>
<template>
  <div class="wrapper">
    <header>header</header>
    <main><router-view /></main>
    <footer>footer</footer>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  color: red;
  height: 100vh;
  display: flex;
  flex-direction: column;
  > header {
    background: pink;
    flex-shrink: 0;
  }
  > main {
    background: blue;
  }
  > footer {
    background: aqua;
    flex-shrink: 0;
  }
}
</style>
