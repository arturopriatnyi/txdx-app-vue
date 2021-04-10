<template>
  <div class="todo-list">
    <TodoInput :onAddTodo="onAddTodo" />
    <div v-for="todo in todos" :key="todo.id">
      <Todo
        :id="todo.id"
        :text="todo.text"
        :priority="todo.priority"
        :completed="todo.completed"
        :onTogglePriority="onTogglePriority"
        :onDelete="onDelete"
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
    onTogglePriority(id) {
      this.todos = this.todos.map((todo) =>
        todo.id === id ? { ...todo, priority: !todo.priority } : todo
      );
    },
    onDelete(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
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
