<template>
    <div class="bg-black">
        <!-- Sign up form with image -->
<div class="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto shadow-2xl shadow-blue-600 transition hover:scale-95">
  <div class="max-w-2xl lg:max-w-5xl mx-auto">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-white sm:text-4xl">Sign Up</h1>
      <p class="mt-1 text-white font-light">
        Lorem ipsum dolor sit amet consectetur.
      </p>
    </div>

    <div class="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
      <!-- Card -->
      <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8">
        <h2 class="mb-8 text-xl font-semibold text-white">Create Account</h2>
        <form>
          <div class="grid gap-4">
            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="hs-firstname-contacts-1" class="sr-only"
                  >First Name
                </label>
                <input
                  type="text"
                  name="hs-firstname-contacts-1"
                  id="hs-firstname-contacts-1"
                  class="py-3 px-4 block w-full border-gray-200 rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="First Name"
                />
              </div>

              <div>
                <label for="hs-lastname-contacts-1" class="sr-only"
                  >Last Name
                </label>
                <input
                  type="text"
                  name="hs-lastname-contacts-1"
                  id="hs-lastname-contacts-1"
                  class="py-3 px-4 block w-full border-gray-200 rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <!-- End Grid -->

            <div>
              <label for="hs-email-contacts-1" class="sr-only">Email</label>
              <input
                type="email"
                name="hs-email-contacts-1"
                id="hs-email-contacts-1"
                autocomplete="email"
                class="py-3 px-4 block w-full border-gray-200 rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Email"
              />
            </div>

            <div>
              <label for="hs-phone-number-1" class="sr-only">Password </label>
              <input
                type="password"
                name="hs-phone-number-1"
                id="hs-phone-number-1"
                class="py-3 px-4 block w-full border-gray-200 rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Password"
              />
            </div>
            <div>
              <label for="hs-phone-number-1" class="sr-only"
                >Confirm Password
              </label>
              <input
                type="password"
                name="hs-phone-number-1"
                id="hs-phone-number-1"
                class="py-3 px-4 block w-full border-gray-200 rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <!-- End Grid -->

          <div class="mt-4 grid">
            <button
              type="submit"
              class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-3xl border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Sign up
            </button>
          </div>

          <div class="mt-3 text-center">
            <p class="text-sm text-gray-500">
              Already have an account?
              <router-link to="/Login" class="text-blue-500">Login here</router-link>
            </p>
          </div>
        </form>
      </div>
      <!-- End Card -->

      <!-- Image -->
      <div class="">
        <img
          class="w-full h-auto object-cover rounded-2xl hidden lg:block"
          src="https://images.unsplash.com/photo-1470290378698-263fa7ca60ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="conctact form image"
        />
      </div>
      <!-- End Image -->
    </div>
  </div>
</div>
<!-- End Contact Us -->

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>