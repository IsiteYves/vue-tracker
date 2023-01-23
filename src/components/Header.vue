<template>
  <header>
    <h2>{{ heading }}</h2>
    <Button color="green" text="+ Add" />
  </header>
</template>

<script>
import Button from "./Button";
export default {
  name: "Header",
  props: {
    heading: String,
  },
  components: {
    Button,
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
