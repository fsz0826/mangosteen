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
  padding-bottom: var(--welcome-nav-gap);
  > .card {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background: var(--welcome-card-bg);
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
    height: var(--welcome-nav-height);
    padding: 0 16px;
    padding-bottom: var(--welcome-nav-gap);
    color: var(--welcome-text);
    > .fake {
      visibility: hidden;
    }
  }
}
</style>
