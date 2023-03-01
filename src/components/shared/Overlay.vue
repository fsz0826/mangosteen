<template>
  <div class="mask" @click="close"></div>
  <div class="overlay">
    <section class="currentUser" @click="onClickSignIn">
      <h2>未登录用户</h2>
      <p>点击这里登陆</p>
    </section>
    <nav>
      <ul class="action_list">
        <li>
          <router-link to="/statistics" class="action">
            <SvgIcon name="chart" class="overlayNavIcon"/>
            <span>统计图表</span>
          </router-link>
        </li>
        <li>
          <router-link to="/export" class="action">
            <SvgIcon name="export" class="overlayNavIcon" />
            <span>导出数据</span>
          </router-link>
        </li>
        <li>
          <router-link to="/notify" class="action">
            <SvgIcon name="notify" class="overlayNavIcon"/>
            <span>记账提醒</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import {PropType} from "vue";

const props = defineProps({
    onClose:{
      type:Function as PropType<()=>void>
    }
})
const close = () => {
  props.onClose?.()
}
const onClickSignIn = () => {
  console.log('signin')
}
</script>

<style lang="scss" scoped>
.mask{
  position: fixed;
  z-index: var(--z-index-overlay);
  background: var(--overlay-mask-bg);
  top: var(--top-safe-area-height);
  left: 0;
  width: 100%;
  height:calc(100% - var(--top-safe-area-height)) ;
}
.overlay{
  position: fixed;
  z-index:calc(var(--z-index-overlay) + 1);
  background: var(--overlay-bg);
  top: var(--top-safe-area-height);
  left: 0;
  width: 16em;
  height:calc(100% - var(--top-safe-area-height)) ;
}
.currentUser{
  padding: 32px 16px;
  background: var(--overlay-user-bg);
  color: var(--overlay-user-text);
}
.action{
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 12px 16px;
  &_lsit{
    padding-top: 16px;
    font-size: 20px;
  }
  >.overlayNavIcon{
    margin-right: 12px;
  }
}
</style>
