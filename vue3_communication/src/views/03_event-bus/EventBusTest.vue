<template>
  <div class="box">
    <h1>全局事件总线$bus</h1>
    <hr/>
    <div class="container">
      <Child1></Child1>
      <Child2></Child2>
    </div>
  </div>
</template>

<script setup lang="ts">
//引入子组件
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";
</script>

<style scoped>
.box {
  width: 100vw;
  height: 400px;
  background: yellowgreen;
}

.container {
  display: flex;
  justify-content: space-between;
}
</style>