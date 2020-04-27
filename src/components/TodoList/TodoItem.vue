<template>
  <li class="todo-item-container">
    <span :class="{ itemText: true, hadDone: !todoItemProps.isTodo }">
      {{ todoItemProps.todoText }}
    </span>
    <div class="change-item-status">
      <!-- <input type="checkbox" v-model="checkedStatus" /> -->
      <base-checkbox
        :checkedStatusProps="checkedStatus"
        @getCheckboxStatusEvent="getCheckboxStatus"
      />

      <span
        @click="deleteTodoItem"
        @keydown="changeDeleteStyle"
        :class="{ 'item-delete': true, 'delete-icon-is-clicking': deleteIconIsClicking }"
      >
        +
      </span>
    </div>
  </li>
</template>

<script>
import { BaseCheckbox } from "@/components/BaseComponents";

export default {
  name: "",
  components: {
    BaseCheckbox
  },
  props: {
    todoItemProps: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      checkedStatus: !this.todoItemProps.isTodo,
      deleteIconIsClicking: false
    };
  },
  computed: {
    uuid: function() {
      const { uuid } = this.todoItemProps;
      return uuid;
    }
  },
  watch: {
    checkedStatus: function() {
      console.log(this.checkedStatus);
      this.$store.commit("toggoleTodoItem", {
        uuid: this.uuid,
        isTodo: !this.checkedStatus
      });
    }
  },
  created() {
    console.log(this.todoItemProps);
  },
  methods: {
    deleteTodoItem() {
      this.$store.commit("deleteTodoItem", this.uuid);
    },
    changeDeleteStyle() {
      console.log(1);
      this.deleteIconIsClicking = !this.deleteIconIsClicking;
    },
    getCheckboxStatus(checkedStatus) {
      this.checkedStatus = checkedStatus;
    }
  }
};
</script>

<style scoped lang="scss">
.todo-item-container {
  width: 80%;
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
  &:hover {
    border-color: #3dbcf6;
  }
  .itemText {
    color: rgba(0, 0, 0, 0.65);
  }
  .hadDone {
    text-decoration: line-through;
  }
  .change-item-status {
    width: 12%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .item-finish-wrapper {
    }
    .itemFinish::selection {
      color: #fff;
      background: #1890ff;
    }
    .item-delete {
      transform: rotate(45deg);
      color: #000;
      font-size: 60px;
      display: inline-block;
    }
    .delete-icon-is-clicking {
      color: #dedede;
    }
  }
}
</style>
