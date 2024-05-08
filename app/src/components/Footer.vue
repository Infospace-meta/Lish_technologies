<template>
  <div class="flex flex-col p-6 bg-blue-950 max-w-full mx-auto">
    <div class="w-full flex flex-col md:flex-row m-3 justify-evenly">
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
            <li><a href="#" class="hover:underline">HOME</a></li>
            <li><a href="#" class="hover:underline">ABOUT US</a></li>
            <li><a href="#" class="hover:underline">OUR TEAM</a></li>
            <li><a href="#" class="hover:underline">SERVICES</a></li>
            <li><a href="#" class="hover:underline">CONTACT</a></li>
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
          <img src="../assets/facebook.png" alt="" />
          <img src="../assets/twitter.png" alt="" />
          <img src="../assets/instagram.png" alt="" />
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
