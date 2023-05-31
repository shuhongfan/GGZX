<template>
  <div class="box">
    <h1>Provide与Inject{{car}}</h1>
    <hr />
    <Child></Child>
  </div>
</template>

<script setup lang="ts">
import Child from "./Child.vue";
//vue3提供provide(提供)与inject(注入),可以实现隔辈组件传递数据
import { ref, provide } from "vue";
let car = ref("法拉利");
//祖先组件给后代组件提供数据
//两个参数:第一个参数就是提供的数据key
//第二个参数:祖先组件提供数据
provide("TOKEN", car);
</script>

<style scoped>
.box {
  width: 100vw;
  height: 600px;
  background: skyblue;
}
</style>