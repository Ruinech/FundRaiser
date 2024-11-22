<script setup>
// No logic needed yet
</script>




<template>
    <section id="testimonials" class="py-20 bg-white">
      <h2 class="text-3xl font-bold text-center">What Our Users Say</h2>
      <div class="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 max-w-6xl mx-auto">
        <div class="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition">
          <p class="italic text-gray-700">
            "This product has transformed my business. It's easy to use, reliable, and has made my team more productive."
          </p>
          <h3 class="mt-4 font-bold text-blue-600">John Doe</h3>
          <p class="text-gray-500">CEO, Example Corp.</p>
        </div>
        <div class="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition">
          <p class="italic text-gray-700">
            "I can't imagine running my business without this solution. It's been a game-changer for us!"
          </p>
          <h3 class="mt-4 font-bold text-blue-600">Jane Smith</h3>
          <p class="text-gray-500">Founder, Startup X</p>
        </div>
      </div>
    </section>
</template>
  

  
  <style scoped>
  @media (max-width: 640px) {
    .testimonial p {
      font-size: 0.875rem;
    }
  }
  </style>
  