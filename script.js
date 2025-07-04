// Dark/Light mode toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeToggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});

// Smooth scroll for navigation
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
    }
  });
});

// Animate skill bars on scroll
function animateSkills() {
  const skillsSection = document.getElementById("skills");
  const skillLevels = document.querySelectorAll(".skill-level");
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.2;
  if (sectionPos < screenPos) {
    skillLevels.forEach((bar) => {
      bar.style.width = bar.getAttribute("style").replace("width:", "");
    });
    window.removeEventListener("scroll", animateSkills);
  }
}
window.addEventListener("scroll", animateSkills);

// Contact form submission (Formspree)
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    // Let Formspree handle the submission, but show a message after submit
    setTimeout(() => {
      formMessage.textContent =
        "Thank you for reaching out! I will get back to you soon.";
      contactForm.reset();
    }, 1000);
  });
}

// Set active nav link on click
const navLinksAll = document.querySelectorAll("nav a");
navLinksAll.forEach((link) => {
  link.addEventListener("click", function () {
    navLinksAll.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});
