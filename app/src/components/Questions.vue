<template>
  <div>
    <section class="py-20 shadow-2xl shadow-blue-500 transition hover:scale-95">
      <div class="max-w-7xl mx-auto px-4 sm:px-8">
        <div class="py-8 px-4 mx-auto max-w-7xl text-center lg:py-8 lg:px-0">
          <h1
            class="mb-4 text-4xl font-semibold tracking-tight leading-none text-black md:text-5xl lg:text-6xl"
          >
            Frequently
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-700"
            >
              Asked
            </span>
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-black"
            >
              Questions
            </span>
          </h1>
          <p
            class="mb-0 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48"
          >
            Exploring Tech: Answers to Your Frequently Asked Questions
          </p>
        </div>
        <div class="max-w-3xl mx-auto">
          <ul class="mt-0 divide-y-2 rounded-2xl">
            <li v-for="(faq, index) in faqs" :key="index">
              <details class="group">
                <summary
                  @click="toggleAccordion(index)"
                  class="flex items-center justify-between px-4 sm:px-8 py-3 font-medium hover:cursor-pointer"
                >
                  <span class="font-semibold text-xl py-2">{{
                    faq.question
                  }}</span>
                  <span class="text-2xl">{{ faq.open ? "-" : "+" }}</span>
                </summary>

                <div
                  v-show="faq.open"
                  class="m-4 p-4 rounded-2xl text-gray-500"
                >
                  <p>
                    {{ faq.answer }}
                  </p>
                </div>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const faqs = ref([
  {
    question: "What programming languages are most in-demand?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.",
    open: false,
  },
  {
    question: "How can I improve my cybersecurity skills?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.",
    open: false,
  },
  {
    question: "What are the emerging trends in artificial intelligence?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.",
    open: false,
  },
]);

const toggleAccordion = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>

<style lang="scss" scoped></style>
