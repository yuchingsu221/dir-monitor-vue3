<template>
  <div>
    <h1>Create New Configuration</h1>
    <form @submit.prevent="createConfig">
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
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
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
  methods: {
    createConfig() {
      axios.post('http://localhost:5000/api/DirConfigs', this.form)
        .then(() => {
          this.$router.push('/');
        })
        .catch(error => {
          console.error("Error creating configuration: ", error);
        });
    }
  }
};
</script>