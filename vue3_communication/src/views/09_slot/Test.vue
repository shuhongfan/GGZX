<template>
  <div class="box">
    <h1>我是子组件默认插槽</h1>
    <!-- 默认插槽 -->
    <slot></slot>
    <h1>我是子组件默认插槽</h1>
    <h1>具名插槽填充数据</h1>
    <slot name="a"></slot>
    <h1>具名插槽填充数据</h1>
    <h1>具名插槽填充数据</h1>
    <slot name="b"></slot>
    <h1>具名插槽填充数据</h1>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.box {
  width: 100vw;
  height: 500px;
  background: skyblue;
}
</style>