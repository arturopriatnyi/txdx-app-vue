<template>
  <div class="todo-input">
    <input
      type="text"
      placeholder="Type a todo..."
      v-model="todoText"
      v-on:keyup.enter="addTodo()"
    />
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      todoText: '',
    };
  },
  props: {
    onAddTodo: Function,
  },
  methods: {
    addTodo() {
      if (this.todoText !== '') {
        this.onAddTodo(this.todoText);
        this.todoText = '';
      }
    },
  },
};
</script>

<style scoped>
.todo-input {
  height: 30px;
  display: flex;
  justify-content: stretch;
  padding: 5px;
  border: 2px solid steelblue;
  border-radius: 15px;
}
input {
  width: 100%;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5em;
}
input:focus {
  outline: none;
}
input::placeholder {
  color: #ccc;
}
</style>
