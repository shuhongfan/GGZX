<template>
  <div class='todo-header'>
    <input
      type='text'
      placeholder='请输入你的任务名称，按回车键确认'
      v-model='title'
      @keyup.enter='add'
    />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
})
</script>

<script setup lang='ts'>
import type { Todo } from '@/App.vue'
import { ref } from 'vue'

// 用户输入的数据
const title = ref('')

// 接收props
const props = defineProps<{ addTodo(todo: Todo): void }>()

// 添加的回调
const add = () => {
  //校验数据
  if (title.value.trim()) {
    // 将用户的输入包装成一个todo对象
    const todoObj: Todo = {
      id: Date.now().toString(),
      title: title.value,
      done: false,
    }
    // 调用父组件传递过来的函数实现添加
    props.addTodo(todoObj)
    // 清空输入
    title.value = ''
  } else {
    alert('输入不能为空')
  }
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}</style>