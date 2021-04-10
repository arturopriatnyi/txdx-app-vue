<template>
  <div class="txdx">
    <h1>Txdx</h1>
    <TodoInput />
  </div>
</template>

<script>
import TodoInput from './TodoInput';

export default {
  name: 'Txdx',
  components: {
    TodoInput,
  },
};
</script>

<style scoped>
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
