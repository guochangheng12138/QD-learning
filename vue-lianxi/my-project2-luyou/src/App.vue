<template>
  <div id="app">
    <router-link to="/Home">Home</router-link> |
    <router-link to="/About">About</router-link>
    <router-link to="/Login">Login</router-link>

    <router-link :to="'/Home'">Home2</router-link> |
    <router-link :to="{ path: 'About', query: { plan: 'private' } }"
      >About2</router-link
    >
    <router-link :to="{ name: 'Login', params: { userId: 100 } }"
      >Login2</router-link
    >

    <button @click="toUrl">跳转页面</button>
  </div>
  <router-view />
</template>

<script>
import router from "@/router/index.js";
export default {
  methods: {
    toUrl: () => {
      router.push({ path: "Home" });
    },
  },
};
</script>


