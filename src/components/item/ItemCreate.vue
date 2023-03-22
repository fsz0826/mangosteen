<template>
  <MainLayout>
    <template #icon>
      <SvgIcon name="back" class="nav_icon" />
    </template>
    <template #title> 记一笔 </template>
    <template #default>
      <Tabs v-model:selected="refKind">
        <Tab name="支出"> 列表1 </Tab>
        <Tab name="收入"> 列表2 </Tab>
      </Tabs>
      <div class="inputPad_wrapper">
        <InputPad />
      </div>
    </template>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "../layouts/MainLayout.vue";
import Tabs from "../shared/Tabs/Tabs.vue";
import Tab from "../shared/Tabs/Tab.vue";
import InputPad from "./InputPad.vue";

import { ref } from "vue";
const refKind = ref("支出");
</script>

<style scoped lang="scss">
.inputPad_wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
