<template>
  <div class="child">
     <h1>我是子组件1</h1>
     <Child></Child>
  </div>
</template>

<script setup lang="ts">
import Child from './GrandChild.vue';
</script>

<style scoped>
.child{
  width: 300px;
  height: 400px;
  background: yellowgreen;
}
</style>