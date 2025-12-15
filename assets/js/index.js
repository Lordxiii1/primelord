const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxItems = document.querySelectorAll(".lightbox-item");
const prevBtn = document.getElementById("lightbox-prev");
const nextBtn = document.getElementById("lightbox-next");



let currentIndex = 0;

lightboxItems.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  });
});

lightboxClose.addEventListener("click", () => {
  lightbox.style.display = "none";
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + lightboxItems.length) % lightboxItems.length;
  lightboxImg.src = lightboxItems[currentIndex].src;
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % lightboxItems.length;
  lightboxImg.src = lightboxItems[currentIndex].src;
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.style.display = "none";
});
/* =========================
   SCROLL + HIGHLIGHT HELPER
   ========================= */
function scrollAndHighlight(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  // Smooth scroll
  section.scrollIntoView({ behavior: "smooth" });

  // Restart highlight animation if clicked again
  section.classList.remove("section-highlight");
  void section.offsetWidth; // force reflow
  section.classList.add("section-highlight");

  // Remove highlight after a few seconds
  setTimeout(() => {
    section.classList.remove("section-highlight");
  }, 2500);
}

/* =========================
   HERO BUTTONS
   ========================= */

// Contact Me button
const toggleThemeBtn = document.getElementById("toggleTheme");
toggleThemeBtn?.addEventListener("click", () => {
  scrollAndHighlight("contact");
});

// View Projects button
document.getElementById("scrollProjects")?.addEventListener("click", () => {
  scrollAndHighlight("projects");
});

/* =========================
   BACK TO TOP BUTTON
   ========================= */

const backToTopBtn = document.getElementById("backToTop");

// Show button when scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

// Scroll to top smoothly
backToTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =========================
   CLICK COUNTER DEMO
   ========================= */

let count = 0;
const counterBtn = document.getElementById("counterBtn");
const countSpan = document.getElementById("count");

counterBtn?.addEventListener("click", () => {
  count++;
  countSpan.textContent = count;
});

/* =========================
   FADE-IN ON SCROLL
   ========================= */

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

// Filterable Projects
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");

    projectCards.forEach(card => {
      if (category === "all" || card.getAttribute("data-category") === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

