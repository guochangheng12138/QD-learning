<template>
  <div id="add-blog">
    <h2>博客内容</h2>
    <form v-if="!submmited">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" />
      <label>博客内容</label>
      <textarea v-model="blog.content"></textarea>

      <div id="checkboxs">
        <label>vue.js</label>
        <input type="checkbox" value="vue.js" v-model="blog.categories" />
        <label>react.js</label>
        <input type="checkbox" value="react.js" v-model="blog.categories" />
        <label>vue.js</label>
        <input type="checkbox" value="node.js" v-model="blog.categories" />
      </div>

      <label>作者：</label>
      <select v-model="blog.author">
        <option v-for="(author, index) in authors" :key="index">
          {{ author }}
        </option>
      </select>

      <button v-on:click.prevent="post">添加博客</button>
    </form>
    <div v-if="submmited">
      <h3>添加博客成功</h3>
    </div>

    <div id="perview">
      <h3>博客总览</h3>
      <p>博客标题：{{ blog.title }}</p>
      <h3>博客内容</h3>
      <p>{{ blog.content }}</p>
      <ul>
        <li v-for="(categorie, index) in blog.categories" :key="index">
          {{ categorie }}
        </li>
      </ul>
      <p>作者：{{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "add-blog",
  data() {
    return {
      blog: {
        title: "",
        content: "",

        categories: [],
        author: "",
        submmited: false,
      },
      authors: ["Henry", "Lucy", "Eric"],
    };
  },
  methods: {
    post: function () {
      axios
        .post("http://jsonplaceholder.typicode.com/posts", {
          title: this.blog.title,
          body: this.blog.content,
          userld: 1,
        })
        .then((data) => {
          console.log(data);
          this.submmited = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
textarea {
  height: 200px;
}
#checkboxs label {
  display: inline-block;
  margin-top: 0;
}
#checkboxs input {
  display: inline-block;
  margin-right: 10px;
}
button {
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
</style>