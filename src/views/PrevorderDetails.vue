<template>
    <div>
      <h1>Order Details for Order ID: {{ id }}</h1>
      <!-- Use the 'id' to display more order details here -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      }
    },
  };
  </script>  