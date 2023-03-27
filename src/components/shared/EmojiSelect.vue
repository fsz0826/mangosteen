<template>
  <div class="emojiList">
    <nav>
      <span class="selected">表情</span>
      <span>手势</span>
      <span>职业</span>
      <span>衣服</span>
      <span>动物</span>
      <span>自然</span>
      <span>食物</span>
      <span>运动</span>
      <span>手势</span>
      <span>职业</span>
      <span>衣服</span>
      <span>动物</span>
      <span>自然</span>
      <span>食物</span>
      <span>运动</span>
    </nav>
    <ol>
      <li v-for="item in emojis">{{ item }}</li>
    </ol>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { emojiList } from "../../shared/emojiList";

const table: [string, string[]][] = [
  [
    "表情",
    [
      "face-smiling",
      "face-affection",
      "face-tongue",
      "face-hand",
      "face-neutral-skeptical",
      "face-sleepy",
      "face-unwell",
      "face-hat",
      "face-glasses",
      "face-concerned",
      "face-negative",
      "face-costume",
    ],
  ],
  [
    "手势",
    [
      "hand-fingers-open",
      "hand-fingers-partial",
      "hand-single-finger",
      "hand-fingers-closed",
      "hands",
      "hand-prop",
      "body-parts",
    ],
  ],
  [
    "人物",
    [
      "person",
      "person-gesture",
      "person-role",
      "person-fantasy",
      "person-activity",
      "person-sport",
      "person-resting",
    ],
  ],
  ["衣服", ["clothing"]],
  [
    "动物",
    [
      "cat-face",
      "monkey-face",
      "animal-mammal",
      "animal-bird",
      "animal-amphibian",
      "animal-reptile",
      "animal-marine",
      "animal-bug",
    ],
  ],
  ["植物", ["plant-flower", "plant-other"]],
  ["自然", ["sky & weather", "science"]],
  [
    "食物",
    [
      "food-fruit",
      "food-vegetable",
      "food-prepared",
      "food-asian",
      "food-marine",
      "food-sweet",
    ],
  ],
  ["运动", ["sport", "game"]],
];
const refSecectd = ref(1); //选择的表情分类
const selectedItem = table[refSecectd.value][1]; //选择的表情
const list = selectedItem.map(
  (category) => emojiList.find((item) => item[0] === category)?.[1]
); //选择的表情列表
console.log(list);

const emojis = list.flat(); //所有表情
console.log(emojis);
</script>
<style lang="scss" scoped>
.emojiList {
  flex-grow: 1;
  border: 1px solid var(--input-border-color);
  border-radius: var(--input-radius);
  font-size: 18px;
  font-size: 14px;
  &.error {
    border-color: var(--error-color);
  }
  > nav {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    padding: 0 4px;
    &::-webkit-scrollbar {
      display: none;
    }
    > span {
      flex-shrink: 0;
      display: inline-block;
      padding: 8px;
      color: var(--emoji-nav-text);
      &.selected {
        color: var(--emoji-nav-text-selected);
      }
    }
  }
  > ol {
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    font-size: 22px;
    line-height: 32px;
    height: calc(32px * 12);
    overflow: auto;
    padding: 0 4px;
    &::-webkit-scrollbar {
      display: none;
    }
    > li {
      flex-shrink: 0;
      flex-grow: 0;
      width: 10%;
      text-align: center;
    }
  }
}
</style>
