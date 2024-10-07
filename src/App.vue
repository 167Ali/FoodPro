<template>
  <div id="app">
    <LoginHeader />
    <PageFooter />
  </div>
</template>

<script>
import LoginHeader from './components/LoginHeader.vue';
import BeforeLoginHeader from './components/BeforeLoginHeader.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  name: 'App',
  components: {
    LoginHeader,
    BeforeLoginHeader,
    PageFooter,
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