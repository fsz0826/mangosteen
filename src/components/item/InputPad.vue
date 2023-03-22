<template>
  <div class="dateAndAmount">
    <span class="date">
      <SvgIcon name="date" class="dateIcon" />
      <span>
        <span @click="showDatePicker"> {{ date }}</span>
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
    <span class="amount">11223.056</span>
  </div>
  <div class="buttons">
    <button v-for="(button, index) in buttons" :key="index" @click="button.onClick">
      {{ button.text }}
    </button>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import { DatePicker, Popup } from "vant";
import dayjs from "dayjs";

const currentDate = ref([
  dayjs().format("YYYY"),
  dayjs().format("MM"),
  dayjs().format("DD"),
]);
const date = computed(() => {
  return currentDate.value.join("-");
});

const refDatePickerVisible = ref(false);
const showDatePicker = () => {
  refDatePickerVisible.value = true;
};
const hideDatePicker = () => {
  refDatePickerVisible.value = false;
};

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
.dateAndAmount {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  font-family: monospace;
  border-top: 1px solid var(--number-button-border-color);
  > .date {
    display: flex;
    align-items: center;
    justify-content: start;
    color: var(--date-text);
    .dateIcon {
      width: 24px;
      height: 24px;
      margin-right: 8px;
      fill: var(--amount-text);
    }
  }
  > .amount {
    font-size: 20px;
    color: var(--amount-text);
  }
}
</style>
