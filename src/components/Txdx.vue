<template>
  <div class="txdx">
    <h1>Txdx</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from './TodoList';

export default {
  name: 'Txdx',
  components: {
    TodoList,
  },
};
</script>

<style scoped>
* {
  font-family: 'Roboto', sans-serif;
}
.txdx {
  max-width: 750px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  font-size: 3em;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  color: steelblue;
}
</style>
