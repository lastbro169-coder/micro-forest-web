// Reveal sections on scroll
const sections = document.querySelectorAll("section");
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if(rect.top < triggerBottom) {
      section.classList.add("show");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();