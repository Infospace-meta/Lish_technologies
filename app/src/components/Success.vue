<template>
  <div class="container mx-auto py-12">
    <h1 class="text-5xl font-bold text-center mb-8">Success Stories</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div
        class="p-6 bg-gradient-to-b from-gray-900 to-gray-700 rounded-lg text-white"
      >
        <button
          class="text-xl font-bold mb-4 block"
          @click="scrollToSection('web-design')"
        >
          LISH TECH SOLUTIONS
        </button>

        <div class="tags mb-4">
          <button
            class="inline-block px-4 py-2 mr-2 font-semibold text-sm text-gray-800 uppercase bg-white rounded-full hover:bg-blue-500"
            @click="scrollToSection('web-design')"
          >
            Web Design
          </button>
          <button
            class="inline-block px-4 py-2 mr-2 font-semibold text-sm text-gray-800 uppercase bg-white rounded-full hover:bg-blue-500"
            @click="scrollToSection('digital-marketing')"
          >
            Digital Marketing
          </button>
        </div>

        <div class="challenge">
          <h2 class="text-xl font-semibold mb-2">Challenge</h2>
          <p>
            Clients approached us with a desire to revamp their outdated website
            and create a more user-friendly and visually appealing platform.
            They sought to improve user engagement and increase online sales.
          </p>
        </div>

        <div class="solution">
          <h2 class="text-xl font-semibold mb-2">Solution</h2>
          <p>
            Our team conducted a thorough analysis of their target audience and
            business objectives. We designed a modern and intuitive website with
            seamless navigation and mobile-responsive layout. Additionally, we
            integrated an efficient checkout process and optimized the site for
            search engines.
          </p>
        </div>
      </div>

      <div
        class="p-6 bg-gradient-to-b from-gray-900 to-gray-700 rounded-lg text-white"
      >
        <button
          class="text-xl font-bold mb-4 block"
          @click="scrollToSection('web-development')"
        >
          FITNESS TRACKER APP
        </button>

        <div class="tags mb-4">
          <button
            class="inline-block px-4 py-2 mr-2 font-semibold text-sm text-gray-800 uppercase bg-white rounded-full hover:bg-blue-500"
            @click="scrollToSection('web-development')"
          >
            Web Development
          </button>
          <button
            class="inline-block px-4 py-2 mr-2 font-semibold text-sm text-gray-800 uppercase bg-white rounded-full hover:bg-blue-500"
            @click="scrollToSection('mobile-app-development')"
          >
            Mobile App
          </button>
        </div>

        <div class="challenge">
          <h2 class="text-xl font-semibold mb-2">Challenge</h2>
          <p>
            Our Clients aimed to create an all-in-one fitness tracking app to
            cater to health enthusiasts and fitness professionals. They wanted a
            seamless user interface, real-time data tracking, and social sharing
            features.
          </p>
        </div>

        <div class="solution">
          <h2 class="text-xl font-semibold mb-2">Solution</h2>
          <p>
            Leveraging our expertise in app development, we built an interactive
            mobile app with user-friendly features. The app allowed users to set
            personalized fitness goals, track their progress, and share
            achievements on social media platforms.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
