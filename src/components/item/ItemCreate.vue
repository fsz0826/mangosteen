<template>
  <MainLayout>
    <template #icon>
      <SvgIcon name="back" class="nav_icon" />
    </template>
    <template #title> 记一笔 </template>
    <template #default>
      <Tabs v-model:selected="refKind">
        <Tab name="支出">
          <div>列表1</div>
        </Tab>
        <Tab name="收入">
          <div>列表2</div>
        </Tab>
      </Tabs>
    </template>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "../layouts/MainLayout.vue";
import Tabs from "../shared/Tabs/Tabs.vue";
import Tab from "../shared/Tabs/Tab.vue";
import { ref } from "vue";

const refKind = ref("支出");
</script>

<style scoped lang="scss"></style>
