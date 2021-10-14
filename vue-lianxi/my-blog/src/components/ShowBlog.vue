<template>
  <div id="show-blogs" v-them:cloumn="'width'">
    <h1>博客总览</h1>
    <div class="">
      <input type="text" placeholder="请输入搜索内容" v-model="search" />
      <button type="button" @click="Search">搜索</button>
    </div>
  </div>
  <div v-for="blog in blogs" :key="blog" class="single-blog">
    <router-link :to="{ name: 'SingleBlog', params: { id: blog.id } }">
      <h2 v-rainbow>{{ blog.title }}</h2>
    </router-link>

    <article>{{ blog.body }}</article>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "show_blog",
  data() {
    return {
      blogs: [],
      search: "",
      blogData: [],
    };
  },
  created() {
    axios.get("http://jsonplaceholder.typicode.com/posts").then((data2) => {
      console.log(data2);
      this.blogs = data2.data.slice(0, 10);
      console.log(this.blogs);

      this.blogData = data2.data;
    });
  },
  methods: {
    Search() {
      var search = this.search;
      console.log(search);
      this.blogs = this.blogData
        .filter((item) => {
          console.log(item);
          if (item.title.indexOf(search) != -1) {
            return item;
          }
        })
        .slice(0, 10);
    },
  },
  // 局部自定义无需实例化
  // directives: {
  //   rainbow: {
  //     mounted(el) {
  //       el.style.color = "#" + Math.random().toString(16).slice(2, 8);
  //     },
  //   },
  // },
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}

.search-box {
  width: 210px;
  height: 25px;
  border: 1px solid rgba(238, 238, 238, 0.6);
  background: #ffffff;
}
.search-box input {
  border: none;
  outline: none;
}
.search-box button {
  border: none;
  outline: none;
  background: none;
}
.search-box button img {
  width: 18px;
  height: 18px;
  margin-left: 10px;
  cursor: pointer;
  padding-top: 2.5px;
}
</style>