<template>
  <div class="todo-list">
    <TodoInput />
    <Todo text="Build Txdx with Vue" />
    <Todo text="Add Vuex to Txdx" />
    <Todo text="Refactor the whole project and prepare for production" />
    <Todo text="Maybe add Nuxt?" />
    <Todo text="Continue learning Vue" />
  </div>
</template>

<script>
import TodoInput from './TodoInput';
import Todo from './Todo';

export default {
  name: 'TodoList',
  components: { TodoInput, Todo },
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
