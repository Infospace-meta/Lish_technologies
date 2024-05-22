<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto mt-8">
    <div
      v-for="(service, index) in services"
      :key="index"
      class="max-w-sm p-4 transition hover:scale-95 bg-gradient-to-b from-blue-800 to-blue-950 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <!-- Placeholder image -->
      <img
        :src="service.image"
        alt="Service Image"
        class="w-full h-auto mb-4 rounded-lg"
      />

      <a :href="service.link">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ service.title }}
        </h5>
      </a>
      <p class="mb-6 font-normal text-sm text-gray-700 dark:text-gray-400">
        {{ service.description }}
      </p>
      <!--RouterLink-->
      <RouterLink
        :to="{ path: '/contact' }"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Contact Us
        <svg
          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </RouterLink>
    </div>
  </div>
  <div class="text-center mt-12">
    <div
      class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-700 text-5xl font-bold"
    >
      <span class="text-gray-400 font-bold text-5xl">Categories of </span>
      <br />Services
    </div>
    <div class="text-black text-2xl mt-6">
      At Lish, we are committed to providing exceptional digital solutions
      tailored to suit your unique business needs. Our <br />
      comprehensive service offerings cover a wide spectrum of digital
      disciplines, including web<br />
      design, app development, web development, and marketing.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: "Web Design",
          description:
            "Our Web Design Service is all about creating visually stunning and user-friendly Websites that leave a lasting impression on your audience. We blend creativity with functionality to deliver websites that showcase your brand's identity while ensuring seamless navigation and optimal user experience.",
          link: "#",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbXUNlAijYk2Od9qkPMBjICKF0QHDxB6cNLB6aSz8y6g&s", // Placeholder image URL
        },
        {
          title: "Web Development",
          description:
            "Our Web Development Service is focused on turning your Website into a powerful digital asset. We utilize the latest technologies and industry best practices to build dynamic and scalable websites that cater to your business objectives.",
          link: "#",
          image: "https://clipground.com/images/web-development-logo-png-3.png", // Placeholder image URL
        },
        {
          title: "Mobile App Development",
          description:
            "With our Mobile Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
          link: "#",
          image:
            "https://www.webdeveloperoc.com/wp-content/uploads/2019/06/app-development.png", // Placeholder image URL
        },
        {
          title: "Digital Marketing",
          description:
            "In the digital age, marketing is a critical aspect of your business's success. Our Digital Marketing service employs data-driven strategies to enhance your brand's visibility, attract targeted traffic, and boost conversions. From SEO and PPC campaigns to social media marketing, we've got your digital marketing needs covered.",
          link: "#",
          image:
            "https://img.pikbest.com/png-images/digital-marketing-logo-design_1768071.png!sw800", // Placeholder image URL
        },
      ],
    };
  },
};
</script>
