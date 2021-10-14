<template>
  <div class="users">
    <h1>this is users</h1>
    <h2 @click="changeName">{{ name1 }}</h2>
    <button @click="deleteUsers">删除</button>
    <ul>
      <li v-for="user in users3" :key="user" @click="user.show = !user.show">
        <h2>{{ user.name }}</h2>
        <!-- {{ user }} -->
        <h3 v-show="user.show">{{ user.position }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "users",
  // props: ["users3"],
  props: { users3: { type: Array, requierd: true }, name1: { type: String } },
  data() {
    return {
      // users: ["zhangsan", "lisi", "wangwu"],
      // users: [
      //   { name: "zhangsan", position: "web开发", show: false },
      //   { name: "zhangsan", position: "web开发", show: false },
      //   { name: "zhangsan", position: "web开发", show: false },
      //   { name: "zhangsan", position: "web开发", show: false },
      //   { name: "zhangsan", position: "web开发", show: false },
      //   { name: "zhangsan", position: "web开发", show: false },
      //   { name: "zhangsan", position: "web开发", show: false },
      //   { name: "zhangsan", position: "web开发", show: false },
      //   { name: "zhangsan", position: "web开发", show: false },
      // ],
    };
  },
  methods: {
    deleteUsers: function () {
      this.$parent.users2.pop();
      console.log(this);
    },
    handleParentClick(options) {
      console.log(options);
    },
    changeName: function () {
      console.log("请求父组件方法");
      this.$emit("changeNamed", "子向父传递数据");
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  /* color: #42b983; */
  color: blue;
}
.users {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 200px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
}
</style>

