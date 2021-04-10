import { createStore } from 'vuex';

let nextId = 0;

const store = createStore({
  state() {
    return {
      todos: [],
    };
  },
  mutations: {
    addTodo(state, text) {
      nextId++;
      state.todos.push({ id: nextId, text, priority: false, completed: false });
    },
    toggleCompleted(state, id) {
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    },
    togglePriority(state, id) {
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, priority: !todo.priority } : todo
      );
    },
    delete(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
});

export default store;
