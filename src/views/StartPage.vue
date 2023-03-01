<template>
  <MainLayout>
    <template #icon>
      <SvgIcon name="menu" class="nav_icon" @click="onClickMenu" />
    </template>
    <template #title> 山竹记账 </template>
    <Center class="center_icon_wrapper">
      <SvgIcon name="pig" class="center_icon" />
    </Center>
    <div class="button_wrapper">
      <router-link to="/items/create">
        <Button class="button">开始记账</Button>
      </router-link>
    </div>
    <router-link to="/items/create">
      <FloatButton icon-name="add" />
    </router-link>
    <Overlay v-if="refOverlayVisible" :on-close="onClickMenu" />
  </MainLayout>
</template>
<script lang="ts" setup>
import Button from "../components/shared/Button.vue";
import FloatButton from "../components/shared/FloatButton.vue";
import Center from "../components/shared/Center.vue";
import Navbar from "../components/shared/Navbar.vue";
import Overlay from "../components/shared/Overlay.vue";
import { ref } from "vue";
import MainLayout from "../components/layouts/MainLayout.vue";

const refOverlayVisible = ref(false);
const onClickMenu = () => {
  refOverlayVisible.value = !refOverlayVisible.value;
};
</script>
<style lang="scss" scoped>
.nav_icon {
  width: 30px;
  height: 30px;
  position: relative;
  top: 1.5px;
}
.center_icon {
  width: 128px;
  height: 128px;
  &_wrapper {
    padding: 120px 0;
  }
}
.button {
  width: 100%;
  &_wrapper {
    padding: 16px 16px;
  }
}
</style>
