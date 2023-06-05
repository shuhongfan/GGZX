<template>
  <div id='root'>
    <div class='todo-container'>
      <div class='todo-wrap'>
        <Header :addTodo='addTodo' />
        <List :todos='todos' :checkOne='checkOne' :deleteTodo='deleteTodo' />
        <Footer v-show='todos.length' :todos='todos' :checkAll='checkAll' :clearAllDone='clearAllDone' />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<script setup lang='ts'>
import { reactive, watch } from 'vue'
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'

// 定义接口，限制Todo对象具体内容
export interface Todo {
  id: string,
  title: string,
  done: boolean
}

// 依据Todo接口规范，定义todos数组
let todos = reactive<Todo[]>(JSON.parse(localStorage.getItem('todos') as string) || [])

// 监视todos的修改
watch(todos, (value) => {
  localStorage.setItem('todos', JSON.stringify(value))
})

// 添加一个todo
const addTodo = (todo: Todo) => {
  todos.unshift(todo)
}

// 勾选一个todo
const checkOne = (id: string, done: boolean) => {
  const result = todos.find(item => item.id === id) as Todo
  result.done = done
}

// 删除一个todo
const deleteTodo = (id: string) => {
  //第一种写法
  let index = todos.findIndex(item => item.id === id)
  todos.splice(index, 1)
}

// 全选
const checkAll = (done: boolean) => {
  todos.forEach((item) => item.done = done)
}

// 清除已完成
const clearAllDone = () => {
  let result = todos.filter(item => !item.done)
  todos.splice(0, todos.length, ...result)
  console.log(todos)
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>