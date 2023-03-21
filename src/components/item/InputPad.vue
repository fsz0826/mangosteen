<template>
  <div class="dateAndAmount">
    <span class="date">
      <SvgIcon name="date" class="dateIcon" />
      <span>
        <span @click="showDatePicker"> {{ currentDate }}</span>
        <Popup v-model:show="refDatePickerVisible" position="bottom">
          <DatePicker
            v-model="currentDate"
            type="date"
            title="选择年月日"
            @cancel="hideDatePicker"
            @confirm="hideDatePicker"
          />
        </Popup>
      </span>
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
import { ref } from "vue";
import { DatePicker, Popup } from "vant";
import dayjs from "dayjs";

const currentDate = new Date();
const refCurrentDate = ref<Date>(currentDate);

const refDatePickerVisible = ref(false);
const showDatePicker = () => {
  refDatePickerVisible.value = true;
};
const hideDatePicker = () => {
  refDatePickerVisible.value = false;
};
// const setDate = (date: Date) => {
//   refCurrentDate.value = date;
//   hideDatePicker();
// };

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
