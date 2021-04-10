<template>
  <div class="todo-list">
    <TodoInput :onAddTodo="onAddTodo" />
    <div v-for="todo in todos" :key="todo.id">
      <Todo
        :text="todo.text"
        :priority="todo.priority"
        :completed="todo.completed"
      />
    </div>
  </div>
</template>

<script>
import TodoInput from './TodoInput';
import Todo from './Todo';

let nextId = 0;

export default {
  name: 'TodoList',
  components: { TodoInput, Todo },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    getNextId() {
      nextId++;
      return nextId;
    },
    onAddTodo(todoText) {
      this.todos.push({
        id: this.getNextId(),
        text: todoText,
        priority: false,
        completed: false,
      });
      console.log(this.todos);
    },
  },
};
</script>

<style scoped>
* {
  margin: 10px 0px;
}
.todo-list {
  width: 80%;
}
@media (max-width: 500px) {
  .todo-list {
    width: 80%;
  }
}
</style>
