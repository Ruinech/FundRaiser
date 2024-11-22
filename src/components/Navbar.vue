<script setup>
  // Composition API Setup
import { ref } from 'vue';

// Reactive variable for mobile menu toggle
const mobileMenuOpen = ref(false);

// Toggle the mobile menu visibility
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

// Scroll to section for anchor links (smooth scrolling)
const scrollToSection = (section) => {
  document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
};
</script>


<template>
  <div class="font-sans text-gray-900 bg-gray-50">
    <!-- Navbar -->
    <nav class="bg-blue-600 sticky top-0 z-50 shadow-lg">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <!-- FundRaiser Logo with Icon -->
        <div class="flex items-center text-white text-2xl font-semibold space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13h2v5h-2zm0 7h2v2h-2z"/>
          </svg>
          <span>FundRaiser</span>
        </div>
        
        <!--Desktop Navbar Links -->
        <div class="hidden md:flex space-x-8">
          <a href="#home" class="text-white hover:text-gray-200 transition">Home</a>
          <a href="#features" class="text-white hover:text-gray-200 transition">Features</a>
          <a href="#testimonials" class="text-white hover:text-gray-200 transition">Testimonials</a>
          <a href="#contact" class="text-white hover:text-gray-200 transition">Contact</a>
        </div>

        <!-- Sign Up Button -->
        <div class="hidden md:flex items-center">
          <router-link to="/signup">
            <button class="bg-blue-800 text-white py-2 px-6 rounded-lg border-2 border-transparent hover:bg-blue-700 hover:shadow-lg transition duration-300">
              Sign Up
            </button>
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="toggleMobileMenu" class="md:hidden text-white p-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-blue-600 text-white px-6 py-4">
      <div class="flex flex-col space-y-4">
        <a href="#home" @click="scrollToSection('home')" class="text-white hover:text-gray-200">Home</a>
        <a href="#features" @click="scrollToSection('features')" class="text-white hover:text-gray-200">Features</a>
        <a href="#testimonials" @click="scrollToSection('testimonials')" class="text-white hover:text-gray-200">Testimonials</a>
        <a href="#contact" @click="scrollToSection('contact')" class="text-white hover:text-gray-200">Contact</a>
        <router-link to="/SignUp">
          <button class="bg-blue-800 text-white py-2 px-6 rounded-lg border-2 border-transparent hover:bg-blue-700 hover:shadow-lg transition duration-300">
            Sign Up
          </button>
        </router-link>
      </div>
    </div>
</div>
</template>
   
  <style scoped>
  /* Custom Styles for Scroll Effect */
nav {
  transition: background-color 0.3s ease-in-out;
}
nav.scroll-nav {
  background-color: rgba(29, 78, 216, 0.8);
}

/* Tailwind Animation: Fade In */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.motion-safe\:animate-fadeIn {
  animation: fadeIn 1s ease-out;
}  
  </style>
  
























<!-- <script setup>
import { ref } from 'vue';



// Reactive variable for mobile menu toggle
const mobileMenuOpen = ref(false);

// Toggle the mobile menu visibility
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

// Scroll to section for anchor links (smooth scrolling)
const scrollToSection = (section) => {
  document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
};
</script>




<template>
  <div class="font-sans text-gray-900 bg-gray-50">
     Navbar
    <nav class="bg-blue-600 sticky top-0 z-50 shadow-lg">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"> -->
        <!-- FundRaiser Logo with Icon 
        <div class="flex items-center text-white text-2xl font-semibold space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm-1-13h2v5h-2zm0 7h2v2h-2z"/>
          </svg>
          <span>FundRaiser</span>
        </div> -->
        
        <!--Desktop Navbar Links 
        <div class="hidden md:flex space-x-8">
          <a href="#home" class="text-white hover:text-gray-200 transition">Home</a>
          <a href="#features" class="text-white hover:text-gray-200 transition">Features</a>
          <a href="#testimonials" class="text-white hover:text-gray-200 transition">Testimonials</a>
          <a href="#contact" class="text-white hover:text-gray-200 transition">Contact</a>
        </div> -->

        <!-- Sign Up Button 
        <div class="hidden md:flex items-center">
          <router-link to="/signup">
            <button class="bg-blue-800 text-white py-2 px-6 rounded-lg border-2 border-transparent hover:bg-blue-700 hover:shadow-lg transition duration-300">
              Sign Up
            </button>
          </router-link>
        </div> -->

        <!-- Mobile Menu Button
        <button @click="toggleMobileMenu" class="md:hidden text-white p-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </nav> -->

    <!-- Mobile Menu 
    <div v-if="mobileMenuOpen" class="md:hidden bg-blue-600 text-white px-6 py-4">
      <div class="flex flex-col space-y-4">
        <a href="#home" @click="scrollToSection('home')" class="text-white hover:text-gray-200">Home</a>
        <a href="#features" @click="scrollToSection('features')" class="text-white hover:text-gray-200">Features</a>
        <a href="#testimonials" @click="scrollToSection('testimonials')" class="text-white hover:text-gray-200">Testimonials</a>
        <a href="#contact" @click="scrollToSection('contact')" class="text-white hover:text-gray-200">Contact</a>
        <router-link to="/signup">
          <button class="bg-blue-800 text-white py-2 px-6 rounded-lg border-2 border-transparent hover:bg-blue-700 hover:shadow-lg transition duration-300">
            Sign Up
          </button>
        </router-link>
      </div>
    </div>
</div>
</template>
   
  <style scoped>
  /* Custom Styles for Scroll Effect */
nav {
  transition: background-color 0.3s ease-in-out;
}
nav.scroll-nav {
  background-color: rgba(29, 78, 216, 0.8);
}

/* Tailwind Animation: Fade In */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.motion-safe\:animate-fadeIn {
  animation: fadeIn 1s ease-out;
}  
  </style>
   -->