// Theme toggle
const toggleThemeBtn = document.getElementById("toggleTheme");

toggleThemeBtn?.addEventListener("click", () => {
  const contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: "smooth" });
});

// Smooth scroll to projects
document.getElementById("scrollProjects")?.addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
});

const backToTopBtn = document.getElementById("backToTop");

// Show button when scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) { // show after 300px scroll
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

// Scroll to top smoothly when clicked
backToTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// Click counter demo
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const countSpan = document.getElementById("count");

counterBtn?.addEventListener("click", () => {
  count++;
  countSpan.textContent = count;
});

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = "0.1s";
      entry.target.classList.add("active");
    }
  });
});

faders.forEach(el => observer.observe(el));
