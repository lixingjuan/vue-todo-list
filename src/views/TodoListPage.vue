<template>
  <div id="page-container">
    <div id="page-container-button-group">
      <base-button @onClick="deleteAll" buttonText="删除全部" />
    </div>

    <todo-input></todo-input>
    <todo-list></todo-list>

    <ul>
      <li v-for="(item, index) in demoArr" :key="item.demo">
        {{ item.id }}
        <button @click="deleteItem(index)">删除</button>
      </li>
    </ul>
    <div>
      <h1>测试渲染</h1>
      {{ getTemplete() }}
    </div>
  </div>
</template>

<script>
import { BaseButton } from '@/components/BaseComponents';
import { TodoList, TodoInput } from '@/components/TodoList';

export default {
  components: {
    TodoList,
    TodoInput,
    BaseButton
  },
  data() {
    return {
      currentTheme: '',
      demoArr: [
        {
          demo: '11',
          value: 11
        },
        {
          demo: '11',
          value: 22
        },
        {
          demo: '11',
          value: 33
        },
        {
          demo: '11',
          value: 4
        },
        {
          demo: '11',
          value: 5
        },
        {
          demo: '11',
          value: 6
        },
        {
          demo: '11',
          value: 7
        },
        {
          demo: '11',
          value: 8
        },
        {
          demo: '11',
          value: 9
        },
        {
          demo: '11',
          value: 10
        }
      ]
    };
  },
  methods: {
    switchTheme() {
      const themeArr = ['red', 'pink'];
      const themeIndex = Math.round(Math.random(0, themeArr.length));
      this.currentTheme = themeArr[themeIndex];
    },
    deleteAll() {
      this.$store.commit('deleteAllTodoItems');
    },
    deleteItem(index) {
      this.demoArr.splice(index, 1);
    },
    getTemplete() {
      // return this.$createElement(`<div>hahah</div>`);
      return this.$createElement(
        'h' + 1 // 标签名称
      );
    }
  }
};
</script>

<style scoped lang="scss">
$prefix: page-container;

##{$prefix} {
  width: 90%;
  height: 90%;
  border: 5px solid #4c8f38;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  border-radius: 30px;
  ##{$prefix}-button-group {
    width: 100%;
    margin-top: 30px;
    & > button {
      margin-left: 30px;
    }
  }
  .red {
    color: red;
  }
  .pink {
    color: pink;
  }
}
</style>
