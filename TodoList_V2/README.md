# TodoList案列Vue2版本

## 1. TodoList_静态组件

1. 先把所有的`html`结构、`css`样式，都放在`App`组件中。
2. 随后拆分成：`Header`、`List`、`Item`、`Footer`组件。
3. 把：结构、样式，都放在对应的`.vue`里。

## 2. TodoList_初始化数据

1. 需要准备一个`todos`数组，用于保存多个`todo`对象。

   ```js
   todos:[
     {id:'qw7ywqe28',title:'吃饭',done:false},
     {id:'dw3iw92kj',title:'睡觉',done:true},
     {id:'opkmi9s72',title:'学习',done:false},
   ]
   ```

2. 观察发现：`todos`数组，好多组件都要使用，所以我们选择放在`App`组件中。

   > 很多组件都用的数据，可以放在他们共同的父组件中，这叫：状态提升（数据提升）。

3. `App`组件中：通过`props`传递给`List`组件。

   ```vue
   <List :todos="todos"/>
   ```

4. `List`组件中：接收`todos`数组，使用`v-for`遍历，生成多个`Item`组件，<font color="red">**同时传递每一个`todo`对象给`Item`
   组件**</font>。

   ```vue
   <template>
     <ul class="todo-main">
       <Item v-for="t in todos" :key="t.id" :todo="t"/>
     </ul>
   </template>
     
   <script>
   	import Item from './Item.vue'
   	export default {
   		name: "List",
   		components:{Item},
   		props:['todos']
   	};
   </script>
   ```

5. `Item`组件接收`todo`对象，并展示。

   ```vue
   <template>
     <li>
       <label> 
   			<input type="checkbox" v-model="todo.done"/>
   			<span>{{todo.title}}</span> 
   		</label>
       <button class="btn btn-danger" style="display: none">删除</button>
     </li>
   </template>
   
   <script>
   	export default {
   		name: "Item",
   		props:['todo']
   	};
   </script>
   ```

## 3. TodoList_添加todo

1. 由于数据在`App`组件中，所以在`App`中创建一个`addTodo`方法，专门用于添加`todo`。

2. `App`组件中，通过`props`将`addTodo`传给`Header`组件。

   > 注意判断重复数据，使用数组的`find`方法。

   ```vue
   <template>
     <!------------>
     <Header :addTodo="addTodo"/>
     <!------------>
   </template>
   
   <script>
     export default {
       /*****************/
       methods: {
         addTodo(todoObj){
           //find是有返回值的，若找到了返回该条记录，若找不到undefined
           const result = this.todos.find((t)=>{
             return t.title === todoObj.title
           })
           if(result){
             alert('输入重复，请重新输入！')
           }else{
             this.todos.unshift(todoObj)
           }
         }
       },
       /*****************/
     };
   </script>
   ```

3. `Header`组件中，接收`addTodo`，需要添加的时候，直接调用即可。

   > 注意点：我们使用了`nanoid`这个库，去生成唯一标识。

   ```vue
   <template>
   	<div class="todo-header">
   		<input 
   			type="text" 
   			placeholder="请输入你的任务名称，按回车键确认" 
   			@keyup.enter="handleAdd"
   		/>
   	</div>
   </template>
   
   <script>
   	import {nanoid} from 'nanoid'
     
   	export default {
   		name:'Header',
   		props:['addTodo'],
   		methods: {
   			handleAdd(e){
   				//1.获取用户的输入
           let {value} = e.target
           // 2.校验用户的输入
           if(value.trim()){
             //把用户的输入包装成一个todo对象
             let todoObj = {
               id:nanoid(),
               title:value.trim(),
               done:false
             }
             //调用App传递过来的addTodo，去实现添加
             this.addTodo(todoObj)
           }else{
             alert('输入不能为空！')
           }
           //清空用户输入
           e.target.value = ''
   			}
   		},
   	}
   </script>
   ```

## 4. TodoList_删除todo

1. 由于数据在`App`组件中，所以在`App`中创建一个`deleteTodo`方法，用于删除某个`todo`。

   ```js
   methods: {
     /**********/
     deleteTodo(id){
       this.todos = this.todos.filter((todo)=>{
         return todo.id !== id
       })
     }
     /**********/
   },
   ```

2. `App`组件中，通过`props`将`deleteTodo`传给List组件。

   ```vue
   <List :todos="todos" :deleteTodo="deleteTodo"/>
   ```

3. List组件接收到deleteTodo后，进一步传给Item组件

   ```vue
   <template>
     <ul class="todo-main">
       <Item v-for="t in todos" :key="t.id" :todo="t" :deleteTodo="deleteTodo"/>
     </ul>
   </template>
   
   <script>
   	import Item from './Item.vue'
     
   	export default {
   		name: "List",
   		components:{Item},
   		props:['todos','deleteTodo']
   	};
   </script>
   ```

4. `Item`组件中，接收`deleteTodo`，并在需要删除的时候使用

   ```vue
     <li>
       <label> 
   			<input type="checkbox" v-model="todo.done"/>
   			<span>{{todo.title}}</span> 
   		</label>
       <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
     </li>
   </template>
   
   <script>
   	export default {
   		name: "Item",
   		props:['todo','deleteTodo'],
   		methods: {
   			handleDelete(id){
   				if(confirm('确定删除吗？')){
   					this.deleteTodo(id)
   				}
   			}
   		},
   	};
   </script>
   ```

## 5. TodoList_勾选todo

我们之前写的是`v-model`所以，是双向绑定，所以勾选的时候，`App`中的数据是自动修改的，无需编码，就已经实现了勾选单个`todo`。

## 6 . TodoList_底部计算

直接使用计算属性，代码如下：

```js
computed:{
  total(){
    return this.todos.length
  },
  doneCount(){
      // 第一种计算已完成总数的方式
      /* let n = 0
			this.todos.forEach(todo => {
				if(todo.done){
					n++
				}
			});
			return n */

      // 第二种用reduce，最简便的方式去写
      return this.todos.reduce((pre,current)=> pre + (current.done ? 1 : 0) ,0)
  }
}
```

## 7. TodoList_全选 or 全不选

1. 在`Footer`组件中

   ```vue
   <input type="checkbox" v-model="isAll"/>
   ```

2. `isAll`改为计算属性

   ```js
   isAll:{
       get(){
           return this.todos.every((todo)=>{
               return todo.done
           })
       },
       set(checked){
          this.checkAll(checked)
       }
   }
   ```

## 8. TodoList_清除已完成

1. `App`组件中，通过`props`将`clearAllDone`传给`Footer`组件。

   ```vue
   <Footer :clearAllDone="clearAllDone"/>
   
   <script>
     methods: {
       clearAllDone(){
         this.todos = this.todos.filter( t => !t.done)
       },
     },
   </script>
   ```

2. `Footer`组件中，接收`clearAllDone`，并使用

   ```vue
   <button class="btn btn-danger" @click="handleClear">清除已完成任务</button>
   
   <script>
     export default {
       name: "Footer",
       props:['clearAllDone','todos'],
       methods:{
         handleClear(){
           if(confirm('确定清除已完成吗？')){
             this.clearAllDone()
           }
         }
       },
     };
   </script>
   ```

## 9. TodoList 本地存储版

1. 需求：刷新页面，关闭浏览器，`TodoList`列表不清空，依然是之前的数据。

2. 思路：将数据存储进`localStorage`中。

3. 具体操作：在`App`组件中监视`todos`数组，只要数组发生变化，就存入`localStorage`。

4. 具体编码：

   ```js
   //......
   data() {
     return {
       //所有要做的事
       todos:JSON.parse(localStorage.getItem('todos')) || []
     }
   }
   //......
   watch:{
     todos:{
       deep:true,
         handler(value){
         	localStorage.setItem('todos',JSON.stringify(value))
       }
     }
   }
   ```

##  