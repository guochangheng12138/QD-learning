<template>
  <div id="app">
    <!-- <add-blog></add-blog> -->
    <!-- <show-blogs></show-blogs> -->
    <blog-header></blog-header>
  </div>
  <router-view />
</template>

<script>
// import AddBlog from "./components/AddBlog.vue";
// import ShowBlog from "./components/ShowBlog.vue";
import BlogHeader from "./components/BlogHeader.vue";

export default {
  name: "APP",
  components: {
    // "add-blog": AddBlog,
    // "show-blogs": ShowBlog,
    "blog-header": BlogHeader,
  },
};
</script>



<style>
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 12px;
  border-radius: 5px;
}
nav {
  background: crimson;
  padding: 30px 0;
  margin-bottom: 20px;
}
.router-link-active {
  background: rgba(238, 238, 238, 0.8);
  color: #444;
}
</style>
