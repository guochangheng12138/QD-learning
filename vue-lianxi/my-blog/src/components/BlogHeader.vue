<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">博客内容</router-link>
        <router-link to="/AddBlog">书写博客</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "blog-header",
};
</script>