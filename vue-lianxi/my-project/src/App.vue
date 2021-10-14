<template>
  <div id="app">
    <!-- <h1>{{ title }}</h1> -->
    <app-header></app-header>
    <button @click="clickParent">点击</button>
    <!-- <users></users> -->
    <users
      :users3="users2"
      ref="users4"
      :name1="name"
      @changeNamed="updateName($event)"
    ></users>
    <app-footer></app-footer>
  </div>
</template>

<style lang="scss">
// h1 {
//   text-align: center;
// }
</style>

<script>
import Header from "@/components/Header.vue";
import users from "@/components/User.vue";
import Footer from "@/components/footer.vue";
export default {
  name: "app",
  components: {
    users,
    "app-header": Header,
    "app-footer": Footer,
  },
  data() {
    return {
      // title: "hello. hanmaweilai!",
      users2: [
        { name: "zhangsan", position: "web开发", show: false },
        { name: "zhangsan", position: "web开发", show: false },
        { name: "zhangsan", position: "web开发", show: false },
        { name: "zhangsan", position: "web开发", show: false },
        { name: "zhangsan", position: "web开发", show: false },
        { name: "zhangsan", position: "web开发", show: false },
        { name: "zhangsan", position: "web开发", show: false },
        { name: "zhangsan", position: "web开发", show: false },
        { name: "zhangsan", position: "web开发", show: false },
      ],
      name: "this is users hahaha",
    };
  },
  methods: {
    clickParent() {
      this.$refs.users4.handleParentClick("父组件调用子组件方法");
    },
    updateName: function (e) {
      this.name = e;
    },
  },
};
</script>
