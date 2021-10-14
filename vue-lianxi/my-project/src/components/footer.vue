<template>
  <footer>
    <p>{{ copyright }}</p>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
  data() {
    return {
      copyright: "copyright Hanmaweilai",
    };
  },
};
</script>

<style scoped="scoped">
footer {
  background: #222;
  padding: 10px;
}
p {
  color: lightgreen;
  text-align: center;
}
</style>