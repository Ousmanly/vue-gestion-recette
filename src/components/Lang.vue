<template>
    <select class="form-select" aria-label="Default select example" @change="changeLanguage($event)">
      <option value="en">EN</option>
      <option value="fr">FR</option>
    </select>
  </template>
  
  <script setup>
  import { getCurrentInstance } from 'vue';
  const { proxy } = getCurrentInstance();
  
  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    proxy.$i18n.locale = selectedLanguage;
  };
  </script>
  
  <style scoped>
  .form-select {
    width: 80px; 
    color: rgb(8, 14, 26);
    padding: 5px; 
  }
  </style>
  