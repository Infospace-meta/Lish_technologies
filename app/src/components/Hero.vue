<template>
  <div class="bg-blue-950 p-8 text-white">
    <!-- Hero Section -->
    <div class="text-center animate-fadeIn">
      <h1 class="text-4xl md:text-7xl font-bold">
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-700"
        >
          YOUR BEST
        </span>
        <br class="hidden md:inline" />
        <span class="italic font-normal">IT</span> PARTNERS
      </h1>
      <p class="text-lg mt-4">
        From custom software development to cybersecurity, our team of experts
        is dedicated to delivering solutions that are tailored to your unique
        needs.
      </p>
      <router-link to="/aboutus" class="inline-block mt-6">
        <button
          class="border border-white bg-transparent text-white font-bold py-2 px-6 rounded-full flex items-center transition-colors duration-300 hover:bg-white hover:text-blue-950 animate-bounce"
        >
          EXPLORE NOW
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a.75.75 0 01.75.75V9h4.19a.75.75 0 010 1.5H10v5.25a.75.75 0 01-1.5 0V10H3.75a.75.75 0 010-1.5H9V3.75A.75.75 0 0110 3zm-7.25 13.25a.75.75 0 111.5 0V17h4.25a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM15.25 3.75a.75.75 0 10-1.5 0V7h-4.25a.75.75 0 100 1.5H14v4.25a.75.75 0 001.5 0V8.5h4.25a.75.75 0 000-1.5H15.25V3.75z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </router-link>
    </div>

    <!-- Why Choose Us Section -->
    <div class="mt-16 text-center animate-fadeIn delay-200">
      <h2 class="text-4xl md:text-7xl font-bold mb-8">Why Choose Us?</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Expertise -->
        <div
          class="flex flex-col items-center justify-center transition hover:scale-105"
        >
          <img src="@/assets/4.png" alt="Expertise" class="w-24 h-24 mb-4" />
          <h3 class="text-xl md:text-2xl font-semibold mb-2">Expertise</h3>
          <p class="text-sm md:text-base text-center">
            Our team of experienced experts have the knowledge and expertise to
            deliver innovative IT solutions that meet your unique needs.
          </p>
        </div>
        <!-- Technology -->
        <div
          class="flex flex-col items-center justify-center transition hover:scale-105"
        >
          <img src="@/assets/3.png" alt="Technology" class="w-24 h-24 mb-4" />
          <h3 class="text-xl md:text-2xl font-semibold mb-2">Technology</h3>
          <p class="text-sm md:text-base text-center">
            We stay up-to-date with the latest trends and technologies in the IT
            industry, so you can get the most advanced solutions available.
          </p>
        </div>
        <!-- Solutions -->
        <div
          class="flex flex-col items-center justify-center transition hover:scale-105"
        >
          <img src="@/assets/2.png" alt="Solutions" class="w-24 h-24 mb-4" />
          <h3 class="text-xl md:text-2xl font-semibold mb-2">Solutions</h3>
          <p class="text-sm md:text-base text-center">
            We take a personalized approach to every project, working closely
            with you to understand your business and create solutions.
          </p>
        </div>
        <!-- Results -->
        <div
          class="flex flex-col items-center justify-center transition hover:scale-105"
        >
          <img src="@/assets/1.png" alt="Results" class="w-24 h-24 mb-4" />
          <h3 class="text-xl md:text-2xl font-semibold mb-2">Results</h3>
          <p class="text-sm md:text-base text-center">
            Our track record speaks for itself - we've helped businesses of all
            sizes and industries achieve their goals with our IT solutions.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease forwards;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}
</style>
