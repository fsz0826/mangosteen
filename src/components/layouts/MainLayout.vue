<template>
  <div>
    <Navbar>
      <template #icon>
        <slot name="icon"/>
      </template>
      <template #title>
        <slot name="title"/>
      </template>
    </Navbar>
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import Navbar from "../shared/Navbar.vue";
</script>

<style scoped lang="scss">

</style>