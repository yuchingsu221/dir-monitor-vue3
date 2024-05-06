<template>
  <div>
    <h1>Directory Configurations</h1>
    <ul v-if="dirConfigs.length > 0">
      <li v-for="config in dirConfigs" :key="config.id">
        {{ config.name }} at {{ config.path }}
        <button @click="deleteConfig(config.id)">Delete</button>
        <button @click="editConfig(config.id)">Edit</button>
      </li>
    </ul>
    <p v-else>No configurations found.</p>
    <button @click="fetchDirConfigs">Refresh List</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      dirConfigs: []
    };
  },
  created() {
    this.fetchDirConfigs();
  },
  methods: {
    fetchDirConfigs() {
      axios.get('http://localhost:5000/api/DirConfigs')
        .then(response => {
          this.dirConfigs = response.data;
        })
        .catch(error => {
          console.error("There was an error fetching the directory configurations: ", error);
        });
    },
    deleteConfig(id) {
      axios.delete(`http://localhost:5000/api/DirConfigs/${id}`)
        .then(() => {
          this.fetchDirConfigs();  // Refresh the list after deleting
        })
        .catch(error => {
          console.error("Error deleting configuration: ", error);
        });
    },
    editConfig(id) {
      // Redirect to the edit component or manage edit in a modal/dialog
      this.$router.push({ name: 'edit-config', params: { id } });
    }
  }
};
</script>