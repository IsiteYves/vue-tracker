<template>
  <div class="tasks" :key="task.id" v-for="task of tasks">
    <Task
      :info="task"
      @toggle-reminder="$emit('toggle-reminder', task.id)"
      @delete-item="$emit('delete-item', task.id)"
    />
  </div>
</template>

<script>
import Task from "./Task";
export default {
  name: "Tasks",
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
  emits: ["delete-item", "toggle-reminder"],
};
</script>