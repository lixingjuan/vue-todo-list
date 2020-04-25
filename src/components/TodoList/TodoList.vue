<template>
  <ul>
    <li v-for="item in todolistArr" :key="item.uuid">{{ item.todoText }}</li>
    <li>2</li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: mapState({
    todolistArr: state => state.ModuleTodoList.todolistArr
  }),
  watch: {},
  created() {
    console.log(this.todolistArr);
  },
  methods: {}
};
</script>

<style scoped></style>
