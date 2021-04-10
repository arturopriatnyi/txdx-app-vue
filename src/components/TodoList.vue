<template>
  <div class="todo-list">
    <TodoInput :onAddTodo="onAddTodo" />
    <div v-for="todo in todos" :key="todo.id">
      <Todo
        :id="todo.id"
        :text="todo.text"
        :priority="todo.priority"
        :completed="todo.completed"
        :onToggleCompleted="onToggleCompleted"
        :onTogglePriority="onTogglePriority"
        :onDelete="onDelete"
      />
    </div>
  </div>
</template>

<script>
import TodoInput from './TodoInput';
import Todo from './Todo';

export default {
  name: 'TodoList',
  components: { TodoInput, Todo },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    onAddTodo(todoText) {
      this.$store.commit('addTodo', todoText);
    },
    onToggleCompleted(id) {
      this.$store.commit('toggleCompleted', id);
    },
    onTogglePriority(id) {
      this.$store.commit('togglePriority', id);
    },
    onDelete(id) {
      this.$store.commit('delete', id);
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
