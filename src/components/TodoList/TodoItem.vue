<template>
  <li class="todo-item-container">
    <base-checkbox
      :checkedStatusProps="checkedStatus"
      @getCheckboxStatusEvent="getCheckboxStatus"
    />

    <div class="itemText">
      <div :class="{ hadDone: !todoItemProps.isTodo }">
        {{ todoItemProps.todoText }}
      </div>
      <div class="add-time">{{ timeInterval }}</div>
    </div>

    <base-delete-button @onClick="deleteTodoItem" />
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
      deleteIconIsClicking: false,
      timeInterval: ""
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
    this.getTimeInterval();
  },
  beforeDestroy() {},
  methods: {
    deleteTodoItem() {
      this.$store.commit("deleteTodoItem", this.uuid);
    },
    // changeDeleteStyle() {
    //   console.log(1);
    //   this.deleteIconIsClicking = !this.deleteIconIsClicking;
    // },
    getCheckboxStatus(checkedStatus) {
      this.checkedStatus = checkedStatus;
    },

    // toSetItmeOut() {
    //   setTimeout(() => {
    //     this.getTimeInterval();
    //   }, 3000);
    // },

    getTimeInterval() {
      const millisecondInterval = (+new Date() - this.todoItemProps.beAddedTimeString) / 1000;

      if (millisecondInterval / 60 ** 3 >= 1) {
        this.timeInterval = `${(millisecondInterval / 60 ** 3).toFixed()}天前`;
      } else if (millisecondInterval / 60 ** 2 >= 1) {
        this.timeInterval = `${(millisecondInterval / 60 ** 2).toFixed()}小时前`;
      } else if (millisecondInterval / 60 >= 1) {
        this.timeInterval = `${(millisecondInterval / 60).toFixed()}分钟前`;
      } else if (millisecondInterval >= 1) {
        this.timeInterval = `${millisecondInterval.toFixed()}秒前`;
      } else {
        this.timeInterval = `${(
          +new Date() - this.todoItemProps.beAddedTimeString
        ).toFixed()}毫秒前`;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.todo-item-container {
  display: grid;
  border: 2px solid #f0f0f0;
  grid-template-columns: 5% 80% 10%;
  justify-items: center;
  align-items: center;
  padding: 10px 0;
  margin-top: 30px;
  border-radius: 20px;
  font-size: 15px;
  & > div {
    width: 100%;
  }
  & > div:nth-child(1) {
    text-align: center;
  }
  & > div:nth-child(2) {
    justify-self: start;
    align-items: start;
    .add-time {
      text-align: right;
    }
  }
  .hadDone {
    text-decoration: line-through;
  }
}
</style>
