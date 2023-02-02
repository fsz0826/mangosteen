<script setup></script>
<template>
  <div class="first_wrapper">
    <div class="card">
      <img class="pig" src="" alt="" />
      <h2>会挣钱<br />还要会省钱</h2>
    </div>
    <div class="actions">
      <router-link class="fake" to="/start">跳过</router-link>
      <router-link to="/welcome/2">下一页</router-link>
      <router-link to="/start">跳过</router-link>
    </div>
  </div>
</template>
<style scoped lang="scss">
.first_wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  > .card {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background: var(--welcome-card--bg);
    border-radius: 8px;
    padding: 16px;
    margin: 16px 16px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    > h2 {
      margin-top: 40px;
    }
    > .pig {
      width: 100px;
      height: 100px;
    }
  }
  > .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 16px;
    font-size: 32px;
    padding: 24px 0;
    color: var(--welcome-text);
    > .fake {
      visibility: hidden;
    }
  }
}
</style>
