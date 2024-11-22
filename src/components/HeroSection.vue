<script setup>
  import { ref } from 'vue';
  import ShowModal from '@/showModal.vue'; // Import the modal component

const showModal = ref(false); // Control modal visibility
</script>



<template>
  <section id="home" class="bg-blue-600 text-white py-20 text-center">
    <h1 class="text-5xl font-bold">Welcome to FundRaiser</h1>
    <p class="mt-4 text-lg max-w-xl mx-auto">
      Empower your fundraising campaigns with our platform designed for success.
    </p>
    <button @click="showModal = true" class="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-200 transition">
        Get Started
      </button>

      <!-- ShowModal component -->
    <ShowModal :showModal="showModal" @update:showModal="showModal = $event" />

  </section>
</template>



