<template>
  <ul class='todo-main'>
    <Item v-for='t in todos' :key='t.id' :todo='t' :checkOne='checkOne' />
  </ul>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'List',
})
</script>

<script setup lang='ts'>
import Item from './Item.vue'
import type { Todo } from '@/App.vue'

// 接收props，包含：todos数组
defineProps<{
  todos: Todo[],
  checkOne(id: string, done: boolean): void
}>()
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>