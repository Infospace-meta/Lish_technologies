<template>
  <div
    class="flex flex-col justify-center items-center md:flex-row gap-4 md:gap-24"
  >
    <div class="image-container relative transition hover:scale-125">
      <img class="mt-8 md:mt-0" src="../assets/Tech.avif" />
      <div
        class="text-overlay absolute left-0 top-0 mt-8 text-white font-semibold text-lg md:text- xl text-center md:text-left lg:p-4"
      >
        Untitled UI is the real deal. We've worked with a dozen agencies and
        most of them don't truly understand programmatic SEO. Working with
        experienced and knowledgeable professionals at the helm is a breath of
        fresh air. <br /><br />
        <span class="font-normal text-sm md:text-md">- Ellie Simpsom</span>
      </div>
    </div>

    <div class="md:w-1/2">
      <div class="font-bold text-blue-950 mt-8 text-center md:text-left">
        <span class="text-2xl md:text-4xl"
          >Talk to our experts and get ranked fast</span
        ><br /><br />
        <span class="text-md md:text-xl font-normal"
          >Need help with your SEO or content? We've helped 200+ businesses
          improve their organic traffic.</span
        >
      </div>
      <br /><br />
      <div class="flex flex-col md:flex-row gap-4">
        <div class="mb-3">
          <label
            for="first_name"
            class="block text-sm font-semibold text-gray-700"
            >First Name</label
          >
          <input
            type="text"
            id="first_name"
            name="first_name"
            class="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none w-full md:w-44 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="First name"
          />
        </div>
        <div class="mb-4">
          <label for="last_name" class="block text-sm font-medium text-gray-700"
            >Last Name</label
          >
          <input
            type="text"
            id="last_name"
            name="last_name"
            class="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none w-full md:w-48 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Last name"
          />
        </div>
      </div>
      <div class="mb-3">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          type="email"
          id="email"
          name="email"
          class="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none w-full md:w-96 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="johnDoe@.com"
        />
      </div>
      <div class="mb-4">
        <label for="message" class="block text-sm font-medium text-gray-700"
          >Message</label
        >
        <textarea
          id="message"
          name="message"
          rows="4"
          class="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full md:w-96 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Leave us a message..."
        ></textarea>
      </div>
      <div class="text-blue-950 font-semibold">Services</div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
        <div class="flex items-center">
          <input
            type="radio"
            id="service1"
            name="service"
            class="h-4 w-4 mr-2"
          />
          <label
            for="service1"
            class="text-sm md:text-md font-medium text-blue-950"
            >Website Design</label
          >
        </div>
        <div class="flex items-center">
          <input
            type="radio"
            id="service2"
            name="service"
            class="h-4 w-4 mr-2"
          />
          <label
            for="service2"
            class="text-sm md:text-md font-medium text-blue-950"
            >UX Design</label
          >
        </div>
        <div class="flex items-center">
          <input
            type="radio"
            id="service3"
            name="service"
            class="h-4 w-4 mr-2"
          />
          <label
            for="service3"
            class="text-sm md:text-md font-medium text-blue-950"
            >User Research</label
          >
        </div>
        <div class="flex items-center">
          <input
            type="radio"
            id="service4"
            name="service"
            class="h-4 w-4 mr-2"
          />
          <label
            for="service4"
            class="text-sm md:text-md font-medium text-blue-950"
            >Content Creation</label
          >
        </div>
        <div class="flex items-center">
          <input
            type="radio"
            id="service5"
            name="service"
            class="h-4 w-4 mr-2"
          />
          <label
            for="service5"
            class="text-sm md:text-md font-medium text-blue-950"
            >Strategy & Consulting</label
          >
        </div>
        <div class="flex items-center">
          <input
            type="radio"
            id="service6"
            name="service"
            class="h-4 w-4 mr-2"
          />
          <label
            for="service6"
            class="text-sm md:text-md font-medium text-blue-950"
            >Other</label
          >
        </div>
      </div>
      <div class="text-center mb-12">
        <button
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 rounded-md h-12 text-center items-center"
        >
          GET STARTED
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
/* Additional styling can be added here */
</style>
