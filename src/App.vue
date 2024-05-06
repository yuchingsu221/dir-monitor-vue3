<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <DirConfigList />
  <CreateConfig />
  <EditConfig />
</template>

<script>
import DirConfigList from './components/DirConfigList.vue'
import CreateConfig from './components/CreateConfig.vue'
import EditConfig from './components/EditConfig.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    DirConfigList,
    CreateConfig,
    EditConfig
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
