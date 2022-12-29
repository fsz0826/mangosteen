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
    &:hover {
      background: darkgoldenrod;
    }
  }
  > main {
    background: blue;
  }
  > footer {
    background: aqua;
  }
}
</style>
