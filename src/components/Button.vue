<template>
  <button class="btn" :style="{ background: color }" @click="onAdd()">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
  methods: {
    onAdd() {},
  },
};
</script>
