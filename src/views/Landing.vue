<template>
  <Add
    @add-task="addTask"
    :showAddForm="showAddForm"
    :toggleShowAdd="toggleShowAdd"
  />
  <Tasks
    :tasks="tasks"
    @delete-item="handleDelete"
    @toggle-reminder="toggleReminder"
  />
  <p
    v-show="tasks.length === 0"
    :style="{ color: 'orangered', textAlign: 'center' }"
  >
    No records yet
  </p>
</template>

<script>
import Add from "../components/Add";
import Tasks from "../components/Tasks";

export default {
  name: "Landing",
  props: {
    showAddForm: Boolean,
    toggleShowAdd: Function,
  },
  components: {
    Add,
    Tasks,
  },
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    this.fetchRecords();
  },
  methods: {
    async addTask(task) {
      const res = await fetch("tasks", {
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
        method: "POST",
      });
      if (res.status !== 201) {
        alert("Error creating a new item");
        return;
      }
      const data = await res.json();
      this.tasks = [...this.tasks, data];
    },
    async handleDelete(id) {
      if (confirm("Sure you want to delete this record?")) {
        const res = await fetch(`tasks/${id}`, {
          method: "DELETE",
        });
        if (res.status !== 200) {
          alert("Error deleting record");
          return;
        }
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    },
    async toggleReminder(id) {
      const data = await this.fetchItem(id);
      const res = await fetch(`tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, reminder: !data.reminder }),
      });
      if (res.status !== 200) {
        alert("Error updating record");
        return;
      }
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
    async fetchRecords() {
      const res = await fetch("tasks");
      if (res.status !== 200) {
        alert("Error while fetching records");
        return;
      }
      const data = await res.json();
      this.tasks = data;
    },
    async fetchItem(id) {
      const res = await fetch(`tasks/${id}`);
      if (res.status !== 200) {
        alert("Error while fetching record");
        return;
      }
      const data = await res.json();
      return data;
    },
  },
};
</script>