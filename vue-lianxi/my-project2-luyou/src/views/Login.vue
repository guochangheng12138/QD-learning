<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      title: "this is login page!",
    };
  },
  mounted() {
    console.log(this.$route.params.userId);
  },
};
</script>

<style></style>