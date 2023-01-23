<template>
  <button class="btn" :style="{ background: color }" @click="toggleShowAdd()">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
    toggleShowAdd: Function,
  },
};
</script>
