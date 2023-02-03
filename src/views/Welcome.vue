<script setup lang="ts"></script>
<template>
  <div class="wrapper">
    <header>
      <img class="logo" src="" alt="" />
      <h1>飞老板飞老板</h1>
    </header>
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
    padding-top: 58px;
    color: #d4d4ee;

    > .logo {
      width: 100px;
      height: 100px;
    }
    > h1 {
      margin-top: 6px;
    }
  }
  > main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
