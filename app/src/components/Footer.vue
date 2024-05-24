<template>
  <div>
    <body class="font-poppins bg-white">
      <footer id="footer" class="bg-cover bg-center bg-blue-700">
        <div class="container mx-auto py-16 px-4">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="col-span-1">
              <div class="footer-about">
                <p>This is Lish empowering developers ecosystem</p>
              </div>
            </div>
            <div class="col-span-1">
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
                  <RouterLink to="/aboutus"
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
            <div class="col-span-1">
              <div class="social-links">
                <h2 class="text-2xl font-semibold pb-4">Follow Us</h2>
                <ul class="mt-4">
                  <li>
                    <a href="https://www.facebook.com/"
                      ><i class="fab fa-facebook-f"></i> Facebook</a
                    >
                  </li>
                  <li>
                    <a href="https://www.instagram.com/"
                      ><i class="fab fa-instagram"></i> Instagram</a
                    >
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/"
                      ><i class="fab fa-linkedin-in"></i> Linkedin</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-span-1">
              <div class="address">
                <h2 class="text-2xl font-semibold pb-4">Address</h2>
                <ul class="mt-4">
                  <li class="flex items-center">
                    <i class="fas fa-location-dot"></i> Nakuru, Kenyatta Avenue,
                    Gibcon House
                  </li>
                  <li>
                    <a href=""><i class="fas fa-phone"></i> +254 722 575 169</a>
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
    </body>
  </div>
</template>
