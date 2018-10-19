export default {
  namespaced: true,
  state: {
    count: 1,
    todos: [
      {
        id: 1,
        text: "A Thing To Do!",
        completed: true
      }
    ]
  },
  actions: {
    addToDo({ commit }, text) {
      commit("addToDo", text);
    },
    todoDone({commit}, id) {
      commit("todoDone", id)
    }
  },
  mutations: {
    todoDone(state, id) {
      state.todos.map(todo => {
        if (todo.id == id) {
          todo.completed = !todo.completed;
        }
      })
    },
    addToDo(state, text) {
      state.todos.push({
        id: ++state.count,
        text: text,
        completed: false
      });
    }
  }
};
