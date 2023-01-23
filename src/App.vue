<template>
  <div class="container">
    <Header
      heading="Tasker"
      :showAddForm="showAddForm"
      :toggleShowAdd="toggleShowAdd"
    />
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
    <Footer />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Add from "./components/Add";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Tasks,
    Add,
    Footer,
  },
  data() {
    return {
      tasks: [],
      showAddForm: false,
    };
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
      this.tasks = [...this.tasks, task];
    },
    toggleShowAdd() {
      this.showAddForm = !this.showAddForm;
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
  created() {
    this.tasks = [];
    this.fetchRecords();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
