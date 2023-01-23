<template>
  <div
    :class="[info?.reminder ? 'reminder' : '', 'task']"
    @dblclick="$emit('toggle-reminder', info?.id)"
  >
    <h4>
      {{ info.text }}
      <i @click="$emit('delete-item', info?.id)" class="fas fa-times"></i>
    </h4>
    <p>{{ info.day }}</p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    info: Object,
  },
};
</script>

<style scope>
.fas {
  color: red;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  user-select: none;
}
.reminder {
  border-left: 5px solid green;
}
.task h4 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>