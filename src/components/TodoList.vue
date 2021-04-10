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
import { mapState, mapMutations } from 'vuex';

import TodoInput from './TodoInput';
import Todo from './Todo';

export default {
  name: 'TodoList',
  components: { TodoInput, Todo },
  computed: mapState(['todos']),
  methods: {
    ...mapMutations({
      onAddTodo: 'addTodo',
      onToggleCompleted: 'toggleCompleted',
      onTogglePriority: 'togglePriority',
      onDelete: 'delete',
    }),
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
