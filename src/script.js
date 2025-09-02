// Toggle mobile menu
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Highlight active section link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link, .mobile-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 70; // navbar offset
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-blue-600", "font-bold");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-blue-600", "font-bold");
    }
  });
});

// Shrink navbar on scroll
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("py-2", "shadow-lg");
    navbar.classList.remove("py-4");
  } else {
    navbar.classList.add("py-4");
    navbar.classList.remove("py-2", "shadow-lg");
  }
});
