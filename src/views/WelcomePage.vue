<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useSwipe } from "../hooks/useSwipe";
import { throttle } from "../shared/throttle";
const main = ref<HTMLElement>();
const { direction, isSwipe } = useSwipe(main, {
  onStartBefore: (e) => e.preventDefault(),
});
const route = useRoute();
const router = useRouter();
const pushMap: Record<string, string> = {
  Welcome1: "/Welcome/2",
  Welcome2: "/Welcome/3",
  Welcome3: "/Welcome/4",
  Welcome4: "/start",
};

const onReplace = throttle(() => {
  const name = (route.name || "Welcome1").toString();
  router.replace(pushMap[name]);
}, 500);
watchEffect(() => {
  if (isSwipe.value && direction.value === "left") {
    onReplace();
  }
});
</script>
<template>
  <div class="wrapper">
    <header>
      <SvgIcon class="icon" name="mangosteen" />
      <h1>飞老板飞老板</h1>
    </header>
    <main ref="main">
      <router-view name="main" v-slot="{ Component, route }">
        <transition name="slide-fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer>
      <router-view name="footer" />
    </footer>
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

    > .icon {
      width: 64px;
      height: 69px;
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
<style lang="scss">
.slide-fade-enter-active,
.slide-fade-leave-active {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all var(--transition-duration) ease-out;
}

.slide-fade-enter-from {
  transform: translateX(100vw);
}
.slide-fade-leave-to {
  transform: translateX(-100vw);
}
</style>
