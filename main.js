/**
 * Portfolio Website JavaScript
 * Author: RaviKishan Singh
 * 
 * This file contains all the interactive functionality for the portfolio website
 * including animations, navigation, settings, and visual effects.
 */

// ====================================================
// INITIALIZATION AND PAGE LOADING
// ====================================================

// Store frequently accessed elements
const audio = document.getElementById("audioPlayer");
const loader = document.getElementById("preloader");
const myButton = document.getElementById("backtotopbutton");

// Remove loader when page is fully loaded
window.addEventListener("load", function() {
  loader.style.display = "none";
  document.querySelector(".hey").classList.add("popup");
});

// Developer signature in console
console.log(
  "%c Designed and Developed by RaviKishan Singh ",
  "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white; font-weight:900; font-size:1rem; padding:20px;"
);

// ====================================================
// SETTINGS AND TOGGLES
// ====================================================

/**
 * Toggle settings panel visibility
 */
function settingToggle() {
  document.getElementById("setting-container").classList.toggle("settingactivate");
  document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
  document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
}

/**
 * Control audio playback based on sound toggle state
 */
function playPause() {
  if (document.getElementById("switchforsound").checked === false) {
    audio.pause();
  } else {
    audio.play();
  }
}

/**
 * Toggle between light and dark mode
 */
function visualMode() {
  // Toggle body class for theme change
  document.body.classList.toggle("light-mode");
  
  // Toggle inversion for elements that need it
  document.querySelectorAll(".needtobeinvert").forEach(function(element) {
    element.classList.toggle("invertapplied");
  });
}

// ====================================================
// NAVIGATION AND MENU
// ====================================================

/**
 * Toggle mobile menu for smaller screens
 */
function hamburgerMenu() {
  // Prevent background scrolling when menu is open
  document.body.classList.toggle("stopscrolling");
  
  // Show/hide mobile menu
  document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
  
  // Animate hamburger icon
  document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
  document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
  document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

/**
 * Hide mobile menu when clicking a menu item
 */
function hideMenuByLi() {
  document.body.classList.toggle("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
  document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
  document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
  document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

// Cache section and navigation elements
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li");
const mobileNavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

/**
 * Highlight active navigation tab based on scroll position
 */
window.addEventListener("scroll", () => {
  let current = "";
  
  // Find the current section in viewport
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });
  
  // Update active state for mobile navigation
  mobileNavLi.forEach(li => {
    li.classList.remove("activeThismobiletab");
    if (li.classList.contains(current)) {
      li.classList.add("activeThismobiletab");
    }
  });
  
  // Update active state for desktop navigation
  navLi.forEach(li => {
    li.classList.remove("activeThistab");
    if (li.classList.contains(current)) {
      li.classList.add("activeThistab");
    }
  });
});

// ====================================================
// BACK TO TOP BUTTON
// ====================================================

/**
 * Show/hide back to top button based on scroll position
 */
function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

/**
 * Scroll to top of the page
 */
function scrollToTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Monitor scroll position to control back to top button
window.onscroll = function() {
  scrollFunction();
};
