<template>
  <body class="font-poppins bg-white">
    <footer id="footer" class="bg-blue-950 g-center">
      <div class="container mx-auto py-16 px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1">
            <div class="footer-about text-gray-300">
              <p>This is Lish empowering developers ecosystem</p>
            </div>
          </div>
          <div class="col-span-1">
            <div class="useful-link">
              <h2 class="text-2xl font-semibold pb-4 text-white">
                Useful Links
              </h2>
              <ul class="mt-4 text-gray-300">
                <li>
                  <RouterLink to="/"
                    ><i class="fas fa-angle-right"></i> Home</RouterLink
                  >
                </li>
                <li>
                  <RouterLink to="/about"
                    ><i class="fas fa-angle-right"></i> About Us</RouterLink
                  >
                </li>
                <li>
                  <RouterLink to="/services"
                    ><i class="fas fa-angle-right"></i> Services</RouterLink
                  >
                </li>
                <li>
                  <RouterLink to="/contact"
                    ><i class="fas fa-angle-right"></i> Contact</RouterLink
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-span-1">
            <div class="social-links">
              <h2 class="text-2xl font-semibold pb-4 text-white">Follow Us</h2>
              <ul class="mt-4 text-gray-300">
                <li>
                  <a href="#"><i class="fab fa-facebook-f"></i> Github</a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-instagram"></i> Instagram</a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-linkedin-in"></i> Linkedin</a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-linkedin-in"></i> Twitter</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-span-1">
            <div class="address">
              <h2 class="text-2xl font-semibold pb-4 text-white">Address</h2>
              <ul class="mt-4 text-gray-300">
                <li class="flex items-center">
                  <i class="fas fa-location-dot"></i> Nakuru, Kenyatta Avenue,
                  Gibcon House
                </li>
                <li>
                  <a href=""><i class="fas fa-phone"></i> +254 0000000</a>
                </li>
                <li>
                  <a href=""
                    ><i class="fas fa-envelope"></i> info@lishlabs.com</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <section id="copy-right">
      <div class="copy-right-sec bg-blue-950 text-white py-6 text-center">
        <i class="fas fa-copyright"></i>
        Lish Ai Labs 2024 Powerd By
        <a href="#" class="font-semibold">Infospace</a>
      </div>
    </section>
  </body>
</template>
