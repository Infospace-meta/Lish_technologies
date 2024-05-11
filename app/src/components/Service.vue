<template>
  <div class="flex flex-col md:flex-row mb-10 mt-48">
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
      "Web design is more than just creating visually appealing websites; it's about crafting digital experiences that captivate and engage your audience. At Lish, we believe in weaving innovation and functionality into every pixel, ensuring your online presence reflects your brand essence and leaves a lasting impression. Our approach combines artistic flair, user-centric design, and the latest technologies to build websites that not only look stunning but also drive meaningful interactions and conversions.",
    features: [
      {
        title: "Creative Customization",
        content:
          "Our customized design service ensures that every aspect of your website resonates with your brand identity and aligns with your strategic objectives. We collaborate closely with you to understand your vision and translate it into a captivating digital masterpiece.",
      },
      {
        title: "Seamless Responsiveness",
        content:
          "With responsive design, your website seamlessly adapts to various screen sizes and devices, providing an optimal viewing experience for users across desktops, laptops, tablets, and smartphones. This ensures consistent engagement and usability regardless of the device.",
      },
      {
        title: "User-Centric Design",
        content:
          "Our user-centric approach prioritizes the needs and preferences of your target audience. By delving deep into user behavior and preferences, we craft intuitive interfaces and immersive experiences that foster engagement, loyalty, and conversions.",
      },
      {
        title: "Compelling Visual Storytelling",
        content:
          "Visual storytelling is at the heart of effective web design. We leverage high-quality graphics, imagery, typography, and other visual elements to weave narratives that resonate with your audience, evoke emotions, and drive brand affinity.",
      },
      {
        title: "SEO Integration",
        content:
          "Incorporating SEO best practices into the design ensures that your website is optimized for search engines, improving its visibility and driving organic traffic. We implement SEO-friendly design elements and structure to enhance your website's search engine rankings.",
      },
      {
        title: "Accessibility Compliance",
        content:
          "Accessibility is crucial for ensuring that all users, regardless of disabilities, can access and interact with your website. We design with accessibility standards in mind, ensuring that your website is inclusive and compliant with WCAG guidelines.",
      },
    ],
    hidden: false,
  },

  {
    id: "web-development",
    title: "Web Development",
    content:
      "Web development is the backbone of your online presence, empowering your website with robust functionality, seamless navigation, and enhanced performance. At Lish, we marry cutting-edge technologies with industry best practices to architect websites that not only meet your current needs but also scale with your business growth. Our development expertise spans custom web applications, e-commerce platforms, content management systems, and beyond, ensuring a solid foundation for your digital success.",

    features: [
      {
        title: "Tailored Solutions",
        content:
          "Our development services are tailored to your unique requirements, ensuring that your website is not just a digital presence but a strategic asset that drives business value. From complex custom applications to user-friendly e-commerce solutions, we bring your ideas to life with precision and efficiency.",
      },
      {
        title: "Scalable Architecture",
        content:
          "We build websites with scalability in mind, employing robust architectures and frameworks that can accommodate your evolving needs and increasing traffic volumes. This ensures that your website remains performant, reliable, and future-proof, even as your business grows.",
      },
      {
        title: "Seamless Integration",
        content:
          "Integration is key to a seamless digital experience. Whether it's integrating third-party APIs, payment gateways, or content management systems, we ensure that all components work together harmoniously to deliver a cohesive and frictionless user experience.",
      },
      {
        title: "Optimized Performance",
        content:
          "Performance optimization is paramount in today's digital landscape. We employ optimization techniques and performance tuning to ensure that your website loads quickly, operates smoothly, and delivers an exceptional user experience across devices and platforms.",
      },
      {
        title: "Security Measures",
        content:
          "Security is a top priority in web development. We implement robust security measures, including SSL certificates, data encryption, and regular security audits, to safeguard your website against cyber threats and protect sensitive user information.",
      },
      {
        title: "Continuous Maintenance",
        content:
          "We provide ongoing maintenance and support services to keep your website running smoothly and securely. From software updates to bug fixes, we ensure that your website remains up-to-date and optimized for performance, allowing you to focus on your core business activities.",
      },
    ],
    hidden: true,
  },

  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    content:
      "Mobile app development opens doors to a world of endless possibilities, empowering businesses to engage users on the go and deliver personalized experiences that drive loyalty and retention. At Lish, we specialize in crafting native and cross-platform mobile apps that combine functionality with elegance, ensuring seamless performance across iOS, Android, and hybrid environments. From concept to deployment, we're your trusted partner in bringing your app vision to life.",

    features: [
      {
        title: "Platform Excellence",
        content:
          "We excel in native and cross-platform development, leveraging the strengths of each platform to deliver apps that are optimized for performance, reliability, and user experience. Whether it's iOS, Android, or hybrid, we ensure that your app shines on every platform.",
      },
      {
        title: "User-Centric Design",
        content:
          "User experience is at the core of our mobile app development process. We prioritize intuitive navigation, seamless interactions, and visually compelling interfaces to create apps that resonate with users, drive engagement, and foster long-term loyalty.",
      },
      {
        title: "Scalable Solutions",
        content:
          "Scalability is essential in mobile app development, especially as user bases grow and feature sets expand. We architect apps with scalability in mind, laying the groundwork for future enhancements and ensuring that your app can grow alongside your business.",
      },
      {
        title: "Performance Optimization",
        content:
          "Performance is non-negotiable in mobile app development. We employ optimization techniques and performance tuning to ensure that your app loads quickly, operates smoothly, and delivers a seamless user experience, even in challenging network conditions.",
      },
      {
        title: "Security Integration",
        content:
          "Security is paramount in mobile app development, especially when dealing with sensitive user data. We implement robust security measures, including encryption, authentication, and secure data storage, to protect your app and its users from cyber threats.",
      },
      {
        title: "App Store Optimization",
        content:
          "App Store Optimization (ASO) is essential for maximizing visibility and downloads. We optimize your app's metadata, keywords, and visuals to improve its ranking in app store search results and attract more qualified users.",
      },
    ],
    hidden: true,
  },

  {
    id: "digital-marketing",
    title: "Digital Marketing",
    content:
      "Digital marketing is the art and science of connecting with your audience in the digital realm, leveraging channels such as search engines, social media, email, and content to drive brand awareness, engagement, and conversions. At Lish, we craft data-driven digital marketing strategies that resonate with your target audience, amplify your brand presence, and deliver measurable results. From search engine optimization to social media advertising, we're your partner in navigating the digital landscape and unlocking new avenues for growth.",

    features: [
      {
        title: "Strategic SEO",
        content:
          "Search engine optimization (SEO) is the cornerstone of online visibility. Our SEO strategies are tailored to your business objectives and audience demographics, ensuring that your website ranks prominently in search engine results pages (SERPs) and attracts qualified traffic.",
      },
      {
        title: "Targeted PPC Campaigns",
        content:
          "Pay-per-click (PPC) advertising puts your brand front and center, reaching users at the right moment with targeted ads that drive clicks and conversions. We design and optimize PPC campaigns that maximize ROI, leveraging audience insights and industry best practices to deliver results.",
      },
      {
        title: "Engaging Social Media",
        content:
          "Social media is a powerful platform for building brand affinity and driving engagement. We develop social media marketing strategies that resonate with your audience, foster meaningful interactions, and cultivate a loyal community of brand advocates.",
      },
      {
        title: "Effective Email Marketing",
        content:
          "Email marketing remains one of the most effective channels for nurturing leads and driving conversions. We design and execute email marketing campaigns that deliver personalized, relevant content to your subscribers, driving engagement and loyalty.",
      },
      {
        title: "Compelling Content Strategies",
        content:
          "Content is king in the digital world. We craft compelling content strategies that captivate your audience, establish thought leadership, and drive organic traffic. From blog posts to videos, we create content that resonates with your audience and drives meaningful interactions.",
      },
      {
        title: "Analytics and Reporting",
        content:
          "Data-driven decision-making is essential for optimizing digital marketing campaigns. We provide comprehensive analytics and reporting services, tracking key performance indicators (KPIs) and providing actionable insights to refine your strategy and maximize ROI.",
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
