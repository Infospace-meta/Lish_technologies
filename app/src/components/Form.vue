<template>
  <div class="flex flex-row gap-24 justify-center">
    <div class="image-container relative">
      <img src="@/assets/c6.avif" />
      <div
        class="text-overlay absolute left-0 top-0 p-4 mt-56 text-white font-semibold text-2xl"
      >
        Untitled UI is the real deal .We've <br />
        worked with a dozens agencies and <br />
        most of them don't truly understand <br />
        programmatic SEO. Working with <br />
        experienced and knowledgeable <br />
        professionals at the helm is a breath <br />
        of fresh air. <br /><br /><span class="font-normal text-md"
          >-Ellie Simpsom</span
        >
      </div>
    </div>

    <div>
      <div class="font-bold text-blue-950 mt-8">
        <span class="text-4xl"
          >Talk to our experts <br />and get ranked fast</span
        >
        <br /><br /><span class="text-xl font-normal"
          >Need help your SEO or content? We've helped <br />200+ business
          improve their organic traffic.</span
        >
      </div>
      <br /><br />
      <div class="flex flex-row gap-5">
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
            class="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none w-44 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
            class="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none w-48 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Last name"
          />
        </div>
      </div>
      <div class="mb-3">
        <label for="first_name" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          type="text"
          id="first_name"
          name="first_name"
          class="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none w-96 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="you@company.com"
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
          class="mt-1 px-4 py-2 border border-gray-300 rounded-md w-96 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Leave us a message..."
        ></textarea>
      </div>
      <div class="text-blue-950 font-semibold">Services</div>

      <div class="grid grid-cols-3 gap-4 mb-7">
        <div class="flex items-center">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-1"
            class="ms-2 text-sm font-medium text-blue-950 dark:text-blue-950"
            >Website Design</label
          >
        </div>
        <div class="flex items-center">
          <input
            checked
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-2"
            class="ms-2 text-sm font-medium text-blue-950 dark:text-blue-950"
            >UX Design</label
          >
        </div>
        <div class="flex items-center">
          <input
            checked
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-2"
            class="ms-2 text-sm font-medium text-blue-950 dark:text-blue-950"
            >User Research</label
          >
          </div>

          <div class="flex items-center">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-1"
              class="ms-2 text-sm font-medium text-blue-950 dark:text-blue-950"
              >Content Creation</label
            >
          </div>
          <div class="flex items-center">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-2"
              class="ms-2 text-sm font-medium text-blue-950 dark:text-blue-950"
              >Strategy & Consulting</label
            >
          </div>
          <div class="flex items-center">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-2"
              class="ms-2 text-sm font-medium text-blue-950 dark:text-blue-950"
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

<style lang="scss" scoped></style>
