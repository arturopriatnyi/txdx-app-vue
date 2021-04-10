<template>
  <div class="todo-input">
    <input type="text" placeholder="Type a todo..." />
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
};
</script>

<style scoped>
.todo-input {
  width: 60%;
  height: 30px;
  display: flex;
  justify-content: stretch;
  padding: 5px;
  border: 2px solid steelblue;
  border-radius: 15px;
}
@media (max-width: 500px) {
  .todo-input {
    width: 90%;
  }
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
