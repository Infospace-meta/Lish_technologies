<template>
  <div class="bg-blue-950 font-Lato, sans-serif text-white p-4">
    <nav>
      <div class="container nav-wrapper">
        <div class="brand">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M10.5 10a2.5 2.5 0 1 1-5.001-.001A2.5 2.5 0 0 1 10.5 10zM16 4v12c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2zm-3.5 6a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0zm6.715-4.914L17 6.562v7l2.215 1.477a.505.505 0 0 0 .785-.42V5.506a.505.505 0 0 0-.785-.42z" />
          </svg>
          <span><strong>LISH TECH</strong></span>
        </div>
        <div class="hamburger" @click="toggleMobileNav">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul class="nav-list" :class="{ open: isMobileNavOpen }">
          <li class="active">
            <Router-link to="/">Home</Router-link>
          </li>
          <li>
            <Router-link to="/about">About</Router-link>
            <ul class="dropdown-list">
              <li><Router-link to="/about-us">About us</Router-link></li>
              <li><Router-link to="/services">Our Services</Router-link></li>
              <li><Router-link to="/team">Our Team</Router-link></li>
              <li><Router-link to="/projects">Our Projects</Router-link></li>
              <li><Router-link to="/training">Training</Router-link></li>
            </ul>
          </li>
          <li><Router-link to="/faqs">FAQs</Router-link></li>
          <li><Router-link to="/contact">Contact</Router-link></li>
          <li>
            <button class="btn">Join Us</button>
          </li>
          <li>
            <button class="btn">View Portfolio</button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const isMobileNavOpen = ref(false);
const Router = useRouter();

function toggleMobileNav() {
  isMobileNavOpen.value = !isMobileNavOpen.value;
}

window.addEventListener('resize', addRequiredClass);

function addRequiredClass() {
  if (window.innerWidth < 860) {
    document.body.classList.add('mobile');
  } else {
    document.body.classList.remove('mobile');
  }
}

window.onload = addRequiredClass;
</script>


<style lang="scss" scoped>
/* Your styles go here */
</style>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;900&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

.container {
  width: 1152px;
  max-width: 90%;
  margin: 0 auto;
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
}

.brand svg {
  height: 30px;
  margin-right: 10px;
}

.brand svg path {
  fill: #232323;
}

.nav-wrapper ul.nav-list {
  list-style-type: none;
  display: flex;
  align-items: center;
}
.nav-wrapper ul.nav-list li {
  margin-left: 30px;
  padding: 20px 0;
  position: relative;
}

.nav-wrapper ul.nav-list li a {
  color: red;
  text-decoration: none;
  letter-spacing: 1px;
  transition: all 0.5s ease-in-out;
}

.nav-wrapper ul.nav-list li a:hover,
.nav-wrapper ul.nav-list li.active a {
  color: #933ded;
}

.btn {
  background: #933ded;
  color: black;
  outline: none;
  padding: 8px 20px;
  font-size: 14px;
  cursor: pointer;
  letter-spacing: 1px;
  border: 1px solid transparent;
  transition: all 0.5s ease-in-out;
}

.btn:hover {
  background: transparent;
  border-color: #fff;
}
nav ul.dropdown-list {
  list-style-type: none;
  display: block;
  background: whitesmoke;
  padding: 6px 16px;
  position: absolute;
  width: max-content;
  z-index: 9999;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  pointer-events: none;
}

.nav-wrapper ul.dropdown-list li {
  margin-left: 0;
  padding: 5px 0;
}

.nav-wrapper ul.dropdown-list li a {
  color: #232323;
}

.nav-wrapper ul.nav-list li:hover .dropdown-list {
  opacity: 1;
  pointer-events: auto;
  animation: moveUp 0.5s ease-in-out forwards;
}

@keyframes moveUp {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(20px);
  }
}

.hamburger {
  display: none;
}

.mobile .hamburger {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  cursor: pointer;
}

.mobile .hamburger span {
  background: grey;
  width: 28px;
  height: 2px;
  margin-bottom: 8px;
}

.mobile ul.nav-list {
  background: -webkit-linear-gradient(45deg, #434343, #000000);
  background: linear-gradient(45deg, #434343, #000000);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease-in-out;
}

.hamburger,
.brand {
  z-index: 9999;
}

.mobile ul.nav-list.open {
  opacity: 1;
  pointer-events: auto;
}

.mobile .hamburger span {
  transform-origin: left;
  transition: all 0.3 ease-in-out;
}

.mobile ul.nav-list li a {
  font-size: 20px;
}

.mobile ul.dropdown-list {
  position: relative;
  background: transparent;
  text-align: center;
  height: 0;
  overflow-y: hidden;
  transition: opacity 1s ease-in-out;
  padding-top: 0;
}

.mobile .nav-wrapper ul li:hover .dropdown-list {
  height: max-content;
  padding-top: 6px;
}

.mobile ul.nav-list li {
  margin-left: 0;
  text-align: center;
}

.mobile .nav-wrapper ul.dropdown-list li a {
  color: #999;
}
</style>
