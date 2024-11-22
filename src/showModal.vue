<template>
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white p-8 rounded-lg w-1/3">
        <h2 class="text-2xl font-bold text-blue-600 mb-4">Sign Up</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input v-model="form.name" type="text" id="name" class="w-full p-2 border border-gray-300 rounded mt-1" required />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input v-model="form.email" type="email" id="email" class="w-full p-2 border border-gray-300 rounded mt-1" required />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input v-model="form.password" type="password" id="password" class="w-full p-2 border border-gray-300 rounded mt-1" required />
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Sign Up
          </button>
        </form>
        <button @click="closeModal" class="mt-4 w-full text-gray-600 border-t pt-2 text-center hover:text-gray-800">Cancel</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    showModal: {
      type: Boolean,
      required: true
    }
  });
  
  const emit = defineEmits(['update:showModal']);
  
  const form = ref({
    name: '',
    email: '',
    password: ''
  });
  
  const closeModal = () => {
    emit('update:showModal', false);
  };
  
  const submitForm = () => {
    console.log('Form submitted:', form.value);
    // Reset the form after submission (optional)
    form.value.name = '';
    form.value.email = '';
    form.value.password = '';
    closeModal(); // Close modal
  };
  </script>
  
  <style scoped>
  /* Optional: Style for the modal background */
  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  </style>
  