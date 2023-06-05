<template>
  <div class='todo-header'>
    <input
      type='text'
      placeholder='请输入你的任务名称，按回车键确认'
      v-model='title'
      @keyup.enter='handleAdd'
    />
  </div>
</template>

<script>
import { nanoid } from 'nanoid'

export default {
  name: 'Header',
  props: ['addTodo'],
  data() {
    return {
      title: '', //收集用户输入的title值
    }
  },
  methods: {
    // 用户按下回车的对应的方法
    handleAdd() {
      if (this.title) {
        // 将用户的输入包装成一个todo对象
        const obj = { id: nanoid(), title: this.title, done: false }
        // 调用父组件传递过来的addTodo，实现新增
        this.addTodo(obj)
        // 清空输入
        this.title = ''
      } else {
        alert('输入不能为空！')
      }
    },
  },
}
</script>

<style scoped>
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
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
  0 0 8px rgba(82, 168, 236, 0.6);
}
</style>