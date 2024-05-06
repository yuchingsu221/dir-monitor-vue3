<template>
  <div>
    <h1>Edit Configuration</h1>
    <form @submit.prevent="updateConfig">
      <div>
        <label for="path">Path:</label>
        <input id="path" v-model="form.path" required>
      </div>
      <div>
        <label for="extensions">Extensions:</label>
        <input id="extensions" v-model="form.extensions" required>
      </div>
      <div>
        <label for="skipScan">Skip Scan:</label>
        <input id="skipScan" v-model="form.skipScan" required>
      </div>
      <div>
        <label for="name">Name:</label>
        <input id="name" v-model="form.name" required>
      </div>
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      form: {
        path: '',
        extensions: '',
        skipScan: '',
        name: ''
      }
    };
  },
  created() {
    this.loadConfig();
  },
  methods: {
    loadConfig() {
      axios.get(`http://localhost:5000/api/DirConfigs/${this.id}`)
        .then(response => {
          this.form = response.data;
        })
        .catch(error => {
          console.error("Error loading configuration: ", error);
        });
    },
    updateConfig() {
      axios.put(`http://localhost:5000/api/DirConfigs/${this.id}`, this.form)
        .then(() => {
          this.$router.push('/');
        })
        .catch(error => {
          console.error("Error updating configuration: ", error);
        });
    }
  }
};
</script>