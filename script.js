// Fade in sections on scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const fadeIn = () => {
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        sec.style.opacity = 1;
        sec.style.transform = "translateY(0)";
      }
    });
  };

  // Initial styling
  sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(40px)";
    sec.style.transition = "all 0.6s ease-out";
  });

  window.addEventListener("scroll", fadeIn);
  fadeIn(); // run once on load
});

// Highlight nav based on section in view
const navLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
  let current = "";

  document.querySelectorAll("section").forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 100;
    const height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});