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
      <template v-for="(item, index) in tabs">
        <component v-if="item.props?.name === props.selected" :is="item" :key="index" />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, useSlots } from "vue";
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

// 判断<Tabs>里面是否为<Tab>
(() => {
  if (!tabs) return null;
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].type !== Tab) {
      throw new Error("<Tabs> only accepts <Tab> as children");
    }
  }
})();
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
