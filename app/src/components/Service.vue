<template>
  <div class="flex flex-col md:flex-row">
    <nav class="bg-gray-200 w-full md:w-1/4 py-4">
      <ul>
        <li v-for="(section, index) in sections" :key="index">
          <a
            href="#"
            class="block py-2 px-4 text-gray-600 hover:text-gray-900"
            @click.prevent="toggleSection(index)"
            >{{ section.title }}</a
          >
        </li>
      </ul>
    </nav>
    <main class="container mx-auto p-4 w-full md:w-3/4">
      <section
        v-for="(section, index) in sections"
        :key="index"
        :id="section.id"
        :class="{ hidden: section.hidden }"
      >
        <h2 class="text-2xl font-bold mb-4">{{ section.title }}</h2>
        <p class="mb-4">{{ section.content }}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            v-for="(feature, index) in section.features"
            :key="index"
            class="bg-white p-4 rounded-lg shadow-md shadow-blue-400"
          >
            <h3 class="text-lg font-semibold mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.content }}</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

const sections = ref([
  {
    id: "web-design",
    title: "Web Design",
    content:
      "Web design is the process of creating visually appealing and user-friendly websites that reflect your brand identity and resonate with your target audience. At DigitX, our web design process involves a careful blend of creativity, user experience (UX) design, and cutting-edge technologies. We take the time to understand your business goals, target market, and unique selling points to create a website that not only looks great but also drives results.",
    features: [
      {
        title: "Customized Design",
        content:
          "Our customized design service ensures that your website reflects your brand identity and resonates with your target audience. We work closely with you to understand your business goals and design a website that meets your specific needs.",
      },
      {
        title: "Responsive Design",
        content:
          "With responsive design, your website adapts seamlessly to different screen sizes and devices, providing an optimal viewing experience for your visitors. This ensures that your website looks great and functions properly on desktops, laptops, tablets, and smartphones.",
      },
      {
        title: "User-Centric Approach",
        content:
          "Our user-centric approach focuses on creating websites that prioritize the needs and preferences of your target audience. By understanding your users' behavior and preferences, we design intuitive interfaces and engaging experiences that drive user satisfaction and conversions.",
      },
      {
        title: "Visual Elements",
        content:
          "Visual elements play a crucial role in capturing users' attention and conveying your brand message effectively. We leverage high-quality graphics, imagery, typography, and other visual elements to enhance the visual appeal and aesthetics of your website.",
      },
    ],
    hidden: false,
  },

  {
    id: "web-development",
    title: "Web Development",
    content:
      "Web development is the process of building and maintaining websites using programming languages and frameworks. At DigitX, our web development services include custom web applications, e-commerce platforms, and content management systems. We use the latest technologies and best practices to ensure your website is fast, secure, and scalable.",

    features: [
      {
        title: "Custom Web Applications",
        content:
          "Our customized design service ensures that your website reflects your brand identity and resonates with your target audience. We work closely with you to understand your business goals and design a website that meets your specific needs.",
      },
      {
        title: "E-commerce Platforms",
        content:
          "With responsive design, your website adapts seamlessly to different screen sizes and devices, providing an optimal viewing experience for your visitors. This ensures that your website looks great and functions properly on desktops, laptops, tablets, and smartphones.",
      },
      {
        title: "Content Management Systems",
        content:
          "Our user-centric approach focuses on creating websites that prioritize the needs and preferences of your target audience. By understanding your users' behavior and preferences, we design intuitive interfaces and engaging experiences that drive user satisfaction and conversions.",
      },
      {
        title: "API Integration",
        content:
          "Visual elements play a crucial role in capturing users' attention and conveying your brand message effectively. We leverage high-quality graphics, imagery, typography, and other visual elements to enhance the visual appeal and aesthetics of your website.",
      },
    ],
    hidden: true,
  },

  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    content:
      "Mobile app development is the process of creating software applications that run on mobile devices, such as smartphones and tablets. DigitX specializes in developing native and cross-platform mobile apps tailored to your business needs. Our mobile app development services encompass iOS, Android, and hybrid app development, ensuring a seamless user experience across different platforms.",
    features: [
      {
        title: "Native App Development",
        content:
          "Our customized design service ensures that your website reflects your brand identity and resonates with your target audience. We work closely with you to understand your business goals and design a website that meets your specific needs.",
      },
      {
        title: "Cross-platform App Development",
        content:
          "With responsive design, your website adapts seamlessly to different screen sizes and devices, providing an optimal viewing experience for your visitors. This ensures that your website looks great and functions properly on desktops, laptops, tablets, and smartphones.",
      },
      {
        title: "iOS App Development",
        content:
          "Our user-centric approach focuses on creating websites that prioritize the needs and preferences of your target audience. By understanding your users' behavior and preferences, we design intuitive interfaces and engaging experiences that drive user satisfaction and conversions.",
      },
      {
        title: "Android App Development",
        content:
          "Visual elements play a crucial role in capturing users' attention and conveying your brand message effectively. We leverage high-quality graphics, imagery, typography, and other visual elements to enhance the visual appeal and aesthetics of your website.",
      },
    ],
    hidden: true,
  },

  {
    id: "digital-marketing",
    title: "Digital marketing",
    content:
      "Web design is the process of creating visually appealing and user-friendly websites that reflect your brand identity and resonate with your target audience. At DigitX, our web design process involves a careful blend of creativity, user experience (UX) design, and cutting-edge technologies. We take the time to understand your business goals, target market, and unique selling points to create a website that not only looks great but also drives results.",
    features: [
      {
        title: "Search Engine Optimization (SEO)",
        content:
          "Digital marketing involves promoting products or services using digital technologies and channels, such as the internet, social media, mobile devices, search engines, and email. DigitX offers comprehensive digital marketing solutions to help businesses increase their online visibility, attract more customers, and drive conversions. Our digital marketing services include search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, email marketing, and content marketing.",
      },
      {
        title: "Pay-Per-Click (PPC) Advertising",
        content:
          "With responsive design, your website adapts seamlessly to different screen sizes and devices, providing an optimal viewing experience for your visitors. This ensures that your website looks great and functions properly on desktops, laptops, tablets, and smartphones.",
      },
      {
        title: "Social Media Marketing",
        content:
          "Our user-centric approach focuses on creating websites that prioritize the needs and preferences of your target audience. By understanding your users' behavior and preferences, we design intuitive interfaces and engaging experiences that drive user satisfaction and conversions.",
      },
      {
        title: "Email Marketing",
        content:
          "Visual elements play a crucial role in capturing users' attention and conveying your brand message effectively. We leverage high-quality graphics, imagery, typography, and other visual elements to enhance the visual appeal and aesthetics of your website.",
      },
      {
        title: "Content Marketing",
        content:
          "Visual elements play a crucial role in capturing users' attention and conveying your brand message effectively. We leverage high-quality graphics, imagery, typography, and other visual elements to enhance the visual appeal and aesthetics of your website.",
      },
    ],
    hidden: true,
  },
]);

const toggleSection = (index) => {
  sections.value.forEach((section, i) => {
    section.hidden = i !== index;
  });
};
</script>
