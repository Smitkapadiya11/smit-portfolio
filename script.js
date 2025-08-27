// Smooth scroll
document.querySelectorAll('header nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Active section highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});

// Reveal on scroll
const revealSections = document.querySelectorAll("section");
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  revealSections.forEach(sec => {
    const boxTop = sec.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      sec.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Footer year auto-update
document.getElementById("year").textContent = new Date().getFullYear();
// Reveal cards individually
const cards = document.querySelectorAll(".card");
const revealCards = () => {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);
