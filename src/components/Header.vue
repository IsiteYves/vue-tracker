<template>
  <header>
    <h2>{{ heading }}</h2>
    <Button
      v-show="isHomePage"
      :color="showAddForm ? 'orangered' : 'green'"
      :toggleShowAdd="toggleShowAdd"
      :text="showAddForm ? 'Close' : '+ Add'"
    />
  </header>
</template>

<script>
import Button from "./Button";
export default {
  name: "Header",
  props: {
    heading: String,
    showAddForm: Function,
    toggleShowAdd: Function,
  },
  components: {
    Button,
  },
  computed: {
    isHomePage() {
      return this.$route.path === "/";
    },
  },
};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
