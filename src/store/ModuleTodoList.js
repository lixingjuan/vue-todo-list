const moduleTodoList = {
  state: {
    todolistArr: [
      {
        uuid: "2232323ddfasdf",
        todoText: "测试项目",
        isTodo: "true"
      }
    ]
  },
  mutations: {
    addTodoItem(state, payload) {
      console.log(payload);
      state.todolistArr = [...state.todolistArr, payload];
    }
  }
};

export default moduleTodoList;
