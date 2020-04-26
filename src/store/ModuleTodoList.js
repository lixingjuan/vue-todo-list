import uuid from "uuid";

const moduleTodoList = {
  state: {
    todolistArr: [
      {
        uuid: "2232323ddfasdf",
        todoText: "测试项目",
        isTodo: true
      }
    ]
  },
  mutations: {
    addTodoItem(state, payload) {
      state.todolistArr = [
        ...state.todolistArr,
        { uuid: uuid(), todoText: payload, isTodo: "true" }
      ];
      localStorage.setItem("todolistArr", JSON.stringify(state));
    },
    deleteTodoItem(state, beDeletedItemUuid) {
      state.todolistArr = state.todolistArr.map(item => {
        if (item.uuid === beDeletedItemUuid) {
          item.isTodo === false;
        }
        return item;
      });
    },
    toggoleTodoItem(state, payload) {
      console.log(1);
      const { uuid, isTodo } = payload;
      state.todolistArr = state.todolistArr.map(item => {
        if (item.uuid === uuid) {
          item.isTodo === isTodo;
        }
        return item;
      });
    }
  }
};

export default moduleTodoList;
