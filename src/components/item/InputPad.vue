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
    <span class="amount">{{ amount }}</span>
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

const amount = ref("0");

const amountText = (x: string) => {
  amount.value = x;
};
const buttons = [
  {
    text: "1",
    onClick: () => {
      amountText("1");
    },
  },
  {
    text: "2",
    onClick: () => {
      amountText("2");
    },
  },
  {
    text: "3",
    onClick: () => {
      amountText("3");
    },
  },
  {
    text: "4",
    onClick: () => {
      amountText("4");
    },
  },
  {
    text: "5",
    onClick: () => {
      amountText("5");
    },
  },
  {
    text: "6",
    onClick: () => {
      amountText("6");
    },
  },
  {
    text: "7",
    onClick: () => {
      amountText("7");
    },
  },
  {
    text: "8",
    onClick: () => {
      amountText("8");
    },
  },
  {
    text: "9",
    onClick: () => {
      amountText("9");
    },
  },
  {
    text: ".",
    onClick: () => {
      amountText(".");
    },
  },
  {
    text: "0",
    onClick: () => {
      amountText("0");
    },
  },
  { text: "清空", onClick: () => {} },
  { text: "提交", onClick: () => {} },
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
.buttons {
  display: grid;
  grid-template-areas:
    "b1 b2 b3 d"
    "b4 b5 b6 d"
    "b7 b8 b9 s"
    "b0 b0 bd s";
  grid-auto-rows: 48px;
  grid-auto-columns: 1fr;
  gap: 1px;
  flex-wrap: wrap;
  background: var(--number-button-border-color);
  border-top: 1px solid var(--number-button-border-color);
  > button {
    border: none;
    background: var(--number-button-bg);
    &:nth-child(1) {
      grid-area: b1;
    }
    &:nth-child(2) {
      grid-area: b2;
    }
    &:nth-child(3) {
      grid-area: b3;
    }
    &:nth-child(4) {
      grid-area: b4;
    }
    &:nth-child(5) {
      grid-area: b5;
    }
    &:nth-child(6) {
      grid-area: b6;
    }
    &:nth-child(7) {
      grid-area: b7;
    }
    &:nth-child(8) {
      grid-area: b8;
    }
    &:nth-child(9) {
      grid-area: b9;
    }
    &:nth-child(10) {
      grid-area: bd;
    }
    &:nth-child(11) {
      grid-area: b0;
    }
    &:nth-child(12) {
      grid-area: d;
    }
    &:nth-child(13) {
      grid-area: s;
      background: var(--number-button-bg-important);
      color: var(--number-button-text-important);
    }
  }
}
</style>
