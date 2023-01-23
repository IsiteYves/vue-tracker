<template>
  <footer>
    All Rights &copy; {{ new Date().getFullYear() }} <br />
    <router-link v-show="isHomePage" to="/q-n-a">Q & A</router-link>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    isHomePage() {
      return this.$route.path === "/";
    },
  },
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