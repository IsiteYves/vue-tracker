<template>
  <footer>
    All Rights &copy; {{ new Date().getFullYear() }} <br /><a href="/q-n-a"
      >Q & A</a
    >
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
a {
  color: #333;
}
footer {
  margin-top: 30px;
  text-align: center;
}
</style>