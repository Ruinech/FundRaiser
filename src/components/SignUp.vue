<script setup>
    import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  password: ''
});

const submitForm = () => {
  console.log('Form submitted:', form.value);
  // You can handle form submission here (e.g., API call, validation)
};

</script>


<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-1/3">
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
    </div>
  </div>
</template>

<style scoped>
/* You can add your styles here */
</style>

    