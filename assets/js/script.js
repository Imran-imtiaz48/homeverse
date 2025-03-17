"use strict";

/**
 * Toggles the "active" class on the given element.
 * @param {HTMLElement} elem - The element to toggle.
 */
const toggleElement = (elem) => elem.classList.toggle("active");

/**
 * Navbar toggle functionality.
 */
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("[data-navbar]");
  const overlay = document.querySelector("[data-overlay]");
  const navCloseBtn = document.querySelector("[data-nav-close-btn]");
  const navOpenBtn = document.querySelector("[data-nav-open-btn]");
  const navbarLinks = document.querySelectorAll("[data-nav-link]");
  
  // Elements that trigger the navbar toggle
  const toggleElements = [overlay, navCloseBtn, navOpenBtn, ...navbarLinks];

  // Add event listeners to toggle navbar and overlay
  toggleElements.forEach((element) =>
    element.addEventListener("click", () => {
      toggleElement(navbar);
      toggleElement(overlay);
    })
  );

  /**
   * Header active state on scroll.
   */
  const header = document.querySelector("[data-header]");
  
  window.addEventListener("scroll", () => {
    header.classList.toggle("active", window.scrollY >= 400);
  });
});
