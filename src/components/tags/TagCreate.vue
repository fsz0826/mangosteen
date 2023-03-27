<template>
  <MainLayout>
    <template #icon>
      <SvgIcon name="back" @click="() => {}" />
    </template>
    <template #title> 新建标签 </template>
    <template #default>
      <form class="form">
        <div class="formRow">
          <label class="formLabel">
            <span class="formItem_name">标签名</span>
            <div class="formItem_value">
              <input v-model="formDate.name" class="formItem input error" type="" />
            </div>
            <div class="formItem_errorHint">
              <span>必填</span>
            </div>
          </label>
        </div>
        <div class="formRow">
          <label class="formLabel">
            <span class="formItem_name">符号</span>
            <div class="formItem_value">
              <EmojiSelect class="formItem error" />
            </div>
            <div class="formItem_errorHint">
              <span>必填</span>
            </div>
          </label>
        </div>

        <p class="tips">记账时，长按标签即可进行编辑</p>
        <div class="formRow">
          <div class="formItem_value">
            <Button class="formItem button">确定</Button>
          </div>
        </div>
      </form>
    </template>
  </MainLayout>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import MainLayout from "../layouts/MainLayout.vue";
import Button from "../shared/Button.vue";
import EmojiSelect from "../shared/EmojiSelect.vue";

const formDate = reactive({
  name: "",
  sign: "",
});
</script>
<style lang="scss" scoped>
.tips {
  text-align: center;
  padding: 16px 0;
}
.form {
  padding: 16px;
}
.formRow {
  margin-top: 8px;
}
.formLabel {
}
.formItem {
  min-height: var(--input-min-height);
  max-width: 100%;
  &.button {
    width: 100%;
  }
  &.input {
    flex-grow: 1;
    border: 1px solid var(--input-border-color);
    border-radius: var(--input-radius);
    font-size: 18px;
    font-family: inherit;
    padding-left: 16px;
    padding-right: 16px;
    box-shadow: inset 0 0 3px var(--input-shadow);
    &.error {
      border-color: var(--error-color);
    }
  }
  &_name {
  }
  &_value {
    display: flex;
    margin-top: 4px;
  }
  &_errorHint {
    margin-top: 4px;
    color: var(--error-color);
    font-size: 12px;
  }
}
</style>
