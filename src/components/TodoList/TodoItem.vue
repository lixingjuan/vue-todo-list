<template>
  <li class="todoItem">
    <span :class="{ itemText: true, hadDone: !todoItemProps.isTodo }">
      {{ todoItemProps.todoText }}
    </span>
    <div class="changeItemStatus">
      <input class="itemFinish" type="checkbox" :checked="!todoItemProps.isTodo" />
      <span class="itemDelete" @click="deleteTodoItem">+</span>
    </div>
  </li>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    todoItemProps: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    isTodo() {
      const { isTodo } = this.todoItemProps;
      return isTodo;
    }
  },
  watch: {
    isTodo: function() {
      console.log(1111);
      this.$store.commit("toggoleTodoItem", {
        ...this.todoItemProps,
        isTodo: !this.todoItemProps.isTodo
      });
    }
  },
  created() {},
  methods: {
    deleteTodoItem() {
      this.$store.commit("deleteTodoItem", this.inputItem);
    },
    changeItemStatus() {
      this.$store.commit("deleteTodoItem", this.inputItem);
    }
  }
};
</script>

<style scoped lang="scss">
.todoItem {
  width: 70%;
  min-height: 50px;
  border: 2px solid #f0f0f0;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 50px;
  list-style: none;
  font-feature-settings: "tnum";
  margin: 15px auto 15px auto;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .itemText {
    color: rgba(0, 0, 0, 0.65);
  }
  .hadDone {
    text-decoration: line-through;
  }
  .changeItemStatus {
    width: 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .itemFinish::selection {
      color: #fff;
      background: #1890ff;
    }
    .itemDelete {
      transform: rotate(45deg);
      color: #000;
      font-size: 60px;
    }
  }
}
</style>
