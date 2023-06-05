<template>
  <div class='todo-footer'>
    <label>
      <input type='checkbox' v-model='isAll' />
    </label>
    <span> <span>已完成{{ doneCount }}</span> / 全部{{ todos.length }} </span>
    <button class='btn btn-danger'>清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: ['todos', 'checkAll'],
  computed: {
    // 已完成的数量
    doneCount() {
      // 第一种算的方式
      /* let x = 0
      this.todos.forEach(t => {
        if(t.done){
          x++
        }
      });
      return x */

      // 第二种计算方式（依个人情况看）
      return this.todos.reduce((pre, item) => pre + (item.done ? 1 : 0), 0)
    },
    isAll: {
      get() {
        return this.todos.every((t) => {
          return t.done
        })
      },
      set(flag) {
        // console.log('@',flag)
        this.checkAll(flag)
      },
    },
  },
}
</script>

<style scoped>
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
}
</style>