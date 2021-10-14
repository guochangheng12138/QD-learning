<template>
  <div id="single-blog">
    <h1 v-rainbow>{{ blog.title }}</h1>
    <h1>{{ blog.body }}</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "single-blog",
  data() {
    return {
      blog: {},
      id: this.$route.params.id,
    };
  },
  created() {
    axios
      .get("http://jsonplaceholder.typicode.com/posts/" + this.id)
      .then((data) => {
        console.log(data);
        this.blog = data.data;
      });
  },
};
</script>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px dotted #aaa;
}
</style>