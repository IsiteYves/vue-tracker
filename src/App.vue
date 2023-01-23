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
  </div>
</template>

<script>
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Add from "./components/Add";

export default {
  name: "App",
  components: {
    Header,
    Tasks,
    Add,
  },
  data() {
    return {
      tasks: [],
      showAddForm: false,
    };
  },
  methods: {
    addTask(task) {
      this.tasks = [...this.tasks, task];
    },
    toggleShowAdd() {
      this.showAddForm = !this.showAddForm;
    },
    handleDelete(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
  },
  created() {
    this.tasks = [
      // {
      //   id: 1,
      //   text: "Buy groceries",
      //   day: "March 1st at 3:15pm",
      //   reminder: true,
      // },
      // {
      //   id: 2,
      //   text: "Meet with John",
      //   day: "March 2nd at 10:00am",
      //   reminder: true,
      // },
      // {
      //   id: 3,
      //   text: "Complete project report",
      //   day: "March 3rd at 5:00pm",
      //   reminder: false,
      // },
      // {
      //   id: 4,
      //   text: "Pay rent",
      //   day: "March 4th at 12:00pm",
      //   reminder: true,
      // },
    ];
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
