<template>
  <div id="app">
    <LoginHeader />
  
  </div>
</template>

<script>
import LoginHeader from './components/LoginHeader.vue';
import BeforeLoginHeader from './components/BeforeLoginHeader.vue';

export default {
  name: 'App',
  components: {
    LoginHeader,
    BeforeLoginHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>