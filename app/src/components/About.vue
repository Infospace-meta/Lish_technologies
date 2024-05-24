<template>
  <section class="bg-white py-4">
    <div class="mx-auto max-w-screen-xl">
      <div class="text-black">
        <!-- Header Section -->
        <div
          class="lg:flex lg:items-center lg:justify-between mb-10 animate-slideInRight"
        >
          <div class="lg:w-1/2 lg:px-12">
            <h2
              class="text-2xl md:text-3xl lg:text-4xl font-bold text-black mt-2 uppercase"
            >
              About us
            </h2>
            <p class="text-gray-600 text-xs md:text-sm lg:text-base mt-4">
              We are a team of passionate individuals dedicated to creating
              innovative solutions that enhance the way people interact with
              technology. With expertise in design, development, and user
              experience, we strive to make a positive impact on the world
              through our work.
            </p>
          </div>
          <div class="lg:w-1/2 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <img
              src="@/assets/aboutus.gif"
              alt="Profile Picture"
              class="w-full lg:w-auto max-w-xs lg:max-w-none mb-4"
            />
          </div>
        </div>
        <div>
          <hr
            class="border-4 border-blue-500 max-w-full cover h-10 bg-blue-500"
          />
        </div>

        <!-- who we are -->
        <div
          class="lg:flex lg:items-center lg:justify-between mb-10 animate-slideInLeft"
        >
          <div
            class="lg:w-1/2 flex justify-center lg:justify-start mt-4 lg:mt-0"
          >
            <img
              src="@/assets/whoweare.gif"
              alt="Profile picture"
              class="w-full lg:w-auto max-w-xs lg:max-w-none mb-4 animate-pulse"
            />
          </div>
          <div class="lg:w-1/2 lg:px-12 animate-bounce">
            <h2 class="font-semibold text-black text-xl md:text-2xl">
              Who we are
            </h2>
            <p class="text-gray-600 text-xs md:text-sm lg:text-base mt-4">
              LISH TECH is a leading provider ofsoftware services. We specialize in Software Development,
              offering innovative solutions tailored to meet the unique needs of
              our clients. Our dedicated team excels in delivering high-quality
              services with a focus on Providing quality services
              . We're committed to accomplishing our Mission,
              striving to exceed expectations and drive success for our clients.
            </p>
          </div>
        </div>

        <!-- About Our Company Section -->
        <div
          class="lg:flex lg:items-center lg:justify-between mb-10 animate-slideInRight"
        >
          <div class="lg:w-1/2 lg:px-12">
            <span class="text-blue-950 font-semibold">ABOUT OUR COMPANY</span>
            <h2
              class="text-2xl md:text-3xl lg:text-4xl font-bold text-black mt-2"
            >
              Always Deliver More <br />
              than you Expected
            </h2>
            <p class="text-gray-600 text-xs md:text-sm lg:text-base mt-4">
              LISH Tech is a leading software company that specializes in
              providing innovative solutions to businesses across various
              industries. Our primary focus is on helping our clients maximize
              productivity and efficiency through cutting-edge software products
              and services. We are committed to delivering the highest quality
              solutions that enhance user experience, increase operational
              efficiency, and reduce costs.
            </p>
          </div>
          <div class="lg:w-1/2 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <img
              src="@/assets/Deliver1.gif"
              alt="Profile Picture"
              class="w-full lg:w-auto max-w-xs lg:max-w-none mb-4"
            />
          </div>
        </div>

        <!-- End-to-End Development Section with Swapped Content and Image -->
        <div
          class="lg:flex lg:items-center lg:justify-between mb-10 animate-slideInLeft"
        >
          <div
            class="lg:w-1/2 flex justify-center lg:justify-start mt-4 lg:mt-0"
          >
            <img
              src="@/assets/End to end.png"
              alt="Profile Picture"
              class="w-full lg:w-auto max-w-xs lg:max-w-none mb-4 animate-pulse"
            />
          </div>
          <div class="lg:w-1/2 lg:px-12 animate-bounce">
            <h2 class="font-semibold text-black text-xl md:text-2xl">
              End-to-End Development
            </h2>
            <p class="text-gray-600 text-xs md:text-sm lg:text-base mt-4">
              LISH Tech offers complete development services, delivering
              tailored software solutions. Our skilled team handles custom
              applications, scalable architectures, and seamless system
              integration.
            </p>
          </div>
        </div>

        <!-- Software IT Outsourcing Section -->
        <div
          class="lg:flex lg:items-center lg:justify-between mb-10 animate-slideInRight"
        >
          <div class="lg:w-1/2 lg:px-12">
            <h2 class="font-semibold text-black text-xl md:text-2xl">
              Software IT Outsourcing
            </h2>
            <p class="text-gray-600 text-xs md:text-sm lg:text-base mt-4">
              LISH Tech provides trusted software IT outsourcing. We offer
              expertise, allowing businesses to focus on core competencies while
              we handle complex development projects.
            </p>
          </div>
          <div class="lg:w-1/2 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <img
              src="@/assets/software-outsourcing.jpg"
              alt="Profile Picture"
              class="w-full lg:w-auto max-w-xs lg:max-w-none mb-4"
            />
          </div>
        </div>

        <!-- Cloud Solutions Section -->
        <div
          class="lg:flex lg:items-center lg:justify-between mb-10 animate-slideInLeft"
        >
          <div
            class="lg:w-1/2 flex justify-center lg:justify-start mt-4 lg:mt-0"
          >
            <img
              src="@/assets/Cloud-solutions.png"
              alt="Profile Picture"
              class="w-full lg:w-auto max-w-xs lg:max-w-none mb-4"
            />
          </div>
          <div class="lg:w-1/2 lg:px-12">
            <h2 class="font-semibold text-black text-xl md:text-2xl">
              Cloud-solutions
            </h2>
            <p class="text-gray-600 text-xs md:text-sm lg:text-base mt-4">
              We provide robust cloud solutions that enable businesses to
              leverage the power of cloud computing. Our services include cloud
              migration, cloud management, and cloud optimization, ensuring
              seamless operations and enhanced scalability.
            </p>
          </div>
        </div>

        <!-- List of Benefits Section -->
        <ul class="space-y-2 mt-4 animate-fadeIn">
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

        <!-- Discover More Button -->
        <div class="mt-6 animate-bounce">
          <button
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            DISCOVER MORE
          </button>
        </div>

        <!-- Improve & Enhance Section -->
        <div
          class="flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-12 xl:gap-14 justify-center p-8 md:p-10 lg:p-12 xl:p-16 mt-8 animate-slideInUp"
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

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideInUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 2s ease-in-out;
}

.animate-slideInLeft {
  animation: slideInLeft 2s ease-in-out;
}

.animate-slideInRight {
  animation: slideInRight 2s ease-in-out;
}

.animate-slideInUp {
  animation: slideInUp 2s ease-in-out;
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style>
