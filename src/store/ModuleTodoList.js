import uuid from "uuid";

const moduleTodoList = {
  state: {
    todolistArr: [
      // {
      //   uuid: "2232323ddfasdf",
      //   todoText: "测试项目",
      //   isTodo: true
      // }
    ]
  },
  mutations: {
    initTodoItems(state) {
      state.todolistArr = JSON.parse(localStorage.getItem("todolistArr")) || [];
    },

    addTodoItem(state, payload) {
      state.todolistArr = [
        { uuid: uuid(), todoText: payload, isTodo: "true", beAddedTimeString: +new Date() },
        ...state.todolistArr
      ];
      localStorage.setItem("todolistArr", JSON.stringify(state.todolistArr));
    },

    deleteTodoItem(state, beDeletedItemUuid) {
      console.log("触发删除");
      state.todolistArr = state.todolistArr.filter(item => item.uuid !== beDeletedItemUuid);
      localStorage.setItem("todolistArr", JSON.stringify(state.todolistArr));
    },

    deleteAllTodoItems(state) {
      console.log("触发删除全部");
      state.todolistArr = [];
      localStorage.setItem("todolistArr", JSON.stringify(state.todolistArr));
    },

    toggoleTodoItem(state, beToggoledTodoItem) {
      console.log("ce", beToggoledTodoItem.isTodo);
      const { uuid, isTodo } = beToggoledTodoItem;
      state.todolistArr = state.todolistArr.map(item => {
        if (item.uuid === uuid) {
          item.isTodo = isTodo;
        }
        return item;
      });
      localStorage.setItem("todolistArr", JSON.stringify(state.todolistArr));
    }
  }
};

export default moduleTodoList;
