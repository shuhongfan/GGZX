<template>
  <li>
    <label>
      <!-- <input type="checkbox" v-model="todoObj.done"/> -->
      <input type='checkbox' :checked='todoObj.done' @click='demo(todoObj.id,$event)' />
      <span>{{ todoObj.title }}</span>
    </label>
    <button class='btn btn-danger' @click='handleDelete(todoObj.id)'>删除</button>
  </li>
</template>

<script>
export default {
  name: 'Item',
  props: ['todoObj', 'deleteTodo', 'checkOne'],
  methods: {
    handleDelete(id) {
      if (confirm('确定吗？')) {
        this.deleteTodo(id)
      }
    },
    demo(id, event) {
      // console.log('@',x.target.checked)
      this.checkOne(id, event.target.checked)
    },
  },
}
</script>

<style scoped>
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
  margin-top: 3px;
  display: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>