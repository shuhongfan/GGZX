<template>
  <div class='todo-footer'>
    <label>
      <input type='checkbox' v-model='isAll' />
    </label>
    <span>
      <span>已完成{{ doneCount }}</span> / 全部{{ total }}
    </span>
    <button class='btn btn-danger'>清除已完成任务</button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',
})
</script>

<script setup lang='ts'>
// 引入接Todo接口
import type { Todo } from '@/App.vue'
// 引入computed
import { computed } from 'vue'

// 声明接收props，内容包含：todos数组
const props = defineProps<{
  todos: Todo[],
  checkAll(done: boolean): void,
}>()

// 计算【总数】
const total = computed(() => {
  return props.todos.length
})

// 计算【已完成】
const doneCount = computed(() => {
  return props.todos.reduce((pre, item) => pre + (item.done ? 1 : 0), 0)
})

// 计算全选
const isAll = computed({
  get() {
    return props.todos.every(item => item.done)
  },
  set(val) {
    props.checkAll(val)
  },
})
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}</style>