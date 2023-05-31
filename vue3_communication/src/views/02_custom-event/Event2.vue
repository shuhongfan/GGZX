<template>
  <div class="child">
    <p>我是子组件2</p>
    <button @click="handler">点击我触发自定义事件xxx</button>
    <button @click="$emit('click','AK47','J20')">点击我触发自定义事件click</button>
  </div>
</template>

<script setup lang="ts">
//利用defineEmits方法返回函数触发自定义事件
//defineEmits方法不需要引入直接使用
let $emit = defineEmits(['xxx','click']);
//按钮点击回调
const handler = () => {
  //第一个参数:事件类型 第二个|三个|N参数即为注入数据
    $emit('xxx','东风导弹','航母');
};
</script>

<style scoped>
.child {
  width: 400px;
  height: 200px;
  background: pink;
}
</style>