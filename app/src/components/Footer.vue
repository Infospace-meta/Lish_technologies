<template>
  <div class="flex flex-col p-6 bg-blue-950 max-w-full mx-auto">
    <div class="text-white font-bold text-4xl lg:text-9xl mt-44 text-center">
      Need IT Solutions? <br />Let's
      <span class="italic font-normal">start now.</span><br /><br />
    </div>

    <div>
      <router-link to="/contact" class="mx-auto">
      <button
        class="mx-auto border border-white bg-blue-950 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center"
      >
        GET FREE CONSULTATION
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
    </div>
    <div class="w-full flex flex-col md:flex-row m-3 justify-evenly mt-36">
      <!-- logo -->
      <div class="logo hidden w-1/4 sm:block">
        <img class="w-48" src="../assets/logo.png" alt="" />
      </div>

      <div
        class="cont_infor flex w-full justify-evenly text-white mx-auto flex-row items-start md:w-2/4"
      >
        <!-- navbar -->
        <nav class="flex flex-col gap-2">
          <ul>
            <li>
            <RouterLink to="/" class="text-purple-500">Home</RouterLink>
          </li>
          <li>
                <RouterLink to="/about-us" class="hover:text-purple-500"
                  >About us</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/team" class="hover:text-purple-500"
                  >Our team</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/services" class="hover:text-purple-500"
                  >Services</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/contact" class="hover:text-purple-500"
                  >Contact</RouterLink
                >
              </li>
          </ul>
        </nav>

        <div class="info flex flex-col gap-3 ml-5">
          <p>901-617-3690</p>
          <h1>info@lish Tech.org</h1>
          <h1>
            Kenyatta Avenue,<br />
            Gibcon House, 4th Floor <br />
            Kenya,Nakuru
          </h1>
        </div>
      </div>

      <!-- div holding social media icons and the portfolio link -->
      <div class="w-full mt-5 mx-auto flex flex-col justify-start md:w-1/4">
        <!-- social media icons -->

        <div class="w-1/2 mx-auto flex justify-between">
          <img src="../assets/facebook.png" class="transition hover:scale-125" alt="" />
          <img src="../assets/twitter.png" class="transition hover:scale-125" alt="" />
          <img src="../assets/instagram.png" class="transition hover:scale-125" alt="" />
        </div>
        <!-- the portfolio link -->
        <div class="mt-3 w-1/2 mx-auto md:w-48">
          <button
            class="bg-white text-pink-900 w-full p-3 rounded hover:bg-pink-200"
          >
            <a href="#">View Portfolio</a>
          </button>
        </div>
      </div>
    </div>
    <div
      class="container mx-auto p-3 flex flex-col text-sm tracking-tighter text-white justify-between mt-10 md:flex-row"
    >
      <p class="">&copy;2024 All Rights Reserved| Lish Tech</p>
      <p class=" ">Privacy Policy</p>
      <p class="">Website Designed By InfoSpace</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
