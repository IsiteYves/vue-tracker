<template>
  <header>
    <h2>{{ heading }}</h2>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    heading: String,
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
