<template>
  <div class="bg-blue-950 p-4">
    <div class="text-6xl md:text-9xl text-center text-white font-bold">
      <span class="">YOUR BEST </span><br />
      <span class="italic font-normal">IT</span> PARTNERS
    </div>
    <br />
    <div class="text-white text-center text-lg">
      From custom software development to cybersecurity, our team of experts is
      dedicated <br />
      to delivering solutions that are tailored to your unique needs.
    </div>
    <br /><br />
    <router-link to="/about us" class="mx-auto">
      <button
        class="mx-auto border border-white bg-blue-950 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center"
      >
        EXPLORE NOW
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
          />
        </svg>
      </button>
    </router-link>
    <br /><br /><br />
    <div class="text-white text-4xl md:text-7xl font-bold text-center">
      Why <br />Choose Us?
    </div>
    <br /><br />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row md:gap-52">
      <div class="flex items-center justify-center flex-col mb-8 md:ml-12">
        <img src="@/assets/4.png" class="transition hover:scale-125" />
        <div class="text-white text-center">
          <span class="text-xl md:text-2xl font-semibold">Expertise</span><br />
          Our team of experienced experts<br />
          have the knowledge and expertise<br />
          to deliver innovative IT solutions<br />
          that meet your unique needs.
        </div>
      </div>
      <div class="flex items-center justify-center flex-col mb-8">
        <img src="@/assets/3.png" class="transition hover:scale-125" />
        <div class="text-white text-center">
          <span class="text-xl md:text-2xl font-semibold">Technology</span
          ><br />
          We stay up-to-date with the latest<br />
          trends and technologies in the IT<br />
          industry, so you can get the most<br />
          advanced solutions available.
        </div>
      </div>
      <div class="flex items-center justify-center flex-col mb-8">
        <img src="@/assets/2.png" class="transition hover:scale-125" />
        <div class="text-white text-center">
          <span class="text-xl md:text-2xl font-semibold">Solutions</span><br />
          We take a personalized approach<br />
          to every project, working closely<br />
          with you to understand your<br />
          business and create solutions.
        </div>
      </div>
      <div class="flex items-center justify-center flex-col mb-8">
        <img src="@/assets/1.png" class="transition hover:scale-125"/>
        <div class="text-white text-center">
          <span class="text-xl md:text-2xl font-semibold">Results</span><br />
          Our track record speaks for itself -<br />
          we've helped businesses of all<br />
          sizes and industries achieve their<br />
          goals with our IT solutions.
        </div>
      </div>
    </div>
  </div>
</template>
