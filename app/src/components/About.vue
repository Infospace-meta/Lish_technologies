<template>
  <section class="bg-white py-4">
    <div class="mx-auto">
      <div class="text-black">
        <div class="lg:flex justify-center items-center">
          <div
            class="flex flex-col lg:flex-row justify-center items-center lg:w-1/2 h-96 bg-cover bg-center bg-no-repeat bg-[url('@/assets/Tech.avif')]"
          >
            <p class="font-bold uppercase text-3xl sm:text-5xl text-white">
              About us
            </p>
          </div>
        </div>
        <div class="lg:w-1/2 md:px-10 lg:px-12 xl:px-16">
          <span class="text-blue-950 font-semibold">ABOUT OUR COMPANY</span
          ><br />
          <span class="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            Always Deliver More <br />
            than you Expected </span
          ><br /><br />
          <span class="text-gray-600 text-xs md:text-sm lg:text-base">
            LISH Tech is a leading software company that specializes in
            providing innovative solutions to businesses across various
            industries. Our primary focus is on helping our clients maximize
            productivity and efficiency through cutting-edge software products
            and services. We are committed to delivering the highest quality
            solutions that enhance user experience, increase operational
            efficiency, and reduce costs. </span
          ><br /><br />
          <img
            src="@/assets/Deliver1.gif"
            alt="Profile Picture"
            class="w-full lg:w-auto max-w-xs lg:max-w-none mb-4"
          />
        </div>

        <div class="lg:flex justify-center items-center mt-8">
          <div class="lg:w-1/2 px-6 md:px-10 lg:px-12 xl:px-16">
            <span class="font-semibold text-black text-xl md:text-2xl">
              End-to-End Development </span
            ><br />
            <span class="text-xs md:text-sm lg:text-base text-gray-600">
              LISH Tech offers complete development services, delivering
              tailored software solutions. Our skilled team handles custom
              applications, scalable architectures, and seamless system
              integration. </span
            ><br /><br />
            <img
              src="@/assets/End to end.png"
              alt="Profile Picture"
              class="w-full lg:w-auto max-w-xs lg:max-w-none mb-4"
            />
          </div>
          <div class="lg:w-1/2 px-6 md:px-10 lg:px-12 xl:px-16">
            <span class="font-semibold text-black text-xl md:text-2xl">
              Software IT Outsourcing </span
            ><br />
            <span class="text-xs md:text-sm lg:text-base text-gray-600">
              LISH Tech provides trusted software IT outsourcing. We offer
              expertise, allowing businesses to focus on core competencies while
              we handle complex development projects. </span
            ><br /><br />
            <img
              src="@/assets/software-outsourcing.jpg"
              alt="Profile Picture"
              class="w-full lg:w-auto max-w-xs lg:max-w-none mb-4"
            />
          </div>
        </div>
        <ul class="space-y-2 mt-4">
          <li class="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              class="flex-shrink-0 w-3.5 h-3.5 text-blue-500 dark:text-blue-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span
              >Custom software solutions tailored to your specific needs</span
            >
          </li>
          <li class="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              class="flex-shrink-0 w-3.5 h-3.5 text-blue-500 dark:text-blue-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span>Advanced technologies and industry best practices</span>
          </li>
        </ul>
        <br />
        <button
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          DISCOVER MORE
        </button>
        <div
          class="flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-12 xl:gap-14 justify-center p-8 md:p-10 lg:p-12 xl:p-16 mt-8"
        >
          <div class="text-4xl md:text-5xl lg:text-6xl text-blue-600 font-bold">
            Improve & Enhance the <br />
            Tech Projects
          </div>
          <div class="text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl">
            Our team excels at improving and enhancing tech projects. We
            optimize systems, refine functionalities, and introduce innovative
            solutions. Leveraging cutting-edge technologies, we ensure highly
            efficient and effective outcomes for our clients.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
