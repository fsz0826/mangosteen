<script setup lang="ts"></script>
<template>
  <div class="wrapper">
    <header>
      <img class="logo" src="" alt="" />
      <h1>飞老板飞老板</h1>
    </header>
    <main>
      <router-view name="main" v-slot="{ Component, route }">
        <transition name="slide-fade"
          ><component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer><router-view name="footer" /></footer>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  height: calc(100vh - var(--welcome-nav-height));
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    to bottom,
    var(--welcome-bg-start) 0%,
    var(--welcome-bg-end) 100%
  );
  margin-bottom: var(--welcome-nav-height);
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
    position: relative;
    margin: 16px 16px var(--welcome-nav-gap);
  }
  > footer {
    flex-shrink: 0;
  }
}
</style>
<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-out;
}

.slide-fade-enter-from {
  transform: translateX(100vw);
}
.slide-fade-leave-to {
  transform: translateX(-100vw);
}
</style>
