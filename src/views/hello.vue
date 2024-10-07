<!-- HomeView.vue -->
<template>
    <div>
      
      <Moreinfo />
      <seereviews/>
      <itemdetail/>
    </div>
  </template>
  
  <script setup>
  import Moreinfo from '../components/Moreinfo.vue'; // Importing the modal component
  import seereviews from '../components/SeeReviews.vue'
  import itemdetail from '../components/itemdetail.vue'
  </script>
  
  <style scoped>
  /* Add any additional styles here for the view */
  </style>
  