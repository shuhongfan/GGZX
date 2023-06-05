<template>
  <li>
    <label>
      <input
        type='checkbox'
        :checked='todo.done'
        @click='checkOne(todo.id,($event.target as HTMLInputElement).checked)' />
      <span>{{ todo.title }}</span>
    </label>
    <button class='btn btn-danger'>删除</button>
  </li>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Item',
})
</script>

<script setup lang='ts'>
import type { Todo } from '@/App.vue'

const props = defineProps<{
  todo: Todo,
  checkOne(id: string, done: boolean): void
}>()


</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: inline-block;
}

</style>