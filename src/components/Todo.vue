<template>
  <div
    :class="`todo ${priority ? 'priority' : ''} ${
      completed ? 'completed' : ''
    }`"
  >
    <p>{{ text }}</p>
    <div class="icons">
      <div class="icon">
        <unicon name="exclamation-circle" fill="steelblue" />
      </div>
      <div class="icon">
        <unicon name="trash" fill="tomato" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    text: String,
    priority: Boolean,
    completed: Boolean,
  },
};
</script>

<style scoped>
.todo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 2px solid steelblue;
  border-radius: 15px;
}
.priority {
  color: steelblue;
  font-style: italic;
}
.completed {
  text-decoration: line-through;
}
p {
  margin: 0px;
  font-size: 1.5em;
}
@media (max-width: 600px) {
  p {
    font-size: 1em;
  }
}
.icons {
  display: flex;
}
.icon * {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
}
</style>
