<template>
  <div class="dateAndAmount">
    <span class="date">
      <SvgIcon name="date" class="dateIcon" />
      <span> </span>
    </span>
    <span class="amount">数字</span>
  </div>
  <div class="buttons">
    <button v-for="(button, index) in buttons" :key="index" @click="button.onClick">
      {{ button.text }}
    </button>
  </div>
</template>
<script lang="ts" setup>
const amountText = () => {};
const buttons = [
  { text: "1", onClick: () => {} },
  { text: "2", onClick: () => {} },
  { text: "3", onClick: () => {} },
  { text: "4", onClick: () => {} },
  { text: "5", onClick: () => {} },
  { text: "6", onClick: () => {} },
  { text: "7", onClick: () => {} },
  { text: "8", onClick: () => {} },
  { text: "9", onClick: () => {} },
  { text: "0", onClick: () => {} },
  { text: ".", onClick: () => {} },
  { text: "删除", onClick: () => {} },
  { text: "确定", onClick: () => {} },
];
</script>
<style scoped lang="scss">
.date {
  .dateIcon {
    color: red;
  }
}
</style>
