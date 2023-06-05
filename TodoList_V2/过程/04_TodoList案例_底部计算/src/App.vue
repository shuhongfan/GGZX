<template>
  <div id='root'>
    <div class='todo-container'>
      <div class='todo-wrap'>
        <Header :addTodo='addTodo' />
        <List :todos='todos' :deleteTodo='deleteTodo' />
        <Footer
          :todos='todos'
          v-show='todos.length'
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: { Header, List, Footer },
  data() {
    return {
      todos: [
        { id: 'hiuahd7212', title: '抽烟', done: false },
        { id: 'hiuahd7213', title: '喝酒', done: true },
        { id: 'hiuahd7214', title: '学习', done: false },
      ],
    }
  },
  methods: {
    // 用于添加一个todo，收到的参数是一个todo对象
    addTodo(todoObj) {
      console.log('我是App组件，我收到了一个todo对象', todoObj)
      // 查找是否有同名的
      let result = this.todos.find(t => t.title === todoObj.title)
      // 有同名的
      if (result) {
        alert('不能重复添加')
      } else {
        // 在todos数组的前方加一个todo
        this.todos.unshift(todoObj)
      }
    },
    // 用于删除一个todo，收到的参数是id
    deleteTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
  },
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
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
  0 1px 2px rgba(0, 0, 0, 0.05);
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