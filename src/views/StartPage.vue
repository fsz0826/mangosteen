<template>
  <nav>
    <Navbar>
      <template #icon>
        <SvgIcon name="menu" class="nav_icon" />
      </template>
      <template #title> 山竹记账 </template>
    </Navbar>
  </nav>
  <Center class="center_icon_wrapper">
    <SvgIcon name="pig" class="center_icon" />
  </Center>
  <div class="button_wrapper">
    <Button @click="onClick" class="button">开始记账</Button>
  </div>
  <FloatButton icon-name="add" />
</template>
<script lang="ts" setup>
import Button from "../components/shared/Button.vue";
import FloatButton from "../components/shared/FloatButton.vue";
import Center from "../components/shared/Center.vue";
import Navbar from "../components/shared/Navbar.vue";
const onClick = () => {
  console.log("click");
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
