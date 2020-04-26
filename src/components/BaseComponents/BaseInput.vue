<template>
  <!-- <div > -->
  <input :value="inputValue" id="baseInput" />
  <!-- </div> -->
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    inputValue: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      inputItem: ""
    };
  },
  computed: {},
  watch: {},
  created() {},
  methods: {}
};
</script>

<style scoped>
#baseInput {
  width: 60%;
  height: 40px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: "tnum";
  position: relative;
  display: inline-block;
  min-width: 0;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
}
</style>
