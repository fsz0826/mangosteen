<template>
  <div class="tabs">
    <ol class="tabs_nav">
      <li
        v-for="(item, index) in tabs"
        :key="index"
        @click="$emit('update:selected', item.props?.name)"
        :class="[item.props?.name === props.selected ? 'selected' : '']"
      >
        {{ item.props?.name }}
      </li>
    </ol>
    <div>
      <component
        class=""
        v-for="(item, index) in tabs"
        :is="item"
        :key="index"
        :class="{ selected: item.props?.title === selected }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, useSlots, VNode } from "vue";
import Tab from "./Tab.vue";

const props = defineProps({
  selected: {
    type: String as PropType<string>,
    required: false,
  },
});

defineEmits(["update:selected"]);

//获取<Tabs>内部的默认内容
const tabs = useSlots().default?.();
// console.log(tabs?.[0]?.children?.default?.());

//将<Tabs>内部的默认内容渲染到页面上

// 判断<Tabs>里面是否为<Tab>
// tabs.forEach((tab) => {
//   if (!tab) return null;
//   if (tab.type !== Tab) {
//     throw new Error("<Tabs> only accepts <Tab> as children");
//   }
// });
(() => {
  if (!tabs) return null;
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].type !== Tab) {
      throw new Error("<Tabs> only accepts <Tab> as children");
    }
  }
})();

const names: string[] | undefined = tabs?.map((item) => item.props?.name);
</script>

<style scoped lang="scss">
.tabs {
  &_nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    color: var(--navbar-text);
    > li {
      flex-grow: 1;
      flex-shrink: 0;
      padding: 12px 0;
      background: var(--navbar-bg-end);
      &.selected {
        position: relative;
        &::after {
          content: "";
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--tabs-indicator-bg);
        }
      }
    }
  }
}
</style>
