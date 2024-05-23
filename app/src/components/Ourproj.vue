<template>
  <div class="animate-slide-up">
    <!-- Hero Section with Background Image and Animation -->
    <div class="relative ">
      <img
        src="@/assets/o.avif"
        class="w-full h-48 sm:h-64 md:h-96 opacity-80 bg-fixed animate-fade-in"
      />
      <div
        class="absolute inset-0 flex items-center justify-center  p-4"
      >
        <h2
          class="text-white text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center"
        >
          OUR PROJECTS <br /><span
            class="text-xl sm:text-3xl md:text-4xl lg:text-5xl"
            >TECHNOLOGY FOR GOOD</span
          >
        </h2>
      </div>
    </div>

    <!-- First Project Section with Picture and Animation -->
    <div
      class="p-8 md:p-16 lg:p-24 bg-blue-950 flex flex-col lg:flex-row justify-center gap-6 lg:gap-14"
    >
      <img
        src="@/assets/tr.png"
        class="rounded-lg w-full lg:w-96 h-64 lg:h-80 animate-fade-in"
      />
      <div
        class="text-xl md:text-3xl lg:text-4xl font-bold text-white animate-fade-in"
      >
        AFRICA'S TIME <br />TRACKING SOFTWARE <br />
        <div class="text-sm md:text-base lg:text-lg font-normal mt-2">
          Time-tracking software includes programs and applications
          <br class="hidden lg:block" />
          that allow its users to record time spent on tasks or projects.
          <br class="hidden lg:block" />
          Multiple industries utilize this type of software, including
          <br class="hidden lg:block" />
          those that employ freelancers and hourly workers such as
          <br class="hidden lg:block" />
          lawyers and accountants
        </div>
        <br />
        <div class="flex flex-col sm:flex-row justify-between gap-6 lg:gap-20">
          <div
            class="h-20 w-20 sm:w-auto bg-blue-400 flex flex-col justify-center items-center"
          >
            <span class="text-2xl md:text-3xl lg:text-4xl">{{
              connectionCount
            }}</span>
            <span class="text-lg md:text-xl lg:text-2xl font-semibold"
              >CONNECTIONS</span
            >
          </div>
          <div
            class="h-20 w-20 sm:w-auto bg-blue-400 flex flex-col justify-center items-center"
          >
            <span class="text-2xl md:text-3xl lg:text-4xl">{{
              countryCount
            }}</span>
            <span class="text-lg md:text-xl lg:text-2xl font-semibold"
              >COUNTRIES</span
            >
          </div>
          <div
            class="h-20 w-20 sm:w-auto bg-blue-400 flex flex-col justify-center items-center"
          >
            <span class="text-2xl md:text-3xl lg:text-4xl">{{
              languageCount
            }}</span>
            <span class="text-lg md:text-xl lg:text-2xl font-semibold"
              >LANGUAGES</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Impact Statement Section with Animation -->
    <div
      class="text-lg md:text-2xl lg:text-5xl text-blue-950 font-bold text-center p-8 md:p-16 lg:p-24 animate-fade-in"
    >
      We solve society's big <br />
      challenges
      <span class="text-base md:text-lg lg:text-xl font-normal">
        <br />
        Collaborating with inspirational organizations, we make things that
        matter. <br class="hidden lg:block" />
        We’ve made tech solutions that have helped charities, international
        businesses <br class="hidden lg:block" />
        and exciting startups to use apps, websites and digital products to
        change <br class="hidden lg:block" />
        lives for the better.
        <br class="hidden lg:block" />
        Someday we hope your name will be on here too, just let us know when
        you’re <br class="hidden lg:block" />
        ready to change the world.
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectPage",
  data() {
    return {
      connectionCount: 1500,
      countryCount: 1,
      languageCount: 2,
    };
  },
};
</script>

<style>
/* CSS for Animations */
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    transform: translateY(50px);
  }
  to {
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease;
}

.animate-slide-up {
  animation: slide-up 1s ease;
}
</style>
