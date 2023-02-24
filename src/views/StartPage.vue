<template>
  <nav>
    <Navbar>
      <template #icon>
        <SvgIcon name=""/>
      </template>
      <template #title>
        123
      </template>
    </Navbar>
  </nav>
  <Center class="icon_wrapper">
    <SvgIcon name="pig" class="icon"/>
  </Center>
  <div class="button_wrapper">
    <Button @click="onClick" class="button">测试</Button>
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
.icon{
  width: 128px;
  height: 128px;
  &_wrapper{
    padding: 160px 0;
  }
}
.button {
  width: 100%;
  &_wrapper {
    padding: 16px 16px;
  }
}
</style>
